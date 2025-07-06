import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Layout from '../dashboard/Layout'

const fileupload = () => {
  const [formData, setFormData] = useState({
    title: "",
    postedBy: "",
    image: null
  })
  const [filename, setFilename] = useState("");
  const [previmage, setPrevImage] = useState(null);
  const [uploading, setUploading] = useState(null);




  const handlechange = (e) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
      setFilename(files[0].name);
      setPrevImage(URL.createObjectURL(files[0]));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('postedBy', formData.postedBy);
    formDataToSend.append('image', formData.image);

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/upload`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setFormData({
        title: "",
        postedBy: "",
        image: null
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      console.log(data.message)
      alert("File upload failed. Please try again.");

    }
  }


  return (
    <Layout>
      <div className="upload">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="postedBy">postedBy</label>
            <br />
            <input
              type="text"
              name='postedBy'
              accept="video/*"
              id="postedBy"
              value={formData.postedBy}
              onChange={handlechange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="title">Title:</label>
            <br />
            <input
              type="text"
              name='title'
              id="title"
              value={formData.title}
              onChange={handlechange}
            />
          </div>
          <div>
            <label htmlFor="img">Image:</label>
            <br />
            <input
              type="file"
              accept="image/*"
              id="img"
              name='image'
              onChange={handlechange}
            />
          </div>
          <br />
          <button type="submit" >Upload</button>
        </form>
      </div>
    </Layout>
  )
}

export default fileupload