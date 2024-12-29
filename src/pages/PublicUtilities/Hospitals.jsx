import React, { useState } from 'react';
import '../../styles/Hospitals.css';

function HospitalsInVizag() {
  const hospitals = [
    {
      id: 1,
      name: 'APOLLO HOSPITAL',
      imgSrc: 'https://newassets.apollo247.com/cms/2022-02/Apollo%20Hospitals,%20Health%20City%20Unit%20vishakhapatnam.jpg',
      address: 'Health City, Arilova, Visakhapatnam',
      description: 'Providing world-class healthcare services with advanced medical facilities.',
    },
    {
      id: 2,
      name: 'CARE HOSPITAL',
      imgSrc: 'https://www.joonsquare.com/usermanage/image/business/care-hospital-visakhapatnam-8746/care-hospital-visakhapatnam-care-hospitals-02.jpg',
      address: 'Ram Nagar, Visakhapatnam',
      description: 'Renowned for its specialized medical treatments and excellent care.',
    },
    {
      id: 3,
      name: 'KIMS HOSPITAL',
      imgSrc: 'https://doctorlistingingestionpr.blob.core.windows.net/doctorprofilepic/1644906461796_HospitalFacilityImages_5082ab45-c884-4c04-8963-c2e478053322.png',
      address: 'Seethamadhara, Visakhapatnam',
      description: 'A trusted hospital offering a wide range of medical specialties.',
    },
    {
      id: 4,
      name: 'QUEENS NRI HOSPITAL',
      imgSrc: 'https://doctorlistingingestionpr.blob.core.windows.net/doctorprofilepic/1644906461796_HospitalFacilityImages_5082ab45-c884-4c04-8963-c2e478053322.png',
      address: 'Seethammadhara, Visakhapatnam',
      description: 'Committed to providing comprehensive healthcare services with modern facilities.',
    },
    {
      id: 5,
      name: 'RAMESH HOSPITAL',
      imgSrc: 'https://www.telugu360.com/wp-content/uploads/2020/08/ramesh-hospitals.jpg',
      address: 'Vizag Central, Visakhapatnam',
      description: 'Specializing in cardiac care and other advanced medical treatments.',
    },
    {
      id: 6,
      name: 'OMNI RK HOSPITAL',
      imgSrc: 'https://www.joonsquare.com/usermanage/image/business/omni-hospital-visakhapatnam-8748/omni-hospital-visakhapatnam-omni-hospitals-visakhapatnam-02.jpg',
      address: 'RK Beach Road, Visakhapatnam',
      description: 'Offering multispecialty healthcare services with a patient-centered approach.',
    }
  ];

  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>HOSPITALS IN VISAKHAPATNAM</h1>
        <p>Explore the most reliable hospitals in Visakhapatnam.</p>
      </header>

      <div className="content">
        <div className="grid-container">
          {hospitals.map((hospital) => (
            <div key={hospital.id} className="grid-item">
              <div className="image-wrapper">
                <img src={hospital.imgSrc} alt={hospital.name} />
              </div>
              <h3>{hospital.name}</h3>
              <p><strong>Address:</strong> {hospital.address}</p>
              <p>
                {expanded[hospital.id]
                  ? hospital.description
                  : `${hospital.description.substring(0, 100)}...`}
                <button onClick={() => toggleExpand(hospital.id)}>
                  {expanded[hospital.id] ? 'Show Less' : 'Read More'}
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>

      <footer className="App-footer">
        <p>&copy; 2024 Vizag Info</p>
      </footer>
    </div>
  );
}

export default HospitalsInVizag;
