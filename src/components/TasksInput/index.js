import { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/operations/tasks.operations";
import css from "./TasksInput.module.css";
import PropTypes from "prop-types";

export const TasksInput = ({onSubmitTask}) => {
    const [focusOnMinutes, setFocusOnMinutes] = useState(false);
    // const dispatch = useDispatch();

    useEffect(()=>{
        if(focusOnMinutes){
            document.getElementById("minutes").focus();
        }
    },[focusOnMinutes])    
    
    const validationSchema = Yup.object({
        taskText : Yup.string()
        .required("Input text."),
        hour: Yup.string()
        .matches(/^([01]?[0-9]|2[0-3])$/, "Invalid hour. Use HH format (0-23).")
        .required("Hour is required."),
    minutes: Yup.string()
        .matches(/^[0-5][0-9]$/, "Invalid minutes. Use MM format (00-59).")
        .required("Minutes are required."),
        // category : Yup.string()
        // .required("Select category"),
        // priority : Yup.string()
        // .required("Select priority")
    })

    return(
        <div>
            <div className={css.form_container}>
                <Formik
                initialValues={{taskText:"", hour:"", minutes:"", category:"", priority:""}}
                validationSchema={validationSchema}
                onSubmit={(values,{resetForm}) => {
                    const time = `${values.hour}:${values.minutes}`
                    // dispatch(addTask({...values,time}));
                    onSubmitTask(values);
                    resetForm();
                }}>
                    {({setFieldValue, values, isSubmitting}) => (
                        <Form>
                            <div className={css.form_fields}>
                            <div className={css.form_field}>
                                <Field type="text" name="taskText" id="taskText" placeholder="Add a new task..."/>
                                <ErrorMessage name="tasksText" component={"div"} className={css.error}/>
                            </div>
                            <div className={css.form_field}>
                                <Field type="text" name="hour" placeholder="HH"
                                value={values.hour}
                                onChange={(e) => {
                                    const hour = e.target.value;
                                    if(/^\d*$/.test(hour) && hour.length <= 2){
                                        setFieldValue("hour",hour)
                                    
                                    if(hour.length === 2){
                                        setFocusOnMinutes(true)
                                    }
                                    else{
                                        setFocusOnMinutes(false)
                                    }
                                }
                                }}
                                />
                            </div>
                            <span className={css.separate}>:</span>
                            <div className={css.form_field}>
                                <Field type="text" name="minutes" placeholder="MM"  id="minutes"
                                value={values.minutes}
                                onChange={(e) => {
                                    const minutes = e.target.value;
                                    if(/^\d*$/.test(minutes) && minutes.length <= 2){
                                    setFieldValue("minutes",minutes)
                                    }
                                }
                                }/>
                                <ErrorMessage name="minutes" component={"div"} className={css.error}/>
                            </div>
                            <div className={css.form_field}>
                                <Field as="select" name="category" id="category" placeholder="Set category"/>
                                <ErrorMessage name="category" component={"div"} className={css.error}/>
                            </div>
                            <div className={css.form_field}>
                                <Field as="select" name="priority" id="priority" className={css.error}/>
                                <ErrorMessage name="priority" component={"div"} className={css.error}/>
                            </div>
                            <div>
                                <button className={css.button} type="submit" disabled={isSubmitting}>Input</button>
                            </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

TasksInput.protoTypes = {
    onSubmitTask : PropTypes.func.isRequired
};