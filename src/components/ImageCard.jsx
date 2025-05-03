import React from "react";
import { useNavigate } from "react-router-dom";
import ImageGallery from "../components/ImageGallery"; // Import the image gallery component

function ImageCard() {
  const navigate = useNavigate();
  //console.log("gallry page");

  // Function to handle logout and redirect to signup page
  const handleLogout = () => {
    console.log("User Logout SucsessFully....");
    navigate("/signup");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Added Header section with welcome message and logout button to direct to Signup page*/}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-green-700">Welcome !!!!!</h2>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Section heading for the perfume gallery */}
      <h3 className="text-lg font-semibold mb-4">
        Elegant & Thematic Collections
      </h3>
      {/* Render the image gallery component */}
      <ImageGallery />
    </div>
  );
}

export default ImageCard;
