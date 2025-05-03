import React, { useState } from "react";
import { getAuth } from "firebase/auth";

//List of image URLs used in the gallery
const ImageList = [
  "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1557980/pexels-photo-1557980.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/965992/pexels-photo-965992.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/724635/pexels-photo-724635.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/7703038/pexels-photo-7703038.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/30990132/pexels-photo-30990132/free-photo-of-elegant-perfume-bottle-with-natural-shadows.jpeg?auto=compress&cs=tinysrgb&w=600",
];

function ImageGallery() {
  const auth = getAuth();
  const user = auth.currentUser; //target the Current Logined User

  // Initialized image states: liked,  like count, comments, and input
  const ImageStates = ImageList.map((url) => {
    return {
      url,
      liked: false,
      count: 0,
      comments: [],
      commentInput: "",
    };
  });
  const [images, setImages] = useState(ImageStates);

  //Toggle like/Unlick for a Image
  const handleLikeToggle = (index) => {
    const updatedImages = [...images];
    const image = updatedImages[index]; // get the target image object

    // Update the like status and count
    image.liked = !image.liked;
    image.count = image.liked ? image.count + 1 : image.count - 1;
    console.log(
      `Image ${index + 1} ${image.liked ? "liked" : "unliked"}. Like count: ${
        image.count
      }`
    );
    // Set the Image
    setImages(updatedImages);
  };

  //Updating the Comment for a image
  const handleCommentChange = (index, value) => {
    const updatedImages = [...images];
    updatedImages[index] = {
      ...updatedImages[index],
      commentInput: value, // Update the comment input
    };
    console.log(`Comment input for Image ${index + 1} updated: ${value}`);
    setImages(updatedImages);
  };

  //Clearing the Input after Submission of the Comment
  const handleCommentSubmit = (index) => {
    if (!images[index].commentInput.trim()) return;

    const newComment = {
      email: user?.email || "Anonymous",
      text: images[index].commentInput.trim(),
    };

    const updatedImages = [...images];
    const targetImage = { ...updatedImages[index] };

    targetImage.comments = [...targetImage.comments, newComment]; // Adds comment
    targetImage.commentInput = ""; // Reset input empty

    updatedImages[index] = targetImage;
    console.log(
      `Comment added to Image ${index + 1}: ${newComment.text} (By: ${
        newComment.email
      })`
    );
    setImages(updatedImages); // Set the image
  };

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-6">
      {/* Rendering all the image to the UI  */}
      {images.map((img, index) => (
        <div key={index} className="bg-white shadow rounded p-4">
          <img
            src={img.url}
            alt={`Perfume bootle ${index + 1}`}
            className="w-full h-48 object-cover rounded mb-4"
          />

          {/* Like Section  and Counting the Likes*/}
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={() => handleLikeToggle(index)}
              className={`px-4 py-1 rounded text-white ${
                img.liked ? "bg-red-500" : "bg-gray-400"
              }`}
            >
              {img.liked ? "Unlike" : "Like"}
            </button>
            <span className="text-sm text-gray-700">{img.count} like(s)</span>
          </div>

          {/* Comment Input and Post*/}
          <div className="mb-2">
            <input
              type="text"
              value={img.commentInput}
              onChange={(e) => handleCommentChange(index, e.target.value)}
              placeholder="Please add a  comment "
              className="w-full p-2 border rounded mb-2 text-sm"
            />
            <button
              onClick={() => handleCommentSubmit(index)}
              className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
            >
              Post
            </button>
          </div>

          {/* Displaying the Comments */}
          <div className="mt-2">
            {img.comments.map((comm, i) => (
              <div key={i} className="text-sm text-gray-800 mb-1">
                <strong>{comm.email}</strong>: {comm.text}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
export default ImageGallery;
