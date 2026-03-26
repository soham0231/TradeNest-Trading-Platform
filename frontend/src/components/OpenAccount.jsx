import { Link } from "react-router-dom";

export default function OpenAccount() {
  return (
      <div className="p-20 text-center">
        <h1 className="text-3xl font-semibold mb-4">Open a Zerodha account </h1>
        <p className="text-gray-500 mb-6">Modern platforms and apps, $0 investment, and flat $ 20 intraday and F&O trades.</p>
        
        <Link to="/signup" >
         <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition cursor-pointer">
            Sign up for free
          </button>
        </Link>

      </div>
    
  );
}