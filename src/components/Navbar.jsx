import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [cartItems, setCartItems] = useState(23);
  const [cartTotal, setCartTotal] = useState(79.89);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userLocation, setUserLocation] = useState('Regent Street, A4, A4201, London');

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.navbar-container')) {
        setMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setMenuOpen(false); // Close mobile menu after selection
    // Here you would typically also navigate to the selected section/page
    console.log(`Navigating to ${tabName}`);
  };

  const handleLocationChange = () => {
    // In a real app, this would open a location picker modal
    const newLocation = prompt('Enter your new location:', userLocation);
    if (newLocation) {
      setUserLocation(newLocation);
    }
  };

  const handleCartClick = () => {
    // Navigate to cart page or open cart modal
    console.log('Opening cart');
  };

  const handleAuthClick = () => {
    if (isLoggedIn) {
      // Handle logout
      setIsLoggedIn(false);
      console.log('User logged out');
    } else {
      // Navigate to auth page or open auth modal
      console.log('Opening login/signup');
      // For demo, just toggle logged in state
      setIsLoggedIn(true);
    }
  };

  const navItems = [
    'Home',
    'Browse Menu',
    'Special Offers',
    'Restaurants',
    'Track Order'
  ];

  return (
    <div className="text-sm text-black w-full navbar-container">
      {/* Header */}
      <div className="hidden md:flex text-black bg-[#FAFAFA] rounded-b-xl px-4 py-3 gap-4 md:items-center md:justify-between text-sm">
        {/* Promo Section */}
        <div className="flex items-center gap-2 md:gap-3 text-center md:text-left justify-center md:justify-start">
          <img src={assets.star} alt="star" className="h-5 md:h-6" />
          <p className="text-sm font-medium">
            Get 5% Off your first order,
            <span className="underline underline-offset-2 text-primary font-semibold ml-1 text-base">Promo: ORDER5</span>
          </p>
        </div>

        {/* Location Section */}
        <div className="flex items-center gap-2 md:gap-3 text-center md:text-left justify-center md:justify-start">
          <img src={assets.location} alt="Location" className="h-5 md:h-6" />
          <p>
            {userLocation}
            <span 
              className="ml-1 underline underline-offset-2 text-primary font-light text-sm cursor-pointer"
              onClick={handleLocationChange}
            >
              Change Location
            </span>
          </p>
        </div>

        {/* Basket Section */}
        <div 
          className="flex items-center bg-tertiary rounded-xl px-4 py-2 gap-2 md:gap-4 h-full cursor-pointer hover:bg-tertiary-dark transition"
          onClick={handleCartClick}
        >
          <img src={assets.basket} alt="Basket" className="h-6 md:h-7" />
          <p className="font-semibold text-white text-sm md:text-base">{cartItems} Items</p>
          <p className="font-semibold text-white text-sm md:text-base">GBP {cartTotal.toFixed(2)}</p>
          <img src={assets.forwordBtn} alt="Forward" className="h-6 md:h-7" />
        </div>
      </div>

      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-6 py-4 bg-[#fafafa] text-secondary shadow-md relative z-50">
        {/* Logo */}
        <div className="flex items-center space-x-1 text-3xl font-bold cursor-pointer">
          <img src={assets.navLogo} alt="logo" className="h-8" />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="text-2xl focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Nav Links */}
        <div className={`flex-col md:flex-row md:flex items-center gap-6 absolute md:static top-full left-0 w-full md:w-auto bg-[#fafafa] md:bg-transparent px-6 md:px-0 py-4 md:py-0 shadow-md md:shadow-none transition-all duration-300 ease-in-out ${menuOpen ? 'flex' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 w-full md:w-auto">
            {navItems.map((item) => (
              <li 
                key={item}
                className={`${activeTab === item ? 'bg-primary hover:bg-orange-600 text-white' : 'hover:text-primary'} px-6 py-2 rounded-full font-medium transition w-full md:w-auto text-center cursor-pointer`}
                onClick={() => handleTabClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>

          <button 
            className="flex items-center justify-center space-x-2 bg-secondary text-white px-6 py-2 rounded-full hover:opacity-90 transition mt-4 md:mt-0 w-full md:w-auto"
            onClick={handleAuthClick}
          >
            <img src={assets.user} alt="user" className="h-8 w-10" />
            <span>{isLoggedIn ? 'Logout' : 'Login/Signup'}</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;