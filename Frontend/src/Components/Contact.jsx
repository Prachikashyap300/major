import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const cSchema = Yup.object().shape({
  fName: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  message: Yup.string().required("Message is required"),
});
const Contact = () => {
  const CForm = useFormik({
    initialValues: {
      fName: "",
      email: "",
      message: "",
    },
    validationSchema: cSchema,
  });
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5">
            <h1>Love to hear from you</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              laudantium saepe, sunt, ipsum repellendus eveniet aut quas iure
              hic inventore harum dolorum maiores voluptates impedit nemo
              consectetur! Laudantium, corporis optio.
            </p>
            <p>comoany</p>
            <p>comoany</p>
            <p>comoany</p>
            <p>comoany</p>
            <p>comoany</p>
          </div>
          <div className="col-md-6">
            <form onSubmit={CForm.handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <span style={{ color: "blue", fontSize: "8px" }}>
                  {CForm.touched.fName && CForm.errors.fName}
                </span>
                <input
                  type="text"
                  className="form-control form-control-sm mb-4"
                  id="fName"
                  onChange={CForm.handleChange}
                  value={CForm.values.fName}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <span style={{ color: "blue", fontSize: "8px" }}>
                  {CForm.touched.email && CForm.errors.email}
                </span>
                <input
                  type="email"
                  className="form-control form-control-sm mb-4"
                  id="email"
                  onChange={CForm.handleChange}
                  value={CForm.values.email}
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <span style={{ color: "blue", fontSize: "8px" }}>
                  {CForm.touched.message && CForm.errors.message}
                </span>
                <input
                  type="textarea"
                  className="form-control form-control-sm mb-4"
                  id="message"
                  onChange={CForm.handleChange}
                  value={CForm.values.message}
                />
              </div>
              <div className=" d-flex justify-content-center align-items-center">
                <button type="submit" className="btn btn-primary w-50">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
