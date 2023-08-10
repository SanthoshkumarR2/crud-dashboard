import React from 'react'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { useParams } from 'react-router-dom';
import "./EditUser.css"

const formvalidationSchema = yup.object({
    id: yup
        .number()
        .required(),
    name: yup
        .string()
        .required().min(4),
    email: yup
        .string()
        .required(),
    content: yup
        .string()
        .required().min(5),
   
})
const EditUser = ({formList}) => {

  const params = useParams();
  const Index = formList.findIndex((item) => item.id == params.id);
  const details = formList[Index];

  const navigate = useNavigate();

  const formik = useFormik({
      initialValues: {
          id: details.id,
          name: details.name,
          email: details.email,
          content: details.content,
      },
      validationSchema: formvalidationSchema,
      onSubmit: (values) => {
          formList.splice(Index, 1, values);
          navigate("/");
      },
  })


  return (
    <>
    <div className='App'>
      
   
      <form className="form-containers" onSubmit={formik.handleSubmit}>
        <h2 className="updateform">Update Form</h2>
        <div className="feild-containers">
          <div className="form-group">
            <label className="form-group" >Enter The ID</label>
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
            <label className="form-group">Enter the Name</label>
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
          <label className="form-group"> Enter Email ID</label>
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
          <label className="form-group"> About Yourself</label>
            <textarea
              className="form-control"
              id="Textarea"
              placeholder="Write something about you..."
              name="content"
              value={formik.values.content}
              onChange={formik.handleChange}
            ></textarea>
          </div><br/>
        </div>
        <br/>
        <div className="c-3">
          <button className="update-button" >
            Update
          </button>  <br/>
        </div>  <br/>  <br/>
      </form>
    
      </div>
    </>
  )
}

export default EditUser