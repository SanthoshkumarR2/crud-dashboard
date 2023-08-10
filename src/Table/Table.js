import React from "react";
import { useNavigate } from "react-router-dom";
import "./Table.css";
import TableList from "./TableList";

const Table = ({ formList, setFormList }) => {
  const navigate = useNavigate();
  return (
    <>

      
    
      <div className="container">
        <h1 className="main-heading text-center">CRUD Application</h1>
        <div className="rows">
          <div className="col">
            <h2 id ="datas" className="text-center pb-3">List Of Data</h2>
            <div className="row">
              <table className="table table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">About You</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <TableList formList={formList} setFormList={setFormList} />
              </table>
            </div>
            <div className="create-div">
              <button
                className="create-btns"
                onClick={() => navigate(`/form`)}
              >
                Create New
              </button>
            </div>
          </div>
        </div>
      </div>
   
    </>
  );
};

export default Table;