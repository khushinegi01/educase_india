import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate()
    const [agency, setAgency] = useState("yes");

  return (
    <div className="flex justify-center items-center min-h-screen"  style={{backgroundColor:"#fafafa"}}>
      <div
        className="w-[375px] h-[700px] border border-gray-200 flex flex-col justify-end p-6  "
        style={{ backgroundColor: "#f7f8f9" }}
      >
        {/* Title */}
        <h1 className="m-2 text-3xl font-medium  mb-6">
          Create your PopX account
        </h1>

        {/* Form (Flexible to push the button down) */}
        <form className="space-y-4 flex-grow">
          <Input label="Full Name" required placeholder="Enter your name" />
          <Input label="Phone number" required placeholder="Enter your phone" />
          <Input label="Email address" required type="email" placeholder="Enter your email" />
          <Input label="Password" required type="password" placeholder="Enter your password" />
          <Input label="Company name" placeholder="Enter your company name" />

          {/* Radio Buttons */}
          <div>
            <label className="text-sm font-normal text-gray-900">
              Are you an Agency? <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-4 mt-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  value="yes"
                  checked={agency === "yes"}
                  onChange={() => setAgency("yes")}
                  className="hidden"
                />
                <div className={`w-5 h-5 rounded-full border ${agency === "yes" ? "border-violet-700 bg-violet-700" : "border-gray-400"}`} />
                <span className="text-gray-700">Yes</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  value="no"
                  checked={agency === "no"}
                  onChange={() => setAgency("no")}
                  className="hidden"
                />
                <div className={`w-5 h-5 rounded-full border ${agency === "no" ? "border-violet-700 bg-violet-700" : "border-gray-400"}`} />
                <span className="text-gray-700">No</span>
              </label>
            </div>
          </div>
        </form>

        {/* Button at Bottom */}
        <div className="mt-auto">
          <Button onClick={()=> navigate("/profile")} bgColor="bg-violet-700" textColor="text-white">
            Create Account
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
