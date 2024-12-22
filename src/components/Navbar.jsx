import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});

  const navigate = useNavigate();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Famous For',
      subItems: [
        { name: 'Industrial Giants', path: '/famous-for/industrial-giants' },
        { name: 'Notable Personalities', path: '/famous-for/notable-personalities' },
        { name: 'Educational Institutions', path: '/famous-for/educational-institutions' },
        { name: 'Famous Temples', path: '/famous-for/famous-temples'}
      ]
    },
    {
      name: 'Tourism',
      subItems: [
        { name: 'Hill Stations', path: '/tourism/hill-stations' },
        { name: 'Museums and Heritage', path: '/tourism/museums-heritage' },
        { name: 'Parks and Recreation', path: '/tourism/parks-recreation' },
        { name: 'BeautifulBeaches', path: '/beaches'}
      ]
    },
    {
      name: 'Public Utilities',
      subItems: [
        { name: 'Banks', path: '/public-utilities/banks' },
        { name: 'Hospitals', path: '/public-utilities/hospitals' },
        { name: 'Airport', path: '/public-utilities/airport' }
      ]
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const toggleSubmenu = (name) => {
    setSubmenuOpen((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">VISAKHAPATNAM</Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.path ? (
                    <Link
                      to={item.path}
                      className="text-white bg-blue-600 hover:bg-blue-700 font-medium px-3 py-2 border-2 border-transparent hover:border-blue-700 rounded-md transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="text-white bg-blue-600 hover:bg-blue-700 font-medium px-3 py-2 border-2 border-transparent hover:border-blue-700 rounded-md transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  )}
                  {item.subItems && submenuOpen[item.name] && (
                    <div className="absolute w-56 bg-white text-gray-800 shadow-xl rounded-lg mt-2 border border-gray-100 overflow-hidden z-10">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-6 py-3 hover:bg-blue-50 transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <div key={item.name} className="border-b border-gray-100 last:border-0">
                {item.path ? (
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className="block px-4 py-3 text-white bg-blue-600 hover:bg-blue-700 w-full text-left font-medium border-2 border-transparent hover:border-blue-700 rounded-md"
                  >
                    {item.name}
                  </button>
                ) : (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="block px-4 py-3 text-white bg-blue-600 hover:bg-blue-700 w-full text-left font-medium border-2 border-transparent hover:border-blue-700 rounded-md"
                    >
                      {item.name}
                    </button>
                    {item.subItems && submenuOpen[item.name] && (
                      <div className="bg-gray-50">
                        {item.subItems.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() => handleNavigation(subItem.path)}
                            className="block w-full px-6 py-3 text-gray-600 hover:text-blue-600 hover:bg-gray-100 text-left"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
