import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AuthNavLogin } from '../AuthNavLogin';
import css from './RegisterForm.module.css';
import { register } from '../../redux/operations/auth.operations';

export const RegisterForm = () => {
        
    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        email: Yup.string()
        .required("Email is required"),
        password: Yup.string()
        .required("Password is required"),
        reapeatPassword: Yup.string()
        .oneOf([Yup.ref("password"),null],"Password must match")
        .required("Please confirm your password")
    })

    return(
        <div className={css.formContainer}>
        <Formik
        initialValues= {{name:"",email:"", password:""}}
        validationSchema= {validationSchema}
        onSubmit={(values,{resetForm})=>{
            dispatch(register(values));
            resetForm();
        }}
        >
            {({isSubmitting}) => (
                <Form className={css.form}> 
                <div className={css.welcome_text}>
                    <h5>WELCOME IN TASK UP!</h5>
                    <p className={css.text}>Please, complete the registration form:</p>
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
                    <div className={css.form_input}>
                        <Field type="password" name="repeatpassword" id="repeatpassword" placeholder="repeat password"/>
                        <ErrorMessage name="repeatpassword" component={"div"} className={css.error}/>
                    </div>
                    </div>
                    <div className={css.buttons}>
                    <AuthNavLogin/>
                    <button className={css.login} type="submit" disabled={isSubmitting}>Registration</button>
                    </div>
                </Form>
            )

            }
        </Formik>
        </div>
    )
}