import React from 'react';
import { useFormik } from 'formik';

//We have passed the initial form value and the submit function to the useFormik()
const initialValues = {
  firstName: '',
  surName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const onSubmit = values => {
  //console.log('Form data', values)
}
// validation function containing input for: an email address,a password with a minimum length of 8 characters
const validate = values => {
  let errors = {}
        
  if (!values.firstName) {
    errors.firstName = 'Required';
    
  } else if (values.firstName.length > 15) {
    errors.firstName = 'First name cannot exceed 15 characters';
  }

  if (!values.email) {
    errors.email = 'Required';
    //The expression of a valid email
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email format'
  }

  if (!values.surName) {
    errors.surName = 'Required'
  } else if (values.surName.length > 20) {
    errors.surName = 'Surname cannot exceed 20 characters'
  }

  if (!values.password) {
    errors.password = 'Password is required'
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm password is required';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors
}

//A registration function containing input for the following: First Name,surname, A valid email address, a Password,a coonform password field
export default function RegistrationForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })
  console.log('visited fields', formik.touched)
  return (

    <div className='form-control'>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" onChange={formik.handleChange} value={formik.values.firstName} onBlur={formik.handleBlur} />
          {formik.touched.firstName && formik.errors.firstName ? <div className="error">{formik.errors.firstName}</div> : null}
        </div>

        <div className='form-control'>
          <label htmlFor="surName">SurName</label>
          <input type="text" id="surName" name="surName" onChange={formik.handleChange} value={formik.values.surName} onBlur={formik.handleBlur} />
          {formik.touched.surName && formik.errors.surName ? <div className="error">{formik.errors.surName}</div> : null}
        </div>

        <div className='form-control'>
          <label htmlFor="email">email</label>
          <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
          {formik.touched.email && formik.errors.email ? <div className="error"> {formik.errors.email}</div> : null}
        </div>

        <div className='form-control'>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
          {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
        </div>

        <div className='form-control'>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" onChange={formik.handleChange} value={formik.values.confirmPassword} onBlur={formik.handleBlur} />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className="error">{formik.errors.confirmPassword}</div> : null}
        </div>
        <button type="submit">Submit</button>
      </form>

    </div>

  )
};

