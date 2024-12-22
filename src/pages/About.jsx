import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
        <img
          src="https://images.unsplash.com/photo-1597235949076-e53e0c0e4b84?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Visakhapatnam Coastline"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Visakhapatnam
            </h1>
            <p className="text-lg md:text-xl text-white font-medium">
              The City of Destiny
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="prose max-w-none mb-12 text-gray-700">
        <p className="text-lg leading-relaxed">
          Visakhapatnam, also known as Vizag, is the largest city and the financial capital of Andhra Pradesh. 
          Nestled between the Eastern Ghats and the Bay of Bengal, it's renowned for its pristine beaches, 
          rich cultural heritage, and industrial significance.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <FeatureCard 
          title="Strategic Location"
          description="Located on the southeastern coast of India, serving as a major port and naval base."
          link="https://en.wikipedia.org/wiki/Visakhapatnam"
        />
        <FeatureCard 
          title="Natural Harbor"
          description="Home to India's oldest shipyard and a natural harbor that's one of the finest in the East."
          link="https://en.wikipedia.org/wiki/Visakhapatnam_Port"
        />
        <FeatureCard 
          title="Industrial Hub"
          description="Major industrial center with steel plants, refineries, and tech companies."
          link="https://en.wikipedia.org/wiki/Visakhapatnam_Steel_Plant"
        />
        <FeatureCard 
          title="Cultural Diversity"
          description="A melting pot of cultures, traditions, and festivals."
          link="https://en.wikipedia.org/wiki/Culture_of_Andhra_Pradesh"
        />
        <FeatureCard 
          title="Natural Beauty"
          description="Surrounded by scenic hills, valleys, and beautiful beaches."
          link="https://en.wikipedia.org/wiki/Tourism_in_Andhra_Pradesh"
        />
        <FeatureCard 
          title="Pleasant Climate"
          description="Enjoys a tropical climate with moderate temperatures year-round."
          link="https://en.wikipedia.org/wiki/Visakhapatnam#Climate"
        />
      </div>

      {/* History Section */}
      <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
        <h2 className="text-3xl font-bold mb-6">Rich History</h2>
        <div className="text-gray-700 space-y-4">
          <p>
            The history of Visakhapatnam dates back to the 6th century BCE when it was part of the 
            Kalinga Empire. The city has been ruled by various dynasties including the Cholas, 
            Eastern Gangas, and Vijayanagara Empire.
          </p>
          <p>
            During the colonial period, Visakhapatnam became an important port city for the British. 
            The city played a crucial role in India's freedom struggle and has since developed into 
            one of India's most important industrial and educational hubs.
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard number="2.9M+" label="Population" />
        <StatCard number="544" label="Square KM Area" />
        <StatCard number="1804" label="Year Established" />
        <StatCard number="3" label="Major Ports" />
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description, link }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="block bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
  >
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </a>
);

const StatCard = ({ number, label }) => (
  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
    <div className="text-4xl font-bold mb-2">{number}</div>
    <div className="text-base font-medium opacity-90">{label}</div>
  </div>
);

export default About;
