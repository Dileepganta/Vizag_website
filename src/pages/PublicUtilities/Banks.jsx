import React from 'react';

function Banks() {
  const banks = [
    {
      name: 'State Bank of India',
      location: 'Main Branch, Dwaraka Nagar',
      contact: '1800 1234'
    },
    {
      name: 'HDFC Bank',
      location: 'Siripuram Junction',
      contact: '1800 5678'
    },
    {
      name: 'ICICI Bank',
      location: 'MVP Colony',
      contact: '1800 9012'
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Banks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {banks.map((bank) => (
          <div key={bank.name} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">{bank.name}</h2>
            <p className="text-gray-600 mb-2">Location: {bank.location}</p>
            <p className="text-blue-600">Contact: {bank.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banks;