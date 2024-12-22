import React from 'react';
import gmRao from '../../assets/1.2.jpg';
import revanth from '../../assets/2.1.jpg';
import malleswari from '../../assets/3.jpg';
import sarathBabu from '../../assets/4.jpeg';
import suryarao from "../../assets/5.jpeg";
import sivaji from "../../assets/6.jpeg";
import Lumbini from "../../assets/7.jpeg";
import gokul from "../../assets/8.jpeg";
import gokart from "../../assets/9.jpeg";
import allu from "../../assets/10.jpeg";

import '../../styles/parks.css';

const FamousPersons = () => {
  const samplePersons = [
    { id: 1, name: "Vizag Water Park", dob: "4.2 Rating", review: " 2,685 Reviews",location: "Saripalli, Visakhapatnam", achievements: "07383102054", photo: gmRao, wikiLink: "https://www.justdial.com/Visakhapatnam/Vizag-Water-Park-Saripalli-Village-Saripalli/0891PX891-X891-181014092359-W5X3_BZDET?trkid=&term=&ncatid=10355258&area=&search=Popular%20Parks%20in%20Visakhapatnam&mncatname=Parks&abd_btn=&abd_heading=&bd=1&" },
    { id: 2, name: "Tenneti Park", dob: "4.5 Rating", review: "28,661 Reviews", location:"Beach Road, Visakhapatnam",achievements: "07947141629", photo: revanth, wikiLink: "https://www.justdial.com/Visakhapatnam/Tenneti-Park-Opposite-Kailasagiri-Hills-Beach-Road/0891PX891-X891-170315170133-Z5V8_BZDET?trkid=&term=&ncatid=10355258&area=&search=Popular%20Parks%20in%20Visakhapatnam&mncatname=Parks&abd_btn=&abd_heading=&bd=1&" },
    { id: 3, name: "City Central Park", dob: "4.3 Rating", review: "23,724 Reviews", location:"Jail Road, Visakhapatnam",achievements: "07947417226", photo: malleswari, wikiLink: "https://www.justdial.com/Visakhapatnam/City-Central-Park-Jail-Road/0891PX891-X891-181013130656-N8R4_BZDET?trkid=&term=&ncatid=10355258&area=&search=Popular%20Parks%20in%20Visakhapatnam&mncatname=Parks&abd_btn=&abd_heading=&bd=1&" },
    { id: 4, name: "Vuda Park", dob: "4.2 Rating", review:"21,476 Reviews",location: "Beach Road, Visakhapatnam", achievements: "0898445147", photo: sarathBabu, wikiLink: "https://www.justdial.com/Visakhapatnam/Vuda-Park-Beach-Road/0891P891STD3001919_BZDET?trkid=&term=&ncatid=10355258&area=&search=Popular%20Parks%20in%20Visakhapatnam&mncatname=Parks&abd_btn=&abd_heading=&bd=1&" },
    { id: 4, name: "Kailash Giri Vizag", dob: "4.4 Rating", review:"9,032 Reviews",location: "Kailasagiri Ghat Road, Visakhapatnam", achievements:"180042545454", photo:suryarao , wikiLink: "https://www.justdial.com/Visakhapatnam/Kailash-Giri-Vizak-Kailasagiri-Ghat-Road/0891PX891-X891-191120203557-F3K6_BZDET?trkid=&term=&ncatid=10355258&area=&search=Popular%20Parks%20in%20Visakhapatnam&mncatname=Parks&abd_btn=&abd_heading=&bd=1&" },
    { id:4,name:"Sivaji Park",dob:"4.2 Rating",review:"10,393 Reviews",location:"Mvp Double Road, Visakhapatnam",achievements:"07947150445",photo:sivaji,wikiLink:"https://www.justdial.com/Visakhapatnam/Sivaji-Park-Mvp-Double-Road/0891PX891-X891-170603225022-J4H6_BZDET?trkid=&term=&ncatid=10355258&area=&search=Popular%20Parks%20in%20Visakhapatnam&mncatname=Parks&abd_btn=&abd_heading=&bd=1&"},
    { id:4 ,name:"Lumbini Park",dob:"4.3 Rating",review:"3,747 Reviews",location:"Beach Road, Visakhapatnam",achievements:"07947108801",photo:Lumbini,wikiLink:"https://www.justdial.com/Visakhapatnam/Lumbini-Park-Opposite-to-Appughar-Bus-Stop-Beach-Road/0891PX891-X891-220127212127-E9C1_BZDET?trkid=&term=&ncatid=10355258&area=&search=Popular%20Parks%20in%20Visakhapatnam&mncatname=Parks&abd_btn=&abd_heading=&bd=1&"},
    { id:4 ,name:"Gokul park",dob:"4.2 Rating",review:"3,385 Reviews",location:"Beach Road, Visakhapatnam",achievements:"180042545454",photo:gokul,wikiLink:"https://www.justdial.com/Visakhapatnam/Gokul-Park-Beach-Road/0891PX891-X891-190819234159-G9Q9_BZDET?trkid=&term=&ncatid=10355258&area=&search=Popular%20Parks%20in%20Visakhapatnam&mncatname=Parks&abd_btn=&abd_heading=&bd=1&"},
    { id:4 ,name:"A Square Gokarting",dob:"4.1 Rating",review:"2,065 Reviews",location:"Vellanki, Visakhapatnam",achievements:"08499888872",photo:gokart,wikiLink:"https://www.justdial.com/Visakhapatnam/A-Square-Gokarting-Near-Mangamaripeta-Bridge-Thotlakonda-Beside-Pyditallamma-Temple-Vellanki/0891PX891-X891-160719142355-Z6W1_BZDET?trkid=&term=&ncatid=10355258&area=&search=Popular%20Parks%20in%20Visakhapatnam&mncatname=Parks&abd_btn=&abd_heading=&bd=1&"},
    { id:4 ,name:"Alluri Sitaramararu Forest Area",dob:"4.1 Rating",review:"1,575 Reviews",location:"mandipalle, Visakhapatnam",achievements:"07967295405",photo:allu,wikiLink:"https://www.justdial.com/Visakhapatnam/Alluri-Sitaramaraju-Forest-Area/0891PX891-X891-230607194907-I2I8_BZDET?trkid=&term=&ncatid=10355258&area=&search=Popular%20Parks%20in%20Visakhapatnam&mncatname=Parks&abd_btn=&abd_heading=&bd=1&"},

  ];

  return (
    <div className="grid"> 
      {samplePersons.map((person) => (
        <div key={person.id} className="card">
          <img src={person.photo} alt={person.name} className="person-photo" />
          <h3 className="person-name">{person.name}</h3>
          <p className="mb-1">Rating: {person.dob}</p>
          <p className="mb-1">Reviews:{person.review}</p>
          <p className="mb-1">Location: {person.location}</p>
          <p className="mb-1">Phone No.: {person.achievements}</p>
          <a href={person.wikiLink} target="_blank" rel="noopener noreferrer" className="know-more">
            Know More
          </a>
        </div>
      ))}
    </div>
  );
};

export default FamousPersons;