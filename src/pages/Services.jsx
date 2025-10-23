import React from 'react';
import '../App.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom website development using modern technologies',
      price: 999,
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      price: 1499,
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Modern and user-friendly interface design',
      price: 799,
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 4,
      title: 'Cloud Services',
      description: 'Cloud infrastructure and deployment solutions',
      price: 1299,
      image: 'https://via.placeholder.com/300x200'
    }
  ];

  return (
    <div className="services-container">
      <h1>Services</h1>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <div className="service-footer">
                <span className="price">tk{service.price}</span>
                <button className="enquire-btn">button</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;