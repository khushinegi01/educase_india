import React from "react";

function Button({
  children,
  type = "button",
  className = "",
  textColor = "text-white",
  bgColor = "bg-violet-700", 
  ...props
}) {
  return (
    <button
      type={type}
      className={`px-4 py-3 rounded-md w-full font-medium ${textColor} ${bgColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
