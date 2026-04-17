import { Link, Outlet } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-2 py-1 bg-blue-900">
        <Link className="text-white" to={"/"}>Gihogwe e-Learning System</Link>

        <div className="p-1 flex gap-1">
          <Link to={"/"}  className=" p-1 text-yellow-400 hover:border rounded-full px-3">
            Home
          </Link>
          <Link to={"/new-module"} className=" p-1 text-yellow-400 hover:border rounded-full px-3">
            New Module
          </Link>
          <Link to={"/list-modules"}  className=" p-1 text-yellow-400 hover:border rounded-full px-3">
            Modules
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
