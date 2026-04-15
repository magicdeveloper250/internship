import { useState } from "react";
import apiClient from "../api/apiClient";
export default function CreateModule() {
  const [formData, setFormData] = useState({
    moduleName: "",
    moduleCode: "",
    moduleDescription: "",
    moduleTrainer: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /*
    http response code:
     200 ok, 
     201 created, 
     204 no content, 
     400 bad request, 
     404 not found,
     500 server error

    http methodS: 
     
     1. POST: used for submitting new data to database
     2. GET: used for retrieving data from datatabase 
     3. PUT: used updating full data
     4. PATCH: used updating specified data field in database
     5. DELETE: used for dropping/deleting data from database
     6. OPTIONS: used by http client for determining the method the path is using 

     oop principles:
      Abstraction
      Inheritance
      encupslation
      
     */


    try {
      const response = await apiClient.post("/modules", formData);
      console.log(response);
    } catch (e) {}
  };

  return (
    <div className="flex flex-col justify-center items-center max-w-2xl max-h-screen overflow-y-auto">
      <div className="flex flex-col gap-2">
        <h1 className="font-extrabold text-2xl">Create new Module</h1>
      </div>
      <form  onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="moduleName">Module Name</label>
          <input
            type="text"
            id="moduleName"
            name="moduleName"
            className="border-2 border-gray "
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="moduleCode">Module Code</label>
          <input
            type="text"
            name="moduleCode"
            id="moduleCode"
            className="border-2 border-gray"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="moduleDescription">Module Description</label>
          <textarea
            type="text"
            name="moduleDescription"
            id="moduleDescription"
            className="border-2 border-gray auto-rows-auto"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="moduleTrainer">Module Trainer</label>
          <input
            type="text"
            name="moduleTrainer"
            id="moduleTrainer"
            className="border-2 border-gray"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <button
            type="submit"
            className="w-full bg-blue-600 p-1 my-2 text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
