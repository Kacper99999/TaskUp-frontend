import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { logIn } from '../../redux/operations/auth.operations';
import css from "./LogInForm.module.css";

export const LogInForm = () => {

    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        email: Yup.string()
        .required("Email is required"),
        password: Yup.string()
        .required("Password is required")
    })

    return(
        <Formik
        initialValues= {{email:"", password:""}}
        validationSchema= {validationSchema}
        onSubmit={(values,{resetForm})=>{
            dispatch(logIn(values));
            resetForm();
        }}
        >
            {({isSubmitting}) => (
                <Form>
                    <div>
                        <label>Email</label>
                        <Field type="email" name="email" id="email"/>
                        <ErrorMessage name="emial" component={"div"} style={{color:"red"}}/>
                    </div>
                    <div>
                        <label>Hasło</label>
                        <Field type="password" name="password" id="password"/>
                        <ErrorMessage name="password" component={"div"} style={{color:"red"}}/>
                    </div>
                    <button type="submit" disabled={isSubmitting}>Zaloguj się</button>
                </Form>
            )

            }
        </Formik>
    )
}