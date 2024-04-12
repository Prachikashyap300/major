import React from "react";
import "../App.css";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {enqueueSnackbar} from 'notistack';
import {Link} from 'react-router-dom';


const SignupSchema = Yup.object().shape({
  fName: Yup.string()
  .required('Name is requires'),
  lName: Yup.string()
  .required('Last name is required'),
  email: Yup.string()
  .required('Email is required'),
  phone: Yup.string()
  .required('Phone is required'),
  course: Yup.string()
  .required('Course is required'),
  semester: Yup.string()
  .required('Semester is required'),
  password: Yup.string()
  .required('Password is required'),
  cpassword: Yup.string()
  .required('Confirm password is required')
})


const Signup = () => {
  //step 1 formik initializaiton
  const signupForm = useFormik({
    initialValues: {
      fName: '',
      lName: '',
      email: '',
      phone: '',
      course: '',
      semester: '',
      password: '',
      cpassword: '',
    },
    onSubmit: async(values, action) => {
      console.log(values);
      const res = await fetch('http://localhost:3000/user/add',{
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status)
      action.resetForm()
      if(res.status)
      action.resetForm()
      if(res.status ===200){
        enqueueSnackbar('Signup Successful', {variant: 'success'})
      }else{
        enqueueSnackbar('Signup failed', {variant: 'error'})
      }
    },
    //step 3 : validation
  
    validationSchema: SignupSchema
  })
  
  return (
    <section>
      <div className="container">
        <div className="col">
          <div className="card">
            <div className="card-header text-center">
              <h3>Signup</h3>
            </div>
            <div className="card-body">
              {/* Step 2 : handling when submit */}
              <form onSubmit={signupForm.handleSubmit}>
                <div className="form-group">
                  <div className="row">
                    <div className="col-6">
                      <label>First Name</label>
                      <span style={{color: 'red', fontSize: '10'}}>{signupForm.touched.fName && signupForm.errors.fName}</span>
                      <input
                        type="text"
                        className="form-control form-control-sm mb-4"
                        id="fName"
                        onChange={signupForm.handleChange}
                        value={signupForm.values.fName}
                      />
                    </div>
                    <div className="col-6">
                      <label>Last Name</label>
                      <span style={{color: 'red', fontSize: '10'}}>{signupForm.touched.lName && signupForm.errors.lName}</span>
                      <input
                        type="text"
                        className="form-control form-control-sm mb-4"
                        id="lName"
                        onChange={signupForm.handleChange}
                        value={signupForm.values.lName}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-6">
                      <label>Email</label>
                      <span style={{color: 'red', fontSize: '10'}}>{signupForm.touched.email && signupForm.errors.email}</span>
                      <input
                        type="email"
                        className="form-control form-control-sm mb-4"
                        id="email"
                        onChange={signupForm.handleChange}
                        value={signupForm.values.email}
                      />
                    </div>
                    <div className="col-6">
                      <label>Phone</label>
                      <span style={{color: 'red', fontSize: '10'}}>{signupForm.touched.phone && signupForm.errors.phone}</span>
                      <input
                        type="text"
                        className="form-control form-control-sm mb-4"
                        id="phone"
                        onChange={signupForm.handleChange}
                        value={signupForm.values.phone}

                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-6  mb-3">
                      <label>Course</label>
                      <span style={{color: 'red', fontSize: '10'}}>{signupForm.touched.course && signupForm.errors.course}</span>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        id="course"
                        onChange={signupForm.handleChange}
                        value={signupForm.values.course}
                      >
                        <option value="1">BCA</option>
                        <option value="2">MCA</option>
                        <option value="3">B.TECH</option>
                        <option value="4">M.TECH</option>
                        <option value="5">BCOM</option>
                        <option value="6">MCOM</option>
                        <option value="7">BBA</option>
                        <option value="8">MBA</option>
                      </select>
                    </div>
                    <div className="col-6">
                      <label>Semester</label>
                      <span style={{color: 'red', fontSize: '10'}}>{signupForm.touched.semester && signupForm.errors.semester}</span>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        id="semester"
                        onChange={signupForm.handleChange}
                        value={signupForm.values.semester}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-6">
                      <label>Password</label>
                      <span style={{color: 'red', fontSize: '5px'}}>{signupForm.touched.password && signupForm.errors.password}</span>
                      <input
                        type="password"
                        className="form-control form-control-sm mb-4"
                        id="password"
                        onChange={signupForm.handleChange}
                        value={signupForm.values.password}
                      />
                    </div>
                    <div className="col-6">
                      <label>Confirm Password</label>
                      <span style={{color: 'red', fontSize: '10'}}>{signupForm.touched.cpassword && signupForm.errors.cpassword}</span>
                      <input
                        type="password"
                        className="form-control form-control-sm mb-4"
                        id="cpassword"
                        onChange={signupForm.handleChange}
                        value={signupForm.values.cpassword}
                      />
                    </div>
                  </div>
                </div>
                <div className=" d-flex justify-content-center align-items-center">
                <button type="submit" className="btn btn-primary w-50">
                  Signup
                </button>
                </div>
             </form>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup
