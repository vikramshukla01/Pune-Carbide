import React from "react";

const services = [
  {
    title: "Web Development",
    description: "Build responsive, high-performing websites.",
    image: "/Assets/web-development.jpg",
  },
  {
    title: "App Development",
    description: "Create engaging mobile applications.",
    image: "/Assets/app-development.jpg",
  },
  {
    title: "Digital Marketing",
    description: "Boost your business with our marketing expertise.",
    image: "/Assets/digital-marketing.jpg",
  },
];

const Services = () => {
  return (
    <section id="services" style={{ padding: "50px", textAlign: "center" }}>
      <h1>Our Services</h1>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              margin: "20px",
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              width: "300px",
            }}
          >
            <img
              src={service.image}
              alt={service.title}
              style={{ width: "100%", height: "150px", borderRadius: "5px" }}
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
