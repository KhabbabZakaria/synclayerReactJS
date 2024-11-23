import { useState } from 'react';

function CollaborationSection() {
    const [formData, setFormData] = useState({
        networkName: '',
        email: '',
        telegramHandle: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <div className="collaboration-section">
            <div className="content">
                <h3>LETS CONNECT</h3>
                <h1>Collaborate <br /> with us</h1>
                <p>We request all Depin networks, to join forces with us, ensuring alignment with your objectives and unlock the full potential of Depin</p>
                <p className="mission">Mission: Sync layer ensures maximizing Depin networks potential</p>
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