import { useNavigate } from "react-router-dom";
function NotFound() {
    const navigate= useNavigate()
  return (
    <div className="h-screen flex flex-col justify-center items-center mx-4">
      <h1 className="text-5xl font-bold text-center">
        The page you are looking fo is not found
      </h1>

      <div className="my-5 flex gap-1 items-center">
        {/* Hero Action Button */}
        <button
          className="p-3 bg-blue-900 rounded-full text-yellow-400 cursor-pointer hover:opacity-70"
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>
        
      </div>
    </div>
  );
}

export default NotFound;
