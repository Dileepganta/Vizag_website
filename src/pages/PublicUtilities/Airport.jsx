import React from "react";
import '../../styles/Airport.css'; // Import the CSS file

const Airport = () => {
  return (
    <div className="airport-container">
      <div className="airport-header">
        <h1>Visakhapatnam International Airport</h1>
        <p className="location">Located in: Visakhapatnam, Andhra Pradesh, India</p>
      </div>

      <div className="airport-details">
        <div className="airport-photo">
          <img
            src="https://www.bizzbuzz.news/h-upload/2022/12/20/1632334-visakhapatnam-airport.jpg" 
            alt="Visakhapatnam Airport"
            className="airport-image"
          />
        </div>

        <div className="airport-description">
          <h2>About Visakhapatnam International Airport</h2>
          <p>
            Visakhapatnam International Airport (IATA: VTZ, ICAO: VOVZ) is one of the busiest airports in Andhra Pradesh, located in the port city of Visakhapatnam. It is an international airport serving both domestic and international flights.
          </p>
          <p>
            The airport has a single terminal that handles both domestic and international traffic. It has undergone significant expansion and modernization to accommodate increasing passenger traffic.
          </p>
          <p>
            **Coordinates**: 17.7217° N, 83.2212° E
          </p>
        </div>
      </div>

      <div className="airport-facts">
        <h2>Key Facts</h2>
        <ul>
          <li><strong>Domestic Flights:</strong> Connects major cities like Delhi, Mumbai, Bengaluru, Hyderabad.</li>
          <li><strong>International Flights:</strong> Offers flights to destinations like Dubai, Kuala Lumpur, and Singapore.</li>
          <li><strong>Terminal Capacity:</strong> Can handle 1.5 million passengers annually.</li>
          <li><strong>Facilities:</strong> Duty-Free Shop, Restaurants, VIP Lounges, Wi-Fi, Lost & Found.</li>
          <li><strong>Runways:</strong> 1 asphalt runway (3,000 meters long), suitable for large aircraft.</li>
        </ul>
      </div>

      <div className="airport-footer">
        {/* Using anchor tag <a> to link to Wikipedia */}
        <a href="https://en.wikipedia.org/wiki/Visakhapatnam_International_Airport" 
           target="_blank" 
           rel="noopener noreferrer">
          <button className="learn-more-btn">Learn More</button>
        </a>
      </div>
    </div>
  );
};

export default Airport;
