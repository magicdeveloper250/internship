import { useState, useEffect } from "react";
import apiClient from "../api/apiClient";
import { Link } from "react-router-dom";
export default function ListModules() {
  const [modules, setModules] = useState([]);

  const fetchModules = async () => {
    try {
      const resp = await apiClient.get("/modules");
      setModules(resp.data.data);
    } catch (e) {}
  };
  useEffect(() => {
    fetchModules();
  }, []);

  //   id, moduleName,moduleCode,moduleTrainer,moduleDescription,createAt,updateAt

  return (
    <div className="h-screen flex flex-col justify-center items-center mx-4">
      <h1 className="text-2xl text-blue-900 font-bold text-center">List of Modules</h1>
      <table className="table p-2">
        <thead className="table-header-group border-2">
          <td className="px-3 font-bold">Id</td>
          <td className="px-3 font-bold">Module Name</td>
          <td className="px-3 font-bold">Module Code</td>
          <td className="px-3 font-bold">Module Trainer</td>
          <td className="px-3 font-bold">Module Description</td>
          <td className="px-3 font-bold">Create At</td>
          <td className="px-3 font-bold">Update At</td>
          <td className="px-3 font-bold">Actions</td>
        </thead>
        <tbody className="table-body">
          {modules.map((module, index) => {
            return (
              <tr key={index} className="table-row border-2">
                <td className="table-cell border-2 px-3">{module.id}</td>
                <td className="table-cell border-2 px-3">
                  {module.moduleName}
                </td>
                <td className="table-cell border-2 px-3">
                  {module.moduleCode}
                </td>
                <td className="table-cell border-2 px-3">
                  {module.moduleTrainer}
                </td>
                <td className="table-cell border-2 px-3">
                  {module.moduleDescription}
                </td>
                <td className="table-cell border-2 px-3">{module.createAt}</td>
                <td className="table-cell border-2 px-3">{module.updateAt}</td>

                {/* Ation buttons td */}
                <td className="flex p-2 justify-between gap-1">
                  <Link to={`/edit-module/${module.id}`} className="bg-yellow-600 text-white p-2 rounded-sm cursor-pointer hover:opacity-80">
                    Edit
                  </Link>
                  <button className="bg-red-600 text-white p-2 rounded-sm cursor-pointer hover:opacity-80">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
