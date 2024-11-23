import { useState } from "react";

import { db } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";

function CollaborationSection() {
  const currentDate = new Date();

  const [formData, setFormData] = useState({
    networkName: "",
    email: "",
    telegramHandle: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    if (
      formData.email === "" ||
      formData.networkName === "" ||
      formData.telegramHandle === ""
    ) {
      //   setError(1)
    } else {
      try {
        console.log("gg");

        // Add message to a 'messages' collection in Firestore
        await addDoc(collection(db, "messages"), {
          email: formData.email,
          networkName: formData.networkName,
          telegramHandle: formData.telegramHandle,
          date: currentDate.toLocaleString(),
        });
        // setError(0);

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } catch (error) {
        // setError(2);
        console.log(error);
      }
    }
  };

  return (
    <div className="collaboration-section">
      <div className="content">
        <h3>LETS CONNECT</h3>
        <h1>
          Collaborate <br /> with us
        </h1>
        <p>
          We request all Depin networks, to join forces with us, ensuring
          alignment with your objectives and unlock the full potential of Depin
        </p>
        <p className="mission">
          Mission: Sync layer ensures maximizing Depin networks potential
        </p>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="DEPIN Network Name"
            name="networkName"
            value={formData.networkName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email ID"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Telegram handle"
            name="telegramHandle"
            value={formData.telegramHandle}
            onChange={handleChange}
            required
          />
          <button type="submit">GET STARTED</button>
        </form>
      </div>
      <footer>
        <p>Copyright © 2024</p>
        {/* <div className="resources">
                    <a href="#">Blog</a>
                    <a href="#">Contact us</a>
                    <a href="#">Get in touch</a>
                </div> */}
        {/* Add social icons if needed */}
        {/* <div className="social-icons">
                    <a href="#"><img src="linkedin-icon.png" alt="LinkedIn" /></a>
                    <a href="#"><img src="instagram-icon.png" alt="Instagram" /></a>
                </div> */}
      </footer>
    </div>
  );
}

export default CollaborationSection;
