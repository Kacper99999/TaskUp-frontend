import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { logIn } from '../../redux/operations/auth.operations';
import { AuthNavRegister } from '../AuthNavRegister';
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
        <div className={css.formContainer}>
        <Formik
        initialValues= {{email:"", password:""}}
        validationSchema= {validationSchema}
        onSubmit={(values,{resetForm})=>{
            dispatch(logIn(values));
            resetForm();
        }}
        >
            {({isSubmitting}) => (
                <Form className={css.form}>
                    <div className={css.welcome_text}>
                    <h5>WELCOME IN TASK UP!</h5>
                    <p className={css.text}>Log in using an email and password, after registering:</p>
                    </div> 
                    <div className={css.fields}>
                    <div className={css.form_input}>
                    <Field type="email" name="email" id="email" placeholder="your@email.com"/> 
                    <ErrorMessage name="email" component={"div"} className={css.error}/>
                    </div>
                    <div className={css.form_input}>
                    <Field type="password" name="password" id="password" placeholder="password"/>
                    <ErrorMessage name="password" component={"div"} className={css.error}/>   
                    </div>   
                    </div>
                    <div className={css.buttons}>
                    <button className={css.login} type="submit" disabled={isSubmitting}>Log In</button>
                    <AuthNavRegister/>
                    </div>
                </Form>
            )

            }
        </Formik>
        </div>
    )
}