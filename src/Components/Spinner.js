import React from 'react';
import loadingGif from './loading.gif'; // Importing loading.gif

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={loadingGif} alt="Loading..." />
    </div>
  );
};

export default Spinner;
