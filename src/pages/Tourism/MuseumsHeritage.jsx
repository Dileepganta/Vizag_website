import React from "react";
import "../../styles/MuseumsHeritage.css";
import simahachalam2 from "../../assets/simahachalam2.jpg";
import kanakamahalaxmi1 from "../../assets/kanakamahalaxmi1.jpeg";
import BorraCaves1 from "../../assets/BorraCaves1.jpg";
import AVN1 from "../../assets/AVN1.jpeg";
import erramattidibbalu1 from "../../assets/erramattidibbalu1.jpeg";
import rosshll1 from "../../assets/rosshll1.jpeg";
import lighthouse from "../../assets/lighthouse.jpeg";
import victoria2 from "../../assets/victoria2.jpeg";

const locations = [
  {
    image: simahachalam2,
    alt: 'Simhachalam Temple',
    title: 'Simhachalam Temple',
    description: 'Simhachalam is an ancient temple dedicated to Lord Varaha Narasimha, an incarnation of Lord Vishnu. It is renowned for its stunning architecture that blends Dravidian and Kalinga styles.',
    distance: '16 km from RTC Complex',
    timings: '7:00 - 19:00',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Simhachalam+Temple+Vizag'
  },
  {
    image: kanakamahalaxmi1,
    alt: 'Kanakamahalaxmi Ammavari Temple',
    title: 'Kanakamahalaxmi Ammavari Temple',
    description: 'Kanaka Maha Lakshmi Temple is a revered shrine dedicated to the goddess Kanaka Maha Lakshmi, believed to be the city\'s guardian deity.',
    distance: '3 km from RTC Complex',
    timings: '6:00 - 1:00 and 17:00 - 20:00',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Kanaka+Mahalakshmi+Temple+Vizag'
  },
  {
    image: BorraCaves1,
    alt: 'Borra Caves',
    title: 'Borra Caves',
    description: 'Borra Caves, located in the Ananthagiri Hills of Andhra Pradesh, are limestone caves renowned for their stunning stalactites and stalagmites formations, attracting tourists and nature enthusiasts.',
    distance: '75 km from Vizag',
    timings: '10:00 - 17:00',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Borra+Caves+Vizag'
  },
  {
    image: AVN1,
    alt: 'AVN College',
    title: 'AVN College',
    description: 'Andhra Vidyalaya Nalanda College is a historic educational institution known for its contributions to higher education and notable alumni, including leaders like Dr. Sarvepalli Radhakrishnan.',
    distance: '120 km from RTC Complex',
    timings: '9:00 - 16:00',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=AVN+College+Vizag'
  },
  {
    image: erramattidibbalu1,
    alt: 'Eraamatti Dibbalu',
    title: 'Eraamatti Dibbalu',
    description: 'Eraamatti Dibballlu, also known as the "Seven Hills of Visakhapatnam," is a unique geological formation located in the Araku Valley, renowned for its scenic beauty and rich biodiversity.',
    distance: '120 km from Vizag',
    timings: '6:00 - 18:00',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Erramatti+Dibbalu+Vizag'
  },
  {
    image: rosshll1,
    alt: 'Ross Hill Church',
    title: 'Ross Hill Church',
    description: 'Ross Hill Church is a historic Christian shrine located on a hill, offering panoramic views of the city and known for its peaceful ambiance and religious significance.',
    distance: '4 km from RTC Complex',
    timings: '6:00 - 18:00',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Ross+Hill+Church+Vizag'
  },
  {
    image: lighthouse,
    alt: 'Light House',
    title: 'Light House',
    description: 'The Visakhapatnam Lighthouse, situated on the coast, offers a panoramic view of the Bay of Bengal and serves as a historic maritime navigation point for ships entering the port.',
    distance: '3 km from RTC Complex',
    timings: '16:00 - 18:00',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Visakhapatnam+Lighthouse+Vizag'
  },
  {
    image: victoria2,
    alt: 'Statue of Queen Victoria',
    title: 'Statue of Queen Victoria',
    description: 'The Statue of Queen Victoria is a historic monument located in Visakhapatnam, commemorating the British era and offering a glimpse into the city\'s colonial past.',
    distance: '2 km from RTC Complex',
    timings: 'Open 24 hours',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Statue+of+Queen+Victoria+Vizag'
  }
];


const Card = ({ location }) => (
  <div className="card">
    <img src={location.image} alt={location.alt} />
    <h2>{location.title}</h2>
    <p>{location.description}</p>
    <p>
      <strong>Distance:</strong> {location.distance}
    </p>
    <p>
      <strong>Timings:</strong> {location.timings}
    </p>
    <button onClick={() => learnMore(location.title)}>Learn More</button>
    <button
      onClick={() =>
        window.open(location.mapsLink, "_blank", "noopener,noreferrer")
      }
    >
      View Location
    </button>
  </div>
);


const learnMore = (location) => {
  alert(`More information about ${location} coming soon!`);
};

// Main App component
const MuseumsHeritage = () => (
  <div className="container">
    <h1>HERITAGES</h1>
    <p>Explore the rich heritage of Vizag</p>
    <div className="card-container">
      {locations.map((location, index) => (
        <Card key={index} location={location} />
      ))}
    </div>
  </div>
);

export default MuseumsHeritage;

