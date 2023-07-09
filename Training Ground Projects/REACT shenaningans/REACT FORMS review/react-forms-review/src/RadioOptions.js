import React, { useState } from 'react';
import styles from "./Input.module.css";


const RadioOptions = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Wybrana opcja:', selectedOption);
  };

  return (
    <div className={styles.emailContainer}>
      <h2>Wybierz jedną z opcji lunch'u:</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="radio"
            id="option1"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
          />
          <label htmlFor="option1">Opcja 1</label>
        </div>
        <div>
          <input
            type="radio"
            id="option2"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
          />
          <label htmlFor="option2">Opcja 2</label>
        </div>
        <div>
          <input
            type="radio"
            id="option3"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}
          />
          <label htmlFor="option3">Opcja 3</label>
        </div>
        <div>
          <input
            type="radio"
            id="option4"
            value="option4"
            checked={selectedOption === 'option4'}
            onChange={handleOptionChange}
          />
          <label htmlFor="option4">Opcja 4</label>
        </div>
        <div>
          <input
            type="radio"
            id="option5"
            value="option5"
            checked={selectedOption === 'option5'}
            onChange={handleOptionChange}
          />
          <label htmlFor="option5">Opcja 5</label>
        </div>
        <button type="submit">Wybierz</button>
      </form>
    </div>
  );
};

export default RadioOptions;