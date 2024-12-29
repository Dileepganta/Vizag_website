import React, { useState } from 'react';
import '../../styles/temples.css';

const temples = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Simhachalam_Temple.jpg/800px-Simhachalam_Temple.jpg",
    title: "Simhachalam Temple",
    distance: "Simhachalam Temple is located approximately 15 kilometers from Visakhapatnam city.",
    description: "An ancient and historic temple dedicated to Lord Narasimha, one of the incarnations of Lord Vishnu, situated atop the Simhachalam hill.",
    wiki: "https://en.wikipedia.org/wiki/Simhachalam_Temple"
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Bapuji_Park_Temple_Visakhapatnam.jpg/800px-Bapuji_Park_Temple_Visakhapatnam.jpg",
    title: "Sri Varaha Lakshmi Narasimha Swamy Temple",
    distance: "The temple is situated about 10 kilometers from the city center of Visakhapatnam.",
    description: "Dedicated to Lord Narasimha, this temple is one of the most revered pilgrimage spots in the region, known for its spiritual ambiance and religious significance.",
    wiki: "https://en.wikipedia.org/wiki/Sri_Varaha_Lakshmi_Narasimha_Swamy_Temple"
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Annavaram_Sri_Sathya_Deva_Temple.jpg/800px-Annavaram_Sri_Sathya_Deva_Temple.jpg",
    title: "Annavaram Temple",
    distance: "Annavaram Temple is situated about 30 kilometers from Visakhapatnam.",
    description: "Famous for its hilltop location, the temple is dedicated to Lord Satyanarayana and is a prominent spiritual center in the region.",
    wiki: "https://en.wikipedia.org/wiki/Annavaram_Temple"
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Chandaka_Temple_Visakhapatnam.jpg/800px-Chandaka_Temple_Visakhapatnam.jpg",
    title: "Chandaka Temple",
    distance: "Chandaka Temple is located around 25 kilometers from Visakhapatnam.",
    description: "A peaceful and spiritual destination, the temple is known for its beautiful surroundings and is dedicated to Lord Shiva.",
    wiki: "https://en.wikipedia.org/wiki/Chandaka_Temple"
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Krishna_Motukrishna_Temple.jpg/800px-Krishna_Motukrishna_Temple.jpg",
    title: "Sri Krishna Temple",
    distance: "The Sri Krishna Temple is located in the heart of Visakhapatnam.",
    description: "Dedicated to Lord Krishna, this temple is known for its serene ambiance and is visited by thousands of devotees every year.",
    wiki: "https://en.wikipedia.org/wiki/Sri_Krishna_Temple,_Visakhapatnam"
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Ramakrishna_Mission_Visakhapatnam.jpg/800px-Ramakrishna_Mission_Visakhapatnam.jpg",
    title: "Ramakrishna Mission Beach Temple",
    distance: "Located in the heart of Visakhapatnam, close to the Ramakrishna Mission Beach.",
    description: "A sacred spot for spiritual practices, this temple is part of the Ramakrishna Mission and has a peaceful environment.",
    wiki: "https://en.wikipedia.org/wiki/Ramakrishna_Mission_Visakhapatnam"
  }
];

function Temples() {
  const [visibleDescription, setVisibleDescription] = useState(null);

  const toggleDescription = (index) => {
    setVisibleDescription(visibleDescription === index ? null : index);
  };

  return (
    <div className="temples-container">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Famous Temples in Visakhapatnam</h1>
        <p className="text-lg text-gray-600">
          Discover the top temples in Visakhapatnam, each with its unique history and spiritual significance.
        </p>
      </header>
      <div className="temples-list">
        {temples.map((temple, index) => (
          <div
            className="temple-card"
            key={index}
          >
            <img
              className="temple-image"
              src={temple.img}
              alt={temple.title}
            />
            <h2 className="temple-title">{temple.title}</h2>
            <p className="temple-distance">
              <strong>Distance:</strong> {temple.distance}
            </p>
            <p className="temple-description">{temple.description}</p>
            <button
              className="learn-more-btn"
              onClick={() => toggleDescription(index)}
            >
              Learn More
            </button>
            {visibleDescription === index && (
              <div className="description">
                <a href={temple.wiki} target="_blank" rel="noopener noreferrer" className="learn-more-link">
                  Visit Wikipedia
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Temples;
