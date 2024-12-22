// src/App.js
import React, { useState } from 'react';
import '../../styles/hillstation.css';

const places = [
  {
    img: "images/Araku.jpg",
    title: "Araku Valley",
    distance: "Araku Valley is situated approximately 120 kilometers from Visakhapatnam.",
    description: "Known for its lush coffee plantations and beautiful valleys, Araku Valley is a popular destination for its natural beauty and tribal culture.",
    wiki: "Wikipedia link"
  },
  {
    img: "images/Lambasingi.jpg",
    title: "Lambasingi",
    distance: "Lambasingi is situated approximately 100 kilometers from Visakhapatnam.",
    description: "Often called the 'Kashmir of Andhra Pradesh,' Lambasingi is famous for its misty weather and occasional snowfall during winters.",
    wiki: "Wikipedia link"
  },
  {
    img: "images/Vanajangi.jpg",
    title: "Vanajangi",
    distance: "Vanajangi is situated 106 km from Visakhapatnam and almost 8 kilometers from Paderu.",
    description: "Dense clouds floating amid the hills form a beautiful sight at this vantage point in the early morning.",
    wiki: "Wikipedia link"
  },
  {
    img: "images/Devarapalli.jpg",
    title: "Devarapalli Waterfalls",
    distance: "Devarapalli Waterfalls is situated approximately 50 km from Visakhapatnam and 10-12 km from Devarapalli.",
    description: "Scenes of lush greenery and cascading waters create a mesmerizing sight, especially during early morning mist.",
    wiki: "Wikipedia link"
  },
  {
    img: "images/Chaparai.jpg",
    title: "Chaparai Waterfalls",
    distance: "Chaparai Waterfalls is located about 15 km from Araku Valley and 120 km from Visakhapatnam.",
    description: "Water rushing over rocks surrounded by lush forest is especially captivating in the early morning.",
    wiki: "Wikipedia link"
  },
  {
    img: "images/Narsipatnam.png",
    title: "Dharamattam Waterfalls",
    distance: "Dharamattam Waterfalls is situated approximately 20 km from Narsipatnam and 90 km from Visakhapatnam.",
    description: "This hidden gem offers a serene and refreshing experience, especially during the monsoon season.",
    wiki: "Wikipedia link"
  }
];

function HillStations() {
  const [visibleDescription, setVisibleDescription] = useState(null);

  const toggleDescription = (index) => {
    setVisibleDescription(visibleDescription === index ? null : index);
  };

  return (
    <div className="p-4">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Best HillStations & Waterfalls Near Vizag</h1>
        <p className="text-lg text-gray-600">
          Explore the top scenic HillStations & Waterfalls around Vizag for a refreshing getaway.
        </p>
      </header>
      <div className="flex flex-wrap justify-center gap-4">
        {places.map((place, index) => (
          <div
            className="bg-white rounded-lg shadow-lg p-4 max-w-sm w-full flex flex-col items-center"
            key={index}
          >
            <img
              className="w-full h-48 object-cover rounded-md mb-4"
              src={place.img}
              alt={place.title}
            />
            <h2 className="text-xl font-semibold mb-2">{place.title}</h2>
            <p className="text-gray-700 mb-2">
              <strong>Distance:</strong> {place.distance}
            </p>
            <p className="text-gray-600 mb-2">{place.description}</p>
            <button
              className="text-blue-500 hover:text-blue-700 focus:outline-none"
              onClick={() => toggleDescription(index)}
            >
              Learn More
            </button>
            {visibleDescription === index && (
              <div className="description mt-2 text-sm text-gray-500">
                {place.wiki}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HillStations;
