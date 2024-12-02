import React from 'react';
import './About.css'; // Import the CSS file for About component

const About = ({ isDarkMode }) => {
  return (
    <div className={`about-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2 className={`about-title ${isDarkMode ? 'dark-mode' : ''}`}>About News-Bash</h2>
      <p className={`about-description ${isDarkMode ? 'dark-mode' : ''}`}>
        Welcome to News-Bash! Stay updated with the latest news from all over the world.
        We provide top headlines across different categories such as general news, business, entertainment, sports, and more.
      </p>
      <h4>Features:</h4>
      <ul className={`about-list ${isDarkMode ? 'dark-mode' : ''}`}>
        <li>Get the latest news from trusted sources.</li>
        <li>Browse news by categories such as Business, Technology, Sports, and more.</li>
        <li>Pagination for easy navigation through news articles.</li>
        <li>Dark mode toggle for better readability at night.</li>
      </ul>
      <h4>How It Works:</h4>
      <p>
        You can filter news by categories, switch between pages, and read the latest headlines.
        Use the search bar to find specific topics.
      </p>
      <h4>Data Source:</h4>
      <p>
        News content is sourced from <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">NewsAPI</a>, bringing you up-to-date headlines from trusted sources around the world.
      </p>
      <h4>Contact:</h4>
      <p className="about-contact">
        Have questions or feedback? Reach out to us at <a href="mailto:email@example.com">shivanisolanki19903@gmail.com</a>.
      </p>
      <div className="about-footer">
        <p>&copy; 2024 News-Bash. All rights reserved.</p>
      </div>
    </div>
  );
};

export default About;
