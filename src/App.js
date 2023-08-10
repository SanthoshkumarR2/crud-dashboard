import React, { useState } from "react";
import Table from "./Table/Table";
import Form from "./Form/Form";
import { Routes, Route } from "react-router-dom";
import EditUser from "./Edit/EditUser";

function App() {
  const [formList, setFormList] = useState([
    {
        id: 1,
        name: "Santhosh",
        email: "santhosh@gmail.com",
        content: "Junior Full Stack Developer",
    },
    {
        id: 2,
        name: "Sabari",
        email: "sabari@gmail.com",
        content: "Senior Full Stack Developer",
    },
    {
        id: 3,
        name: "Rajesh",
        email: "rajesh@gmail.com",
        content: "Digital Marketer",
      },
      {
        id: 4,
        name: "Ravi",
        email: "ravi@gmail.com",
        content: "Social Media Influencer",
      }
  ]);



  
  return (
    <>
      <Routes>
      
        <Route
          path="/"
          element={<Table formList={formList} setFormList={setFormList} />}
        />
        <Route
          path="/form"
          element={<Form formList={formList} setFormList={setFormList} />}
        />
        <Route
          path="/edit/:id"
          element={<EditUser formList={formList} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function NotFound() {
  return (
    <div className="error">
      
      <img 
        src='./src/404page'
      />
    </div>
  );
}

export default App;