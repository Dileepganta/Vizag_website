import React, { useState } from 'react';
import '../../styles/Beaches.css';
import bheemili from '../../assets/bheemili.jpg';
import rishikonda from '../../assets/rishikonda.jpg';
import ramakrishna from '../../assets/rama krishna.jpg';
import gangavaram from '../../assets/gangavaram.jpg';
import yarada from '../../assets/yarada.jpg';
import lawson from '../../assets/lawsons bay.jpg';

function BeautifulBeaches() {
  const hillStations = [
    {
      id: 1,
      name: 'BHEEMILI BEACH',
      imgSrc: bheemili,
      distance: '48.1 km from Vizag',
      description: 'An hour’s drive from Vishakhapatnam will take you to into the welcoming arms of this warm beach.',
    },
    {
      id: 2,
      name: 'RISHIKONDA BEACH',
      imgSrc: rishikonda,
      distance: '27 km from Vizag',
      description: 'This neat and tidy beach is well maintained for you to enjoy some lively moments with your family and loved ones.',
    },
    {
      id: 3,
      name: 'RAMAKRISHNA BEACH',
      imgSrc: ramakrishna,
      distance: '15.3 km from Vizag',
      description: 'These exquisite twin beaches overlooking the gigantic Bay of Bengal Sea are a beautiful place to relax and unwind. ',
    },
    {
      id: 4,
      name: 'GANGAVARAM BEACH',
      imgSrc: gangavaram,
      distance: '13.2 km from Vizag',
      description: 'This beach is truly a nature lover’s abode. The Gangavaram beach, overlooking a Krishna Temple as well as the deep blue sea is a perfect spot to experience liveliness and bliss.',
    },
    {
      id: 5,
      name: 'YARADA BEACH',
      imgSrc: yarada,
      distance: '13.2 km from Vizag',
      description: 'A heavenly layout of the mountain-beach duality makes for the perfect scenario to enjoy magical holiday moments.',
    },
    {
      id: 6,
      name: 'LAWSONS BAY BEACH',
      imgSrc: lawson,
      distance: '16.8 km from Vizag',
      description: 'A quaint beach that offers scenic views of the sea, Lawson’s beach is one of the most famous ones in Vishakhapatnam. ',
    }
  ];

  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>BEAUTIFUL BEACHES IN VIZAG</h1>
        <p>Discover the serene and scenic beaches of Vizag, each offering unique views and experiences, perfect for a peaceful retreat by the sea.</p>
      </header>

      <div className="content">
        <div className="grid-container">
          {hillStations.map((station) => (
            <div key={station.id} className="grid-item">
              <img src={station.imgSrc} alt={station.name} />
              <h3>{station.name}</h3>
              <p><strong>Distance:</strong> {station.distance}</p>
              <p>
                {expanded[station.id]
                  ? station.description
                  : `${station.description.substring(0, 100)}...`}
              </p>
            </div>
          ))}
        </div>
      </div>

      <footer className="App-footer">
        <p>&copy; 2024 beaches Vizag</p>
      </footer>
    </div>
  );
}

export default BeautifulBeaches;
