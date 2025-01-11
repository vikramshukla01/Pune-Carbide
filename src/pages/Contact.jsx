import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! Thank you.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" style={{ padding: "50px", textAlign: "center" }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto" }}>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", borderRadius: "5px", height: "100px" }}
          />
        </div>
        <button type="submit" style={{ padding: "10px 20px", borderRadius: "5px", backgroundColor: "#333", color: "white" }}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
