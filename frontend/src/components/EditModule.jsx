import { useParams } from "react-router-dom";
import { useEffect } from "react";
export default function EditModule() {
  const params = useParams();
  const fetchModule= async()=>{impano    // TODO : to be finished tomorrow morning

  }

  useEffect(()=>{
    fetchModule()
  },[])



  return (
    <div className="h-screen flex flex-col justify-center items-center mx-4">
      <h1 className="text-2xl font-bold text-blue-900 ">Edit Module</h1>
      <form className="min-w-3xl">
        <div className="flex flex-col gap-2">
          <label htmlFor="moduleName" className="moduleName" id="moduleName">
            Module Name
          </label>
          <input type="text" className="border-2 border-gray rounded-lg p-1" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="moduleCode">Module Code </label>
          <input
            type="text"
            name="moduleCode"
            id="moduleCode"
            className="border-2 border-gray rounded-lg p-1"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="moduleDescription">Module Description</label>
          <textarea
            name="moduleDescription"
            id="moduleDescription"
            className="border-2 border-gray rounded-lg p-1"
            rows={3}
          ></textarea>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="moduleTrainer">Module Trainer</label>
          <input
            type="text"
            name="moduleTrainer"
            id="moduleTrainer"
            className="border-2 border-gray rounded-lg p-1"
          />
        </div>

        <div className="flex flex-col gap-2">
          <button
            type="submit"
            className="w-full bg-blue-900 p-1 my-2 text-white rounded-full cursor-pointer hover:opacity-80"
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
}
