import { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import css from "./TasksInput.module.css";
import PropTypes from "prop-types";


export const TasksInput = ({handleTaskInput}) => {

    return(
            <div>
                <Formik
                initialValues={{taskText:""}}
                onSubmit={(values,{resetForm}) => {     
                        handleTaskInput(values);      
                    resetForm();
                }}>
                    {({isSubmitting}) => (
                        <Form>
                            <div className={css.form_fields}>
                            <div className={css.form_field}>
                                <Field type="text" name="taskText" id="taskText" placeholder="Add a new task..."/>
                                <ErrorMessage name="taskText" component={"div"} className={css.error}/>
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