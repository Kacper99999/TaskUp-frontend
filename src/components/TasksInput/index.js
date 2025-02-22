import { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import css from "./TasksInput.module.css";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const TasksInput = ({onSubmitTask}) => {
    const [focusOnStartMinutes, setFocusOnStartMinutes] = useState(false);
    const [focusOnEndMinutes, setFocusOnEndMinutes] = useState(false);

    // const dispatch = useDispatch();

    useEffect(()=>{
        if(focusOnStartMinutes){
            document.getElementById("start_minutes").focus();
        }
    },[focusOnStartMinutes])   
    
    useEffect(() => {
        if(focusOnEndMinutes){
            document.getElementById("end_minutes").focus();
        }
    },[focusOnEndMinutes])

     const showErrorToast = (message) => {
        toast.error(message, {
            className: "toast-error",
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    
    return(
            <div>
                <ToastContainer/>
                <Formik
                initialValues={{taskText:"", start_hour:"", start_minutes:"", end_hour:"", end_minutes:"", category:"", priority:""}}
                onSubmit={(values,{resetForm}) => {
                    const start_time = `${values.start_hour}:${values.start_minutes}`;
                    const end_time = `${values.end_hour}:${values.end_minutes}`;
                    const response = {...values, start_time, end_time};
                    delete response.start_hour;
                    delete response.start_minutes;
                    delete response.end_hour;
                    delete response.end_minutes;
                    if(!values.taskText || !values.start_hour || !values.start_minutes || !values.end_hour || !values.end_minutes){
                        showErrorToast("Fill all fields")
                        
                    }
                    else{
                        onSubmitTask(response);
                    }
                    resetForm();
                }}>
                    {({setFieldValue, values, isSubmitting}) => (
                        <Form>
                            <div className={css.form_fields}>
                            <div className={css.form_field}>
                                <Field type="text" name="taskText" id="taskText" placeholder="Add a new task..."/>
                                <ErrorMessage name="taskText" component={"div"} className={css.error}/>
                            </div>
                            <div className={css.form_field}>
                                <Field type="text" name="start_hour" placeholder="HH"
                                value={values.start_hour}
                                onChange={(e) => {
                                    const start_hour = e.target.value;
                                    if(/^\d*$/.test(start_hour) && start_hour.length <= 2){
                                        setFieldValue("start_hour",start_hour)
                                    
                                    if(start_hour.length === 2){
                                        setFocusOnStartMinutes(true)
                                    }
                                    else{
                                        setFocusOnStartMinutes(false)
                                    }
                                }
                                }}
                                />
                            </div>
                            <span className={css.separate}>:</span>
                            <div className={css.form_field}>
                                <Field type="text" name="start_minutes" placeholder="MM"  id="start_minutes"
                                value={values.start_minutes}
                                onChange={(e) => {
                                    const start_minutes = e.target.value;
                                    if(/^\d*$/.test(start_minutes) && start_minutes.length <= 2){
                                    setFieldValue("start_minutes",start_minutes)
                                    }
                                }
                                }/>
                            </div>

                            <div className={css.form_field}>
                                <Field type="text" name="end_hour" placeholder="HH"
                                value={values.end_hour}
                                onChange={(e) => {
                                    const end_hour = e.target.value;
                                    if(/^\d*$/.test(end_hour) && end_hour.length <= 2){
                                        setFieldValue("end_hour",end_hour)
                                    
                                    if(end_hour.length === 2){
                                        setFocusOnEndMinutes(true)
                                    }
                                    else{
                                        setFocusOnEndMinutes(false)
                                    }
                                }
                                }}
                                />
                            </div>
                            <span className={css.separate}>:</span>
                            <div className={css.form_field}>
                                <Field type="text" name="end_minutes" placeholder="MM"  id="end_minutes"
                                value={values.end_minutes}
                                onChange={(e) => {
                                    const end_minutes = e.target.value;
                                    if(/^\d*$/.test(end_minutes) && end_minutes.length <= 2){
                                    setFieldValue("end_minutes",end_minutes)
                                    }
                                }
                                }/>
                            </div>

                            <div className={css.form_field}>
                                <Field as="select" name="category" id="category" placeholder="Set category"/>
                            </div>
                            <div className={css.form_field}>
                                <Field as="select" name="priority" id="priority"/>
                            </div>
                            <div>

                                <button className={css.button} type="submit" disabled={isSubmitting}>Input</button>
                            </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
    )
}

TasksInput.propTypes = {
    onSubmitTask : PropTypes.func.isRequired
};