import React from 'react'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
const Forms = () => {
    const initialValue = {
        email: '',
        password: ''      
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('invalid email format').required('require'),
        password: Yup.string().required('required')
    })
    const onSubmit = (value) => {
console.log(value)
    }

    return (
        <div >
            <h1>Login Form</h1>
            <Formik
                initialValues={initialValue}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                    <Form>
                        <div>
                            <label htmlFor='email'>Email</label>
                            <Field type='email' id="email" name='email' />
                            <ErrorMessage name='email' component='div'/>
                        </div>
                        <div>
                            <label htmlFor='password'>password</label>
                            <Field type='password' name='password'/>
                            <ErrorMessage name='password' component='div'/>
                        </div>
                        <button type='submit'>Submit</button>
                    </Form>
            </Formik>
        </div>
    )
}

export default Forms
