import React, { useState } from 'react';
import logo from '../img/logo.png';
import searchIcon from '../img/red-search.png';
import './Nav.css';

export const Nav = ({ dates, setFiltered }) => {
  const [selectedLocation, setSelectedLocation] = useState('Helsinki, Finland');
  const [guests, setGuests] = useState('');
  const [showAddGuests, setShowAddGuests] = useState(true);

  const handleGuestsChange = (e) => {
    const value = e.target.value;
    setGuests(value);
    if (value === '') {
      setShowAddGuests(true);
    } else {
      setShowAddGuests(false);
    }
  };

  const filterData = () => {
    const filteredResults = dates.filter(({ city, maxGuests }) => {
      const locationMatch = !selectedLocation || city.toLowerCase() === selectedLocation.toLowerCase();
      const guestsMatch = maxGuests >= guests;
      return locationMatch && guestsMatch;
    });
    setFiltered(filteredResults);
  };

  return (
    <nav className='navbar'>
      <a href="#" className="navigation-logo">
        <img src={logo} alt="Airbnb logo" className="navigation-logo-image" />
      </a>
      <div className='navigation-inputs'>
        <select
          className='navigation-location-select'
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="Helsinki">Helsinki, Finland</option>
          <option value="Turku">Turku, Finland</option>
          <option value="Vaasa">Vaasa, Finland</option>
          <option value="Oulu">Oulu, Finland</option>
        </select>
        {showAddGuests ? (
          <input
            className='navigation-guests-input'
            type="text"
            placeholder='Add Guests'
            value={guests}
            onChange={handleGuestsChange}
          />
        ) : (
          <input
            className='navigation-guests-input'
            type="number"
            placeholder='Add Guests'
            value={guests}
            onChange={handleGuestsChange}
            max="10"
            min="1"
          />
        )}
        <button className='navigation-btn' onClick={filterData}>
          <img src={searchIcon} alt="search" />
        </button>
      </div>
    </nav>
  );
};
