import React from 'react';

const Emergency = ({ icon: Icon, title, number, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-start gap-4 mb-4">
        <div className="p-3 bg-gradient-to-r from-red-300 to-red-500 rounded-full">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
      </div>
      <a href={`tel:${number}`} className="text-2xl font-bold text-red-600 mb-2 block hover:text-red-800 transition-colors duration-200">
        {number}
      </a>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
};

export default Emergency;

