import React, { useState } from "react";
import "../../styles/personalties.css";

const personalities = [
  {
    name: "Alluri Seetha Rama Raju",
    birth: "July 4, 1897",
    image:
      "https://thecommunemag.com/wp-content/uploads/2020/07/1-25-e1593930311361.jpeg",
    description: `
      Area Of Excellence:</strong> Revolutionary Indian freedom fighter.
      Highlights:
      
        Leader of the Rampa Rebellion:</b> Raju led an armed resistance against the British.
        Symbol of Sacrifice:</b> Executed by the British in 1924, his legacy endures as a symbol of bravery.
    
    `,
  },
  {
    name: "Kaki Nitish Kumar Reddy",
    birth: "May 26, 2003",
    image:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_800,q_50/lsci/db/PICTURES/CMS/388700/388751.jpg",
    description: `
      Area Of Excellence: Emerging cricket talent.
      Highlights:
        Young Cricket Talent: Recognized for his batting and bowling skills.
        Leadership: Captained the Canadian national team.
    
    `,
  },
  {
    name: "Srirangam Srinivasa Rao (Sri Sri)",
    birth: "1910",
    image: "https://pbs.twimg.com/media/EhjD6M3U8AAAw6P.jpg",
    description: `
      Area Of Excellence: Legendary Telugu poet.
      Highlights:
      
        Pioneer of Modern Telugu Poetry:</b> Introduced free verse in Telugu literature.
        Mahaprasthanam: His magnum opus addressing poverty and inequality.
    
    `,
  },
  {
    name: "Tenneti Viswanadham",
    birth: "1895",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrqcB7bSZW_Ggr_qw5HBCxCxhH6c12aO8MOcu-8clfIH17huNEv87VRLplw47r0KYreE&usqp=CAU",
    description: `
      Area Of Excellence: Freedom fighter and social reformer.
      Highlights:
      
        Proponent of Education: Advocated for educational empowerment in Andhra Pradesh.
      
    `,
  },
  {
    name: "Karanam Malleswari",
    birth: "Born on June 1, 1975, in Vizag.",
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202407/indias-karnam-malleswari-180831611-16x9_0.jpg",
    description: `
      <strong>Area Of Excellence:</strong> The first Indian woman to win an Olympic medal in weightlifting.
      <b>Highlights:</b>
      <ul>
        <li><b>Olympic Medalist:</b> Won bronze at the 2000 Sydney Olympics.</li>
        <li><b>Trailblazer:</b> Her achievements inspired a new generation of athletes.</li>
        <li><b>Early Success and National Pride:</b> Born in a small village, Malleswari began weightlifting at a young age and quickly rose to prominence.</li>
        <li><b>Honors:</b> Awarded the Arjuna Award and Padma Shri for her contributions to sports.</li>
        <li><b>Continued Involvement:</b> After retiring from active competition, Malleswari has stayed connected to the world of sports through mentorship and training initiatives.</li>
      </ul>
      <p>Karnam Malleswari’s determination, resilience, and historic achievements continue to be a source of national pride, embodying the potential of Indian athletes on the global stage.</p>
    `,
  },
  {
    name: "Revanth",
    birth: "Born on February 10, 1990.",
    image:
      "https://pbs.twimg.com/profile_images/1194194862490308609/ANZ8_Zaa_400x400.jpg",
    description: `
      <strong>Area Of Excellence:</strong> A well-known playback singer, especially in Telugu cinema.
      <b>Highlights:</b>
      <ul>
        <li><b>Reality Show Winner:</b> Revanth rose to fame when he won the Indian Idol Season 9 (2016).</li>
        <li><b>Versatile Playback Singer:</b> Revanth has made a name for himself in the Telugu film industry, lending his voice to several hit songs.</li>
        <li><b>Popular Songs:</b> Some of Revanth's most well-known songs include "Raakama" from Kshana Kshana and "Dandiyan" from Sye.</li>
        <li><b>Recognition and Awards:</b> Apart from his success on Indian Idol, Revanth has received accolades for his contributions to the music industry.</li>
      </ul>
      <p>He is known for his powerful voice, versatile singing style, and ability to render songs across various genres with ease.</p>
    `,
  },
  {
    name: "Satya Dev",
    birth: "Born on July 4, 1989, in Vizag.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f8/Satyadev-Mana-oori-ramayanam-audio-launch.jpg",
    description: `
      <strong>Area Of Excellence:</strong> Satyadev Kancharana, professionally known as Satyadev, is an Indian actor who primarily works in Telugu films.
      <b>Highlights:</b>
      <ul>
        <li><b>Passionate:</b> His transition from an IT professional to a successful actor highlights his dedication to his craft.</li>
        <li><b>Versatile:</b> He is praised for his ability to take on a wide variety of roles, ranging from intense dramas to light-hearted films.</li>
        <li><b>Resilient:</b> Entering the film industry without any strong connections, Satya Dev's journey reflects his perseverance and hard work.</li>
      </ul>
      <p>Satya Dev is a shining example of talent, hard work, and perseverance in the film industry. His journey and work have not only entertained audiences but also inspired countless others to follow their passions, regardless of the challenges.</p>
    `,
  },
  {
    name: "Yelavarthy Nayudamma",
    birth: "September 10, 1922 – June 23, 1985",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF7YGRrhmWw8DF6gOAWrkKrr0NVP_SHdpM6A&s",
    description: `
      <strong>Area Of Excellence:</strong> Yelavarthy served as the Director General of CSIR, New Delhi, and also as the 4th Vice-Chancellor of Jawaharlal Nehru University.
      <b>Highlights:</b>
      <ul>
        <li><b>Pioneering Industrial Research:</b> Nayudamma’s work bridged the gap between traditional practices and modern industrial research, particularly in the leather industry.</li>
        <li><b>Institution Builder:</b> His tenure at CLRI and CSIR laid the foundation for India’s leadership in industrial and applied research.</li>
        <li><b>Global Advocate for Sustainable Development:</b> Nayudamma was a strong advocate for balancing industrial growth with environmental sustainability.</li>
        <li><b>Tragic Loss:</b> Nayudamma’s untimely death in the Air India Kanishka bombing in 1985 was a significant loss for India.</li>
      </ul>
      <p>Yelavarthy Nayudamma’s work exemplifies the transformative power of science and its potential to uplift societies. His contributions to industrial research, sustainability, and rural development have left an indelible mark on India and the world.</p>
    `,
  },
  {
    name: "Dwaram Venkataswamy Naidu",
    birth: "November 8, 1893 – November 25, 1964",
    image: "https://eambalam.com/blog/wp-content/uploads/2012/08/Dwaram-2.jpg",
    description: `
      <strong>Area Of Excellence:</strong> Dwaram Venkataswamy Naidu was an Indian violinist in the Carnatic classical tradition.
      <b>Highlights:</b>
      <ul>
        <li><b>Passionate:</b> His unwavering dedication to Carnatic music highlights his passion for the art form.</li>
        <li><b>Versatile:</b> Renowned for blending traditional Carnatic music with innovative techniques.</li>
        <li><b>Resilient:</b> Overcame significant challenges, including partial blindness, to become a celebrated violinist.</li>
        <li><b>Intellectual and Insightful:</b> His deep understanding of music theory made him a revered teacher for aspiring musicians.</li>
      </ul>
      <p>Dwaram Venkataswamy Naidu is a shining example of talent, resilience, and innovation in Indian classical music. His contributions have enriched the world of Carnatic music and inspired countless musicians.</p>
    `,
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
