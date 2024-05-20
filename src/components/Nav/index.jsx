import React, { useState } from 'react';
import logo from '../img/logo.png';
import searchIcon from '../img/red-search.png';
import './Nav.css';

export const Nav = ({ dates, setFiltered }) => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [guests, setGuests] = useState(1);

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
          <option value="">Locations</option>
          <option value="Helsinki">Helsinki</option>
          <option value="Turku">Turku</option>
          <option value="Vaasa">Vaasa</option>
          <option value="Oulu">Oulu</option>
        </select>
        <input
          className='navigation-guests-input'
          type="number"
          placeholder='Add Guests'
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          max="10"
          min="1"
        />
        <button className='navigation-btn' onClick={filterData}>
          <img src={searchIcon} alt="search" />
        </button>
      </div>
    </nav>
  );
};
