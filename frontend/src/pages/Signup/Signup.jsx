import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/Input/PasswordInput";
import { validateEmail } from "../../utils/helper";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSignup = async (e) => {
    e.preventDefault();
    if (!name) {
      setError("Please enter name");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter valid email");
      return;
    }
    if (!password) {
      setError("Please enter password");
      return;
    }
    setError("");
  };
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-29">
        <div className="w-96 border-[1px] rounded bg-white px-7 py-10">
          <form onSubmit={handleSignup}>
            <h4 className="text-2xl mb-7 ">Signup</h4>
            <input
              type="text"
              placeholder="Username"
              className="input-box"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" className="btn-primary">
              Signup
            </button>
            <p className="text-sm text-center mt-4">
              Already have an account?
              <Link to="/login" className="font-medium text-blue-500 underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
