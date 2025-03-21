import React from 'react'
import Button from './Button';
import Input from './Input';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    return (
        <div className="flex justify-center items-center min-h-screen "  style={{backgroundColor:"#fafafa"}}>
          <div
            className="w-[375px] h-[700px] border border-gray-200 flex flex-col p-6  "
            style={{ backgroundColor: "#f7f8f9" }}
          >
            {/* Title */}
            <div className="mb-6 w-full pr-16">
              <h1 className="text-3xl font-medium  text-gray-900">
                Sign in to your PopX account
              </h1>
              <p className="text-gray-500 font-normal mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
            </div>
    
            {/* Form Section (Button Inside Form) */}
            <form className="space-y-4">
              <Input label="Email " placeholder="Enter email address" />
              <Input label="Password  " type="password" placeholder="Enter password" />
              
              {/* Button Directly Below Inputs */}
              <Button onClick={()=> navigate("/profile")} bgColor="bg-stone-300" textColor="text-white">
                Login
              </Button>
            </form>
          </div>
        </div>
      );
    }

export default Login
