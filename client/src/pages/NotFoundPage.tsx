import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-[90vh]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Page not found</p>
        <button
          onClick={() => navigate("/dashboard")}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
