import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "./context/UserContext";

function Notes({title,comment,id}) {

  //  let {title,setTitle} = useContext(UserDataContext)
  //  let {comment,setComment} =useContext(UserDataContext)

  let { data, setData } = useContext(UserDataContext);
  console.log(data)

  let navigate = useNavigate();

  let handleDelete = (index) => {
    let newArray = [...data];
    newArray.splice(index, 1);
    setData(newArray);
  };

  return (
    <>
      
      <div className="card col-lg-6 col-12  ">
        <div className="card-body">
          <div className="d-flex justify-content-between">
          <h5 className="card-title ">{title}</h5>
          <span className="mx-4">
              <img
                src="/Images/edit.svg"
                alt=""
                className="edit"
                onClick={() => {
                  navigate(`/edit/${id}`);
                }}
              />
              &nbsp; &nbsp;
              <img
                src="/Images/delete.svg"
                alt=""
                className="delete"
                onClick={() => handleDelete()}
              />
            </span>
          </div>
          
          <p className="card-text">
            {comment}
          </p>
          
        </div>
      </div>
     
    </>
  );
}

export default Notes;
