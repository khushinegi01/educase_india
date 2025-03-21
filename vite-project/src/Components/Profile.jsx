import React from "react";

function Profile() {
    return (
        <div className="flex justify-center items-center min-h-screen "  style={{backgroundColor:"#fafafa"}}>
          <div
            className="w-[375px] h-[700px] border border-gray-200  " style={{ backgroundColor: "#f7f8f9" }}
          >
            {/* Title */}
            <div className="bg-white">
              <div className="p-5">
                <h2 className="text-xl font-medium text-gray-900 flex items-center space-x-4">
                  Account Settings
                </h2>
              </div>
            </div>
    
            {/* Profile Section */}
            <div className="p-6" style={{ backgroundColor: "#f7f8f9" }}>
              <div className="flex items-center space-x-4">
                {/* Profile Image Container */}
                <div className="relative w-20 h-20">
                  <img
                    src="https://th.bing.com/th/id/OIP.Oji8Cuzc_Ec_1CW6RaUQSAAAAA?w=474&h=474&rs=1&pid=ImgDetMain"
                    alt="Profile"
                    className="w-20 h-20 rounded-full  border-none shadow-md"
                  />
                  {/* Camera Icon */}
                  <div className="absolute bottom-0 right-0  p-1 rounded-full  ">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3687/3687416.png"
                      className="w-5 h-5"
                      alt="Camera"
                    />
                  </div>
                </div>
    
                {/* Name & Email */}
                <div>
                  <h3 className="text-lg font-semibold">Marry Doe</h3>
                  <p className="text-sm">Marry@Gmail.Com</p>
                </div>
              </div>
    
              {/* Bio */}
              <p className=" text-sm mt-4">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam.
              </p>
            </div>
    
            {/* Bottom Divider */}
            <div className="border-t border-gray-300 border-dashed " ></div>
          </div>
        </div>
      );
    }

export default Profile;
