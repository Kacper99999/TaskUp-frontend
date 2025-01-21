import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AuthNavLogin } from '../AuthNavLogin';
import css from './RegisterForm.module.css';
import { register } from '../../redux/operations/auth.operations';

export const RegisterForm = () => {
        
    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        name: Yup.string()
        .required("Name is required"),
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
        initialValues= {{name:"",email:"", password:""}}
        validationSchema= {validationSchema}
        onSubmit={(values,{resetForm})=>{
            dispatch(register(values));
            resetForm();
        }}
        >
            {({isSubmitting}) => (
                <Form className={css.form}> 
                <div>
                    <h5 className={css.text}>WELCOME IN TASK UP!</h5>
                    <p>Please, complete the registration form:</p>
                    </div>
                    <div className={css.fields}>
                    <div className={css.form_input}>
                    <Field type="text" name="name" id="name" placeholder="name"/>
                    <ErrorMessage name="name" component={"div"} className={css.error}/>
                    </div>
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