import {Link} from 'react-router-dom';

export default function NotFound() {
  return (
      
      <div className="p-20 text-center">
        <h1 className="text-3xl font-semibold mb-4">404 Not Found </h1>
        <p className="text-gray-500 mb-6">Sorry ,the page you are looking for does not exists.</p>
        <button className="bg-blue-500 text-white h-10 w-40 rounded shadow-md hover:shadow-lg transition mb-10">
            <Link to="/">Go to Home</Link>
        </button>
      </div>
    
  );
}
