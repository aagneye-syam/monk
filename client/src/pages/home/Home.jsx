import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar'

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
        {/* Your main home page content here */}
        <div className="content-wrapper">
          {/* Your main content goes here */}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Enter text here..."
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Home;
