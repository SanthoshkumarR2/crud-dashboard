import React from 'react'
import "./Form.css"
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";

const formvalidationSchema = yup.object({
  id: yup
    .number()
    .required(),
  name: yup
    .string()
    .required().min(2),
  email: yup
    .string()
    .required(),
  content: yup
    .string()
    .required().min(3),

})
const Form = ({ formList, setFormList }) => {


  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      email: "",
      content: "",
    },
    validationSchema: formvalidationSchema,
    onSubmit: (values) => {
      setFormList([...formList, values]);
      navigate("/");
    },
  })


  return (
    <>
      <form className="form-container" onSubmit={formik.handleSubmit}>
        <h2 className="updateform">Update Form</h2>
        <div className="container">
          <div className="form-group">
            <label>Enter The ID</label>
            <input
              type="number"
              className="form-control"
              id="Input"
              placeholder="Id"
              name="id"
              value={formik.values.id}
              onChange={formik.handleChange}
            />
          </div>
          <div className="form-group">
          <label>Enter The Name</label>
            <input
              type="text"
              className="form-control"
              id="Input"
              placeholder="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />

          </div>
          <div className="form-group">
          <label>Enter Email ID</label>
            <input
              type="email"
              className="form-control"
              id="Input2"
              placeholder="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <div className="form-group">
          <label>About Yourself</label>
            <input
              type="text"
              className="form-control"
              id="Textarea"
              placeholder="Write something.."
              name="content"
              value={formik.values.content}
              onChange={formik.handleChange}
            ></input>
          </div>
          <br/> <br/>
        </div>
        <div className="c-3">
          <button type="submit" className="update-button" >
            Update
          </button>
        </div><br/> <br/>
      </form>
    </>
  )
}

export default Form;