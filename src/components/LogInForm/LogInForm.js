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
            <div className={css.logo}>
                <h1>TaskUp</h1>
                <p>Every task, one step closer to success</p>
            </div>
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
                    <p className={css.text}>log in using an email and password, after registering:</p>
                    <div className={css.fields}>
                    <Field type="email" name="email" id="email" placeholder="your@email.com"/> 
                    <ErrorMessage name="emial" component={"div"} style={{color:"red"}}/>
                    <Field type="password" name="password" id="password" placeholder="password"/>
                    <ErrorMessage name="password" component={"div"} style={{color:"red"}}/>   
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