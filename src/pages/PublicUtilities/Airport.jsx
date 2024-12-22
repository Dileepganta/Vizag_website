import React from 'react';
import '../../styles/Airport.css'; // Custom CSS file for styling

const Airport = () => {
  return (
    <div className="container">
      <div className="card">
        {/* Hero Section */}
        <div 
          className="hero"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80')`
          }}
        >
          <div className="hero-overlay">
            <h1 className="hero-title">Visakhapatnam International Airport</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="content">
          <div className="content-grid">
            {/* Airport Information */}
            <div className="info">
              <h2>About the Airport</h2>
              <p>
                Visakhapatnam International Airport (IATA: VTZ, ICAO: VOVZ) is a major airport serving Visakhapatnam, 
                Andhra Pradesh. It's a civil enclave operating from Indian Naval Air Station INS Dega, handling both 
                domestic and international flights.
              </p>

              <div className="details">
                <div className="detail-item">
                  <span className="icon">📍</span>
                  <span>Airport Road, Visakhapatnam, Andhra Pradesh 530009</span>
                </div>
                <div className="detail-item">
                  <span className="icon">📞</span>
                  <span>+91-891-2739405</span>
                </div>
                <div className="detail-item">
                  <span className="icon">⏰</span>
                  <span>24/7 Operations</span>
                </div>
                <div className="detail-item">
                  <span className="icon">✈️</span>
                  <span>Major Airlines: Air India, IndiGo, SpiceJet</span>
                </div>
              </div>

              <h3>Key Features</h3>
              <ul className="features">
                <li>Modern Terminal Building</li>
                <li>International & Domestic Operations</li>
                <li>Integrated Cargo Terminal</li>
                <li>Advanced Navigation Systems</li>
                <li>Multiple Aerobridges</li>
              </ul>
            </div>

            {/* Map Section */}
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.8927470382095!2d83.22296937531841!3d17.72167998788711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39435919128855%3A0xd068eVisakhapatnam%20Airport!5e0!3m2!1sen!2sin!4v1709655149459!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Visakhapatnam Airport Map"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airport;

