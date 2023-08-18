import { Field, Form, Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css'
const Join = () => {
  const initialValue = {

  }
  const validationSchema = Yup.object({

  })
  const onSubmit = () => {

  }
  return (
    <div className='containers'>
      <h1>Join Form</h1>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className='form'>
          <h4>Sponser Details</h4>

          <div className='column'>
            <div className='section'>
              <div>
                <label htmlFor='name'>Sponser Id  </label>
                <Field type='name' name='name' id='name' placeHolder='  Sponser Id  ' />
              </div>
              <div>
                <label htmlFor='name'>Under Unser Id  </label>
                <Field type='name' name='name' id='name' />
              </div>
              <div>
                <label htmlFor='name'>Side  </label>
                <Field type='name' name='name' id='name' />
              </div>
            </div>
          </div>
          <h4>Sponser Details</h4>
          <div className='column'>

            <div className='section'>
              <div>
                <label htmlFor='names'>Name </label>
                <Field type='text' name='name' id='name'
                  style={{ paddingLeft: '550px' }}
                />
              </div>
            </div>
            <div className='section'>
              <div>
                <label htmlFor='name' >Under Unser Id  </label>
                <Field type='text' name='name' id='name' className='padd' />
              </div>
              <div>
                <label htmlFor='name' >Side : </label>
                <Field type='text' name='name' id='name' className='padd' />
              </div>
            </div>
            <div className='section'>
              <div>
                <label htmlFor='fname' >Nominee Name</label>
                <Field type='text' name='fname' id='fname' className='padd' />
              </div>
              <div>
                <label htmlFor='dob' >date Of Birth </label>
                <Field type='date' name='dob' id='dob' className='padd' />
              </div>

            </div>
            <div className='section'>
              <div>
                <label htmlFor='nname' >Nominee Name</label>
                <Field type='text' name='nname' id='nname' className='padd' placeHolder='Nominee Name' />
              </div>
              <div>
                <label htmlFor='relation' >RelationShip </label>
                <Field type='text' name='relation' id='relation' className='padd' placeHolder='Relationship' />
              </div>

            </div>
          </div>
        </Form>

      </Formik>
    </div>
  )
}

export default Join
