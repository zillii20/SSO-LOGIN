// Importing components and hooks
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const navigate = useNavigate();
  // useState hook to manage email input and error
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  /*Handeled the Signup to create user with FireBase Email and Password and setting the err.message
  if the signup fails due to an invalid email or weak password, Firebase might return*/

  async function handleSignup(e) {
    e.preventDefault();
    console.log("Signup form submitted with:", { email, password });
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User created successfully:", userCredential.user);
      navigate("/Login");
    } catch (err) {
      console.error("Signup error:", err.message);
      setError(err.message);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <form
        onSubmit={handleSignup}
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
          Submit
        </button>
        {/* Added error - for invaild email and password 
        passing under catch to display the error */}

        {error ? (
          <p className="text-red-600 mt-3 text-sm text-center">{error}</p>
        ) : null}

        <div className="mt-4 text-center">
          <p className="text-sm mb-2">Already registered?</p>
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-blue-500 underline hover:text-blue-700"
          >
            Go to Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
