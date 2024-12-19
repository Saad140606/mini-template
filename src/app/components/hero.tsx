import image from "../images/image.png"
import Image from "next/image";

export default function Home() {
    return (
      <div className="min-h-screen bg-white">
        {/* Upper Navbar */}
        <div className="h-14 bg-gray-300"></div>
  
        {/* Hero Section */}
        <div className="flex items-center justify-center py-20">
          <div className="max-w-6xl w-full flex items-center ">
            {/* Left Section */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4 text-black">
                Welcome To Our Website
              </h1>
              <p className="text-gray-500 mb-6 text-3xl ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard.
              </p>
              <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
                Contact US
              </button>
            </div>
  
            {/* Right Section */}
            <div className="flex-1 flex justify-center">
              <div className="w-full  rounded-lg overflow-hidden shadow-md">
                <Image
                  src={image}
                  alt="Abstract Black"
                  className="w-full h-90 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  