import React from "react";

function Input(
    { 
        label,
        required, 
        className = "",
         ...props
    }
)
{
  return (
    <div className="relative">
      <label className="absolute top-0 left-2 px-1  text-sm font-normal text-violet-700" style={{ backgroundColor: "#f7f8f9" }}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        className={`w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-0 ${className}`}
        {...props}
      />
    </div>
  );
}

export default Input;
