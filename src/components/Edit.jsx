import React from "react";
import { useEffect, useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useParams, useNavigate } from "react-router-dom";
import { UserDataContext } from "./context/UserContext";

function Edit() {
  
  let { data, setData } = useContext(UserDataContext);
  console.log(data);

  const [initialValues,setInitialValues] = useState({  title:"",  comment:""  })

  const params = useParams();

  const getData = (index)=>{
    let newValues = {...initialValues}
    newValues.title = data[index].title
    newValues.comment = data[index].comment
    console.log(newValues)
    setInitialValues(newValues)
  }

  let navigate = useNavigate();

  const UserSchema = Yup.object().shape({
    title:Yup.string().required('* Required').min(3,'* title should be atlest 3 characters'),
    comment:Yup.string().required('* Required').min(3,'* Comment should be atlest 3 characters')
    
  })

  useEffect(() => {
    if (Number(params.id) < data.length) {
      getData(Number(params.id));
    } else {
      navigate("/dashboard");
    }
  }, []);

  // const handleEdit = () => {
  //   let newArray = [...data];
  //   let updateditems = { title, comment };
    
  //   newArray[params.id] = updateditems;
  //   setData(newArray);
  //   navigate("/dashboard");
  // };

  return (
    <>
       <div className="rightside">
        <div className="rightcontent">
          <div className="mobilemenu d-block d-sm-none my-2">
            <div className="row align-items-center justify-content-between">
            <a className="logo navbar-brand col-6 m-0" href="#">Notes</a>
            <div className="  text-end px-4"> 
               
              <i className="menuicon fa-solid fa-bars fa-xl" data-bs-toggle="offcanvas-md" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop"></i>
            </div>
            </div>
          </div>
          
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
        </div>
        <div className="row">
        <Formik
            initialValues={initialValues}
            validationSchema={UserSchema}
            enableReinitialize={true}
            onSubmit={(values) => {
              let newArray = [...data];
              let updateditems = { 
                title: values.title, 
                comment: values.comment};
               newArray[params.id] = updateditems;
               setData(newArray);
                navigate("/dashboard");
            }}
          >
            {({ values,errors, touched, handleBlur, handleChange,handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3 title-input"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    name="title"
                    value = {values.title}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.title && touched.title ? ( <div style={{ color: "red" }}>{errors.title}</div>  ) : null}
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label> Take a Note</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="comment"
                    value = {values.comment}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    
                  />
                  {errors.comment && touched.comment ? (<div style={{ color: "red" }}>{errors.comment}</div> ) : null}
                </Form.Group>

                <Button type="submit" className="button-submit"> Add</Button>
              </form>
            )}
          </Formik>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Edit;


