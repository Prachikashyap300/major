import React from "react";
import'../App.css';
import { useFormik } from "formik";
import * as Yup from "yup";
import { enqueueSnackbar } from "notistack";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
  .required('Email is required'),
  password: Yup.string()
  .required('Password is required'),
})


const Login = () => {
  const LoginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    //step 3 : validation
  
    validationSchema: LoginSchema
  })
  return (
    <section>
      <div className="container">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h3>Login </h3>
            </div>
            <div className="card-body">
              <form onSubmit={LoginForm.handleSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <span style={{color:'blue', fontSize:'8px'}}>{LoginForm.touched.email && LoginForm.errors.email}</span>
                  <input
                    type="email"
                    className="form-control form-control-sm mb-4"
                    id='email'
                    onChange={LoginForm.handleChange}
                    value={LoginForm.values.email}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <span style={{color:'blue', fontSize:'8px'}}>{LoginForm.touched.password && LoginForm.errors.password}</span>
                  <input
                    type="password"
                    className="form-control form-control-sm mb-4"
                    id='password'
                    onChange={LoginForm.handleChange}
                    value={LoginForm.values.password}
                  />
                </div>
                <div className=" d-flex justify-content-center align-items-center">
                <button type="submit" className="btn btn-primary w-50">
                  Login
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
