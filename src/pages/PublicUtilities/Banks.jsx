import React, { useState } from 'react';
import '../../styles/Banks.css';

function BanksInVizag() {
  const banks = [
    {
      id: 1,
      name: 'STATE BANK OF INDIA',
      imgSrc: 'https://th.bing.com/th/id/R.7d1e38f8b7b4e2aefcb4a602a3c89994?rik=l06ZPY4NPbmOaw&riu=http%3a%2f%2fphotos.wikimapia.org%2fp%2f00%2f04%2f96%2f29%2f08_big.jpg&ehk=tcSzoWNvB8kRWMdfvNY%2bBzVnloMYYQ%2bSMPBhTQ6Q1Dw%3d&risl=&pid=ImgRaw&r=0',
      address: 'Gajuwaka, Visakhapatnam',
      description: 'One of the largest and most trusted banks in India offering a wide range of services.',
    },
    {
      id: 2,
      name: 'HDFC BANK',
      imgSrc: 'https://th.bing.com/th/id/OIP.PLYl2nodElsoJE50upWWFAHaFj?rs=1&pid=ImgDetMain',
      address: 'Dwaraka Nagar, Visakhapatnam',
      description: 'Known for excellent customer service and a variety of financial products.',
    },
    {
      id: 3,
      name: 'ICICI BANK',
      imgSrc: 'https://lh3.googleusercontent.com/8aZxvO6ueh6fpEpjSRN87diHCFztf7KRwNqujqvyrGQU-ZCwLhIq1WK5l1IzImX_B-dog_fLJMm4zwyBwxE685NNSfcbvXjKqn6IzS9P-6L11Q=s1000',
      address: 'MVP Colony, Visakhapatnam',
      description: 'A leading private sector bank offering innovative financial solutions.',
    },
    {
      id: 4,
      name: 'AXIS BANK',
      imgSrc: 'https://images.livemint.com/img/2023/03/21/1600x900/Axis_1674492335588_1679423507037_1679423507037.jpg',
      address: 'Seethamadhara, Visakhapatnam',
      description: 'A bank committed to providing excellent customer service and financial products.',
    },
    {
      id: 5,
      name: 'CANARA BANK',
      imgSrc: 'https://media.glassdoor.com/lst2x/33/c7/d9/34/canara-bank.jpg',
      address: 'Gopalapatnam, Visakhapatnam',
      description: 'A renowned public sector bank offering a wide range of banking services.',
    },
    {
      id: 6,
      name: 'UNION BANK OF INDIA',
      imgSrc: 'https://bfsi.eletsonline.com/wp-content/uploads/2023/05/Union-Bank.jpg',
      address: 'NAD Junction, Visakhapatnam',
      description: 'Providing reliable banking services to individuals and businesses.',
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
        <h1>BANKS IN VISAKHAPATNAM</h1>
        <p>Explore the most reliable and popular banks in Visakhapatnam offering exceptional financial services.</p>
      </header>

      <div className="content">
        <div className="grid-container">
          {banks.map((bank) => (
            <div key={bank.id} className="grid-item">
              <img src={bank.imgSrc} alt={bank.name} />
              <h3>{bank.name}</h3>
              <p><strong>Address:</strong> {bank.address}</p>
              <p>
                {expanded[bank.id]
                  ? bank.description
                  : `${bank.description.substring(0, 100)}...`}
                <button onClick={() => toggleExpand(bank.id)}>
                  {expanded[bank.id] ? 'Show Less' : 'Read More'}
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>

      <footer className="App-footer">
        <p>&copy; 2024 Banks Vizag</p>
      </footer>
    </div>
  );
}

export default BanksInVizag;
