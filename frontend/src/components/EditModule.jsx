import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import apiClient from "../api/apiClient";
import { useState } from "react";
export default function EditModule() {
  const [module, setModule] = useState(null);
  /*
    {
  moduleName: somecontent,
  moduleCode:somecontent,
  moduleTrainer:somecontent,
  moduleDescription:somecontent
  }
   */
  const params = useParams();
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  /* ?. (Optional chaining operator): 
   it checks the availablity of  an object key
   if key is available will return the key value
   otherwise return null instead of throwing an error */

  const fetchModule = async () => {
    try {
      const resp = await apiClient.get(`/modules/${params.id}`);
      setModule(resp.data.data[0]);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    if (message) {
      setMessage(null);
    }
    setModule({ ...module, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsPending(true);
      const resp = await apiClient.put(`/modules/${params.id}`, module);
      setMessage(resp.data.message);
      navigate("/list-modules");
    } catch (error) {
      console.log(error);
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    fetchModule();
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center mx-4">
      <h1 className="text-2xl font-bold text-blue-900 ">Edit Module</h1>
      <p className="p-5">{message}</p>
      <form className="min-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="moduleName" className="moduleName" id="moduleName">
            Module Name
          </label>
          <input
            type="text"
            className="border-2 border-gray rounded-lg p-1"
            value={module?.moduleName}
            name="moduleName"
            id="moduleName"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="moduleCode">Module Code </label>
          <input
            type="text"
            name="moduleCode"
            id="moduleCode"
            className="border-2 border-gray rounded-lg p-1"
            value={module?.moduleCode}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="moduleDescription">Module Description</label>
          <textarea
            name="moduleDescription"
            id="moduleDescription"
            className="border-2 border-gray rounded-lg p-1"
            rows={3}
            value={module?.moduleDescription}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="moduleTrainer">Module Trainer</label>
          <input
            type="text"
            name="moduleTrainer"
            id="moduleTrainer"
            className="border-2 border-gray rounded-lg p-1"
            value={module?.moduleTrainer}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <button
            type="submit"
            className="w-full bg-blue-900 p-1 my-2 text-white rounded-full cursor-pointer hover:opacity-80"
            disabled={isPending}
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
}
