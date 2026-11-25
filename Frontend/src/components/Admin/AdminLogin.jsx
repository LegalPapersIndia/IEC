import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm transition duration-200 hover:border-slate-400 focus:outline-none focus:border-navy-600 focus:ring-2 focus:ring-navy-600/20";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const correctUsername = import.meta.env.VITE_ADMIN_USERNAME;
    const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    if (!correctUsername || !correctPassword) {
      setError("Environment variables missing. Check .env file.");
      setLoading(false);
      return;
    }

    if (username.trim() === correctUsername && password === correctPassword) {
      // Login flag + Basic Auth credentials (dashboard API calls ke liye)
      sessionStorage.setItem("adminLoggedIn", "true");
      sessionStorage.setItem(
        "adminCredentials",
        btoa(`${correctUsername}:${correctPassword}`)
      );
      navigate("/admin/dashboard");
    } else {
      setError("Invalid username or password");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center px-4 py-12 md:py-16">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 w-full max-w-md p-6 sm:p-10">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-navy-900 text-white rounded-2xl flex items-center justify-center mb-5 shadow-sm">
            <FaLock size={26} aria-hidden="true" />
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900">
            Admin Login
          </h1>
          <span className="mx-auto mt-3 block h-1 w-12 rounded-full bg-orange-500"></span>
          <p className="text-slate-500 mt-3 text-sm md:text-base">
            IEC Leads Dashboard
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label
              htmlFor="admin-username"
              className="block text-sm font-semibold text-slate-700 mb-1.5"
            >
              Username
            </label>
            <input
              id="admin-username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={inputClass}
              placeholder="Enter username"
              autoComplete="username"
              required
            />
          </div>

          <div>
            <label
              htmlFor="admin-password"
              className="block text-sm font-semibold text-slate-700 mb-1.5"
            >
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClass}
              placeholder="Enter password"
              autoComplete="current-password"
              required
            />
          </div>

          {error && (
            <div
              role="alert"
              className="bg-red-50 border border-red-200 text-red-800 p-3.5 rounded-lg text-center text-sm font-medium"
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-orange-600 hover:bg-orange-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white py-3.5 font-semibold text-base shadow-sm shadow-orange-600/30 transition-all duration-200 hover:-translate-y-0.5 disabled:hover:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
          >
            {loading ? "Logging in..." : "Login to Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
}