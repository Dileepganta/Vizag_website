// src/App.js
import React, { useState } from 'react';
import '../../styles/hillstation.css';
function HillStations() {
  const [visibleDescription, setVisibleDescription] = useState(null);
   const places = [
  {
    img: "https://th.bing.com/th/id/OIP.2vUgIi-CADNOd2_GWxUiKgHaEO?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    title: "Araku Valley",
    distance: "Araku Valley is situated approximately 120 kilometers from Visakhapatnam.",
    description: "Known for its lush coffee plantations and beautiful valleys, Araku Valley is a popular destination for its natural beauty and tribal culture.",
    wiki: "Wikipedia link"
  },
  {
    img: "https://assets.shortpedia.com/uploads/2021/04/06/1617707580.webp",
    title: "Lambasingi",
    distance: "Lambasingi is situated approximately 100 kilometers from Visakhapatnam.",
    description: "Often called the 'Kashmir of Andhra Pradesh,' Lambasingi is famous for its misty weather and occasional snowfall during winters.",
    wiki: "Wikipedia link"
  },
  {
    img: "https://th-i.thgim.com/public/incoming/1c5kg7/article67501453.ece/alternates/LANDSCAPE_1200/VANJANGI-2.jpg",
    title: "Vanajangi",
    distance: "Vanajangi is situated 106 km from Visakhapatnam and almost 8 kilometers from Paderu.",
    description: "Dense clouds floating amid the hills form a beautiful sight at this vantage point in the early morning.",
    wiki: "Wikipedia link"
  },
  {
    img: "https://th-i.thgim.com/public/incoming/1c5kg7/article67501453.ece/alternates/LANDSCAPE_1200/VANJANGI-2.jpg",
    title: "Devarapalli Waterfalls",
    distance: "Devarapalli Waterfalls is situated approximately 50 km from Visakhapatnam and 10-12 km from Devarapalli.",
    description: "Scenes of lush greenery and cascading waters create a mesmerizing sight, especially during early morning mist.",
    wiki: "Wikipedia link"
  },
  {
    img: "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1174113517_20200212143534.jpg",
    title: "Chaparai Waterfalls",
    distance: "Chaparai Waterfalls is located about 15 km from Araku Valley and 120 km from Visakhapatnam.",
    description: "Water rushing over rocks surrounded by lush forest is especially captivating in the early morning.",
    wiki: "Wikipedia link"
  },
  {
    img: "https://i.ytimg.com/vi/BCJN1J5l3wk/hqdefault.jpg",
    title: "Dharamattam Waterfalls",
    distance: "Dharamattam Waterfalls is situated approximately 20 km from Narsipatnam and 90 km from Visakhapatnam.",
    description: "This hidden gem offers a serene and refreshing experience, especially during the monsoon season.",
    wiki: "Wikipedia link"
  }
];

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
