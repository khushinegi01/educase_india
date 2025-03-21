import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate()
    return (
        <div className="flex justify-center items-center min-h-screen" style={{backgroundColor:"#fafafa"}}>

            <div
                className="w-[375px] h-[700px] border border-gray-200 flex flex-col justify-end p-6  "
                style={{ backgroundColor: "#f7f8f9" }}
            >

                <div className="mb-10">
                    <h1 className="text-xl font-semibold text-gray-900">Welcome to PopX</h1>
                    <p className="text-gray-500 text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                </div>


                <div className="space-y-3">
                    <Button onClick={() => navigate("/signup")} bgColor="bg-violet-700" textColor="text-white">
                        Create Account
                    </Button>
                    <Button bgColor="bg-purple-200" onClick={() => navigate("/login")} textColor="text-purple-700">
                        Already Registered? Login
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
