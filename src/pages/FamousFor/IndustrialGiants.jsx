import React, { useState } from "react";
import "../../styles/indugiants.css";

const personalities = [
  {
    name: "D. Subba Rao",
    birth: "December 9, 1949",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/68/Duvuri.jpg",
    description: `Area Of Excellence: Economist and former Governor of the Reserve Bank of India.
Highlights:
- Economic Policies: Played a key role in navigating the Indian economy through the global financial crisis.
- Educational Advocate: A Vizag native, Subba Rao's contributions to finance and policy have inspired many.
Subba Rao's expertise in economics has made him a respected figure in both Vizag and India at large.`,
  },
  {
    name: "GV Prasad",
    birth: "April 22, 1960",
    image:
      "https://www.medicoverhospitals.in/doctors/images/dr-gvk-prasad.webp",
    description: `Area Of Excellence: Chairman of Dr. Reddy's Laboratories.
Highlights:
- Pharmaceutical Visionary: Played a pivotal role in making Dr. Reddy's a global leader in generic drugs.
- Innovation Leader: Advocated for sustainability and innovation in the pharmaceutical industry.
GV Prasad is a symbol of industrial success, showcasing Vizag's potential in healthcare and innovation.`,
  },
  {
    name: "K. Satyanarayana",
    birth: "August 15, 1955",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.lUZb4nvG1qJm6PqVa-jr2wHaEK&pid=Api&P=0&h=180",
    description: `Area Of Excellence: Founder of the Vizag Steel Plant.
Highlights:
- Industrial Pioneer: Instrumental in establishing Vizag as a hub for steel production.
- Community Advocate: Worked towards the upliftment of the local workforce.
K. Satyanarayana's contributions have been pivotal in transforming Vizag into an industrial powerhouse.`,
  },
  {
    name: "Kona Sambasiva Rao",
    birth: "June 10, 1947",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.9A674V8See1Wq2dXDwQqqAHaJd&pid=Api&P=0&h=180",
    description: `Area Of Excellence: Visionary in the shipping and logistics sector.
Highlights:
- Port Development: Played a crucial role in the expansion of Vizag Port Trust.
- Global Recognition: Helped establish Vizag as a key maritime hub in India.
Rao's leadership in maritime logistics has elevated Vizag's standing on the global map.`,
  },
  {
    name: "MV Ramana",
    birth: "July 20, 1965",
    image:
      "https://s.yimg.com/fz/api/res/1.2/qAQ3x6tUUocn5spyOptxaA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MjAw/https://s.yimg.com/zb/imgv1/51ca23ac-40b9-3a62-94f3-1d2a11842935/t_500x300",
    description: `Area Of Excellence: CEO of Vizag PharmaTech.
Highlights:
- Healthcare Innovator: Spearheading cutting-edge pharmaceutical advancements.
- Community Builder: Committed to creating jobs and uplifting local talent.
MV Ramana represents the spirit of innovation and community-focused leadership in Vizag.`,
  },
  {
    name: "B. Ashok Kumar",
    birth: "February 14, 1950",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.IblFaEuh8NmKlw1Ri1ughAHaFj&pid=Api&P=0&h=180",
    description: `Area Of Excellence: Renowned Marine Biologist.
Highlights:
- Marine Conservationist: Pioneered efforts in protecting marine biodiversity in Vizag.
- Research Leader: Authored numerous studies on ocean ecosystems.
B. Ashok Kumar has been a leading figure in advancing marine science and ecology in Vizag.`,
  },
  {
    name: "S. Laxmi Narayana",
    birth: "March 25, 1962",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.PnTujxaMUjW9MLdgGp8cSAHaEo&pid=Api&P=0&h=180https://upload.wikimedia.org/wikipedia/commons/9/91/Laxmi_Narayana.jpg",
    description: `Area Of Excellence: Social Activist and Educator.
Highlights:
- Education Reformer: Founded schools for underprivileged children in Vizag.
- Women Empowerment Advocate: Worked extensively to promote education for girls.
S. Laxmi Narayana's dedication to social causes has brought transformative changes to many lives in Vizag.`,
  },
  {
    name: "R. Geetha",
    birth: "May 5, 1975",
    image:
      "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/12/IMG-20230406-WA0025-e1685240202401-768x755.jpg",
    description: `Area Of Excellence: Acclaimed Classical Dancer.
Highlights:
- Cultural Ambassador: Promoted classical dance forms from Vizag on global platforms.
- Mentor and Guide: Trained hundreds of aspiring dancers.
R. Geetha's passion for dance has preserved and popularized traditional art forms in Vizag and beyond.`,
  },
];

const NotablePersonalities = () => {
  const [visibleDescription, setVisibleDescription] = useState(null);

  const toggleDescription = (name) => {
    setVisibleDescription(visibleDescription === name ? null : name);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 items-start py-16">
      {personalities.map((personality, index) => (
        <div
          className="bg-white shadow-md rounded-lg p-4 max-w-[300px] w-full"
          key={index}
        >
          <img
            className="w-full h-[200px] object-cover rounded-md mb-4"
            src={personality.image}
            alt={personality.name}
          />
          <h2 className="text-lg font-semibold mb-2">{personality.name}</h2>
          <p className="text-sm mb-2">
            <strong>Birth:</strong> {personality.birth}
          </p>
          <button
            className="text-blue-500 hover:underline focus:outline-none"
            onClick={() => toggleDescription(personality.name)}
          >
            Learn More
          </button>
          {visibleDescription === personality.name && (
            <div className="description mt-2 text-gray-700 text-sm">
              {personality.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NotablePersonalities;
