import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <div className="flex items-center bg-transparent border rounded px-5 mb-3 ">
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Password"}
        type={isShowPassword ? "text" : "password"}
        className="w-full  text-sm bg-transparent py-3 mr-4 outline-none rounded"
      />
      {isShowPassword ? (
        <FaRegEye
          size={22}
          className="cursor-pointer text-gray-500"
          onClick={() => {
            toggleShowPassword();
          }}
        />
      ) : (
        <FaRegEyeSlash
          size={22}
          className="cursor-pointer text-gray-500"
          onClick={() => {
            toggleShowPassword();
          }}
        />
      )}
    </div>
  );
};

export default PasswordInput;
