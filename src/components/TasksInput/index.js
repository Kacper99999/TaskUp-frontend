import { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import css from "./TasksInput.module.css";
import PropTypes from "prop-types";


export const TasksInput = ({onSubmitTask}) => {

    return(
            <div>
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
                    
                        onSubmitTask(response);
                    
                    console.log(response);
                    resetForm();
                }}>
                    {({isSubmitting}) => (
                        <Form>
                            <div className={css.form_fields}>
                            <div className={css.form_field}>
                                <Field type="text" name="taskText" id="taskText" placeholder="Add a new task..."/>
                                <ErrorMessage name="taskText" component={"div"} className={css.error}/>
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