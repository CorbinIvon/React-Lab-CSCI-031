'use client';
import React, { useState } from 'react';
const MySearchBar = () => {
  // State to store the input value
  const [inputValue, setInputValue] = useState('');

  // Event handler for input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    let searchBarValue = event.target.value;
    // Get all the cards
    let cards = document.getElementsByClassName('CardComponent');
    // Loop through the cards
    for (let i = 0; i < cards.length; i++) {
      // Get the card title
      let cardTitle = cards[i].getElementsByClassName('CardComponent-title')[0];
      let cardDescShort = cards[i].getElementsByClassName('CardComponent-contentShort')[0];
      let cardDescLong = cards[i].getElementsByClassName('CardComponent-contentLong')[0];
      // Get the card title text
      let cardTitleText = cardTitle ? cardTitle.innerText : '';
      let cardDS = cardDescShort ? cardDescShort.innerText : '';
      let cardDL = cardDescLong ? cardDescLong.innerText : '';
      // Check if the card title text includes the searchBar value
      if (
        cardTitleText.includes(searchBarValue) ||
        cardDS.includes(searchBarValue) ||
        cardDL.includes(searchBarValue)
      ) {
        // If it does, show the card
        cards[i].style.display = 'block';
      } else {
        // If it doesn't, hide the card
        cards[i].style.display = 'none';
      }
    }
    if (searchBarValue.length === 0) {
      for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = 'block';
      }
    }
  };
  return (
    <div className="flex justify-center m-4">
      <input
        type="text"
        placeholder="Search"
        className="lg:w-1/2 w-full px-4 py-2 text-gray-300 bg-slate-700 rounded"
        id="SearchBar"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default MySearchBar;
