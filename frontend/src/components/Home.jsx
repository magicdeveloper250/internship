import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col justify-center items-center mx-4">
      <h1 className="text-5xl font-bold text-center">
        WELCOME TO GIHOGWE e-LEARNING SYSTEM
      </h1>

      <div className="my-5 flex gap-1 items-center">
        {/* Hero Action Button */}
        <button
          className="p-3 bg-blue-900 rounded-full text-yellow-400 cursor-pointer hover:opacity-70"
          onClick={() => navigate("/new-module")}
        >
          Get Started
        </button>
        <button
          className="p-3 border rounded-full cursor-pointer hover:opacity-70"
          onClick={() => navigate("/list-modules")}
        >
          View Modules
        </button>
      </div>
    </div>
  );
}

export default Home;
