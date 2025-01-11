import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Link } from "react-scroll";
import "./styles/global.css";

const App = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Home Section */}
      <section id="home" style={{ height: "100vh", padding: "50px", backgroundColor: "#f9f9f9" }}>
        <h1>Welcome to Our Website</h1>
        <p>This is the home section of your single-page site. Add a catchy tagline here!</p>
        <img
          src="/media/hero.jpg"
          alt="Hero"
          style={{ width: "100%", height: "auto", marginTop: "20px", borderRadius: "10px" }}
        />
      </section>

      {/* About Section */}
      <section id="about" style={{ height: "100vh", padding: "50px", backgroundColor: "#e8e8e8" }}>
        <h1>About Us</h1>
        <p>
          We are a professional team offering cutting-edge solutions in web development,
          app development, and digital marketing. Let us help you achieve your goals!
        </p>
        <img
          src="/media/about.jpg"
          alt="About Us"
          style={{ width: "80%", height: "auto", marginTop: "20px", borderRadius: "10px" }}
        />
      </section>

      {/* Services Section */}
      <section id="services" style={{ height: "100vh", padding: "50px", backgroundColor: "#f4f4f4" }}>
        <h1>Our Services</h1>
        <p>Explore our range of services below:</p>
        <ul>
          <li>Web Development</li>
          <li>App Development</li>
          <li>Digital Marketing</li>
          <li>SEO Optimization</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ height: "100vh", padding: "50px", backgroundColor: "#ddd" }}>
        <h1>Contact Us</h1>
        <p>Feel free to get in touch with us for your next project!</p>
        <p>Email: contact@yourwebsite.com</p>
        <p>Phone: +123-456-7890</p>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
