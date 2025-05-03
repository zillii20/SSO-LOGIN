// Importing components and hooks
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

function Login() {
  const navigate = useNavigate();

  // useState hook to manage email input and error

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    console.log("Login form submitted with:", { email, password });
    //cleared any existing error before attempting a new login
    setError("");

    // Adding the Firebase property to authenticate the users with the email and password enclosed under try and catch

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User logged in successfully:", userCredential.user);
      navigate("/ImageCard");
    } catch (err) {
      console.error("Login error:", err.message);
      setError("Invalid email or password");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      {/* Handling the Form Input under HandleLogin with input - email and password */}
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mb-4 p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>

        {/* Added error - for invaild email and password 
        passing under catch to display the error */}

        {error ? (
          <p className="text-red-600 mt-3 text-sm text-center">{error}</p>
        ) : null}

        <div className="mt-4 text-center">
          <p className="text-sm mb-2">Don’t have an account?</p>
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="text-blue-500 underline hover:text-blue-700"
          >
            Go to Signup
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
