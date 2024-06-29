import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar'; // Assuming Sidebar is in the same directory
import GenContent from '../../components/GenContent/GenContent';

const Home = () => {
  const [inputValue, setInputValue] = useState(''); // State for text box input

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log('Submitted:', inputValue); // Log the input value for now (replace with actual submission logic)
    setInputValue(''); // Clear the input after submit
  };

  return (
    <div className="home-container">
      <Sidebar />
      <main className="main-content-container">
        <GenContent />
        <div className="content-wrapper">
          {/* Your main content goes here */}
        </div>
        <form onSubmit={handleSubmit} style={{ justifySelf: 'flex-end' }}>
          <div className="input-container">
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Enter text here..."
              style={{ width: '42%' }}
              
            />
            <button type="submit" className="custom-input-button">
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Home;
