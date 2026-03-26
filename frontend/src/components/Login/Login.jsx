import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    console.log("handleLogin: submitting", { email });
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });

      console.log("login response:", res?.data);

      const token = res?.data?.token;
      if (!token) {
        setError("Login succeeded but no token received.");
        return;
      }

      localStorage.setItem("token", token);
      // pass token to dashboard (different dev port) so dashboard can store it in its own localStorage
      const dashboardUrl = "http://localhost:5174/";
      const url = new URL(dashboardUrl);
      url.searchParams.set("token", token);
      console.log("redirecting to dashboard url:", url.toString());
      // use replace to avoid leaving the login page in history
      window.location.replace(url.toString());
    } catch (err) {
      console.error("login error:", err);
      setError(err.response?.data?.message || err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden md:flex w-1/2 bg-blue-600 text-white items-center justify-center flex-col p-10">
        <h1 className="text-4xl font-bold mb-4">Welcome back</h1>

        <p className="text-lg opacity-90 text-center max-w-md">
          Login to access your dashboard and track your investments.
        </p>
      </div>

      <div className="flex w-full md:w-1/2 items-center justify-center p-10">
        <div className="w-full max-w-sm">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">Login</h2>
          <p className="text-gray-500 mb-8">Enter your credentials</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b p-2 outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border-b p-2 outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>

          <p className="mt-6 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
