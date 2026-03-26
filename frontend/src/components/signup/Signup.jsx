import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/auth/register", {
        name,
        email,
        password,
      });

      alert("Account created successfully");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* LEFT PANEL */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white p-12">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-semibold mb-6">
            Start your investing journey
          </h1>

          <p className="text-lg text-blue-100 leading-relaxed">
            Join millions of investors who trust Zerodha for simple and powerful
            trading.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-white">
        <div className="w-full max-w-md px-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            Create Account
          </h2>
          <p className="text-gray-500 mb-8">Sign up to get started</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-b border-gray-300 p-3 focus:border-blue-500 outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-gray-300 p-3 focus:border-blue-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border-b border-gray-300 p-3 focus:border-blue-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-gray-600 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
