import React, { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { authDataContext } from "../Context/AuthContext";
import axios from "axios";
import { userDataContext } from "../Context/UserContext";
import { toast } from "react-toastify";

function Login() {
  let [show, setShow] = useState(false);
  let { serverUrl, loading, setLoading } = useContext(authDataContext);
  let { setUserData } = useContext(userDataContext);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let result = await axios.post(
        serverUrl + "/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      setLoading(false);
      setUserData(result.data);
      navigate("/");
      toast.success("Login Successfully");
    } catch (error) {
      setLoading(false);
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 relative">
      {/* Back Button */}
      <div
        className="w-12 h-12 bg-white hover:bg-gray-100 cursor-pointer absolute top-8 left-6 rounded-full flex items-center justify-center shadow-md border border-gray-300 transition"
        onClick={() => navigate("/")}
      >
        <FaArrowLeftLong className="w-5 h-5 text-gray-700" />
      </div>

      {/* Login Card */}
      <form
        className="w-[95%] max-w-md bg-white rounded-xl p-8 flex flex-col gap-6 shadow-xl border border-gray-200"
        onSubmit={handleLogin}
      >
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Welcome Back
        </h1>
        <p className="text-gray-500 text-center text-sm">
          Please login to your account
        </p>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-gray-700 text-sm">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="w-full h-12 bg-gray-50 border border-gray-300 rounded-lg px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="password" className="text-gray-700 text-sm">
            Password
          </label>
          <input
            type={show ? "text" : "password"}
            id="password"
            className="w-full h-12 bg-gray-50 border border-gray-300 rounded-lg px-4 pr-10 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            placeholder="Enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {!show ? (
            <IoMdEye
              className="w-5 h-5 absolute right-3 bottom-3 text-gray-500 cursor-pointer hover:text-gray-700 transition"
              onClick={() => setShow((prev) => !prev)}
            />
          ) : (
            <IoMdEyeOff
              className="w-5 h-5 absolute right-3 bottom-3 text-gray-500 cursor-pointer hover:text-gray-700 transition"
              onClick={() => setShow((prev) => !prev)}
            />
          )}
        </div>

        {/* Button */}
        <button
          className="w-full h-12 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Loading..." : "Login"}
        </button>

        {/* Signup Link */}
        <p className="text-gray-600 text-sm text-center">
          Don’t have an account?{" "}
          <span
            className="text-red-600 hover:underline cursor-pointer"
            onClick={() => navigate("/SignUP")}
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
