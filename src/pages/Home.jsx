import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import "../styles/Home.css";
import MessageBoard from '../components/MessageBoard';
import DistrictInfo from '../components/DistrictInfo';
import Emergency from '../components/Emergency';
const districtInfo = {
  area: "1048 sq km",
  population: "19.595 Lakhs",
  literacyRate: "59.85%",
  revenueDiv: 2,
  mandals: 11,
  villages: 160,
  corporations: 1,
  municipality: 0
};
import { Phone,Stethoscope,AlertTriangle,Shield } from 'lucide-react';
import Footer from '../components/Footer';
function Home() {
  return (
    <main className="container mx-auto py-8">
      <div className="text-center space-y-6 mb-12 px-4">
        <h1 className="text-5xl font-bold text-gray-800 tracking-tight">
          Welcome to <span className="text-blue-600">Visakhapatnam</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          <h1>CITY OF DESTINY</h1>
          Discover the jewel of the East Coast - where pristine beaches meet industrial might,
          where tradition embraces modernity, and where every sunset tells a new story.
        </p>
      </div>
      <ImageCarousel />
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <div className="w-[100%]">
          <MessageBoard />
        </div>
        
        <div className="w-[100%]">
          <DistrictInfo data={districtInfo} />
        </div>
      </div>

      {/* Google Maps Embed Iframe */}
      <div className="google-maps-container text-center mt-8">
        <h2 className="text-xl font-semibold text-gray-700">Explore Visakhapatnam on the Map</h2>
        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243208.19691669836!2d83.09777813045184!3d17.738603411793388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1730991913742!5m2!1sen!2sin"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: '0', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </div>
      <div className="container px-3 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Emergency Helplines</h2>
          <p className="text-gray-600">24/7 emergency services at your service</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Emergency
            icon={Phone}
            title="Emergency Services"
            number="100"
            description="For immediate police, fire, or medical emergencies"
          />
          <Emergency
            icon={Stethoscope}
            title="Medical Emergency"
            number="104 / 108"
            description="24/7 medical assistance and ambulance services"
          />
          <Emergency
            icon={Shield}
            title="Police Non-Emergency"
            number="100"
            description="For non-emergency police assistance and inquiries"
          />
          <Emergency
            icon={AlertTriangle}
            title="Fire Department"
            number="101"
            description="For non-emergency police assistance and inquiries"
          />
        </div>
    </div>
    <Footer/>
    </main>
  );
}

export default Home;
