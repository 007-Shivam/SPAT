import React, { useState } from "react";
import { auth, storage, db } from "../firebaseConnect";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import '../styles/Dashboard.css'

export default function Admin() {
    const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      console.log("User logged out successfully!");
      navigate("/"); // Redirect to the login page after logout
    } catch (err) {
      console.error("Logout error:", err.message);
    }
  };

  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    setImages([...e.target.files]); // Store multiple selected images
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    const imageUrls = [];

    // Upload each image to Firebase Storage
    for (let image of images) {
      const storageRef = ref(storage, `banners/${image.name}`);
      await uploadBytes(storageRef, image); // Upload the image
      const url = await getDownloadURL(storageRef); // Get the download URL
      imageUrls.push(url); // Add the URL to the array
    }

    // Save data to Firestore
    await addDoc(collection(db, "properties"), {
      location,
      description,
      banners: imageUrls, // Store the array of image URLs
    });

    setUploading(false);
    alert("Data uploaded successfully!");
    setLocation("");
    setDescription("");
    setImages([]);
  };

  return (
    <div className='admin'>
      <h1>Welcome to the Dashboard!</h1>
      <p>You have successfully logged in.</p>
      <button onClick={handleLogout}>Logout</button>


      <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="file"
        multiple // Allow multiple file selection
        onChange={handleImageChange}
        required
      />
      <button type="submit" disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </form>
    </div>
  );
}