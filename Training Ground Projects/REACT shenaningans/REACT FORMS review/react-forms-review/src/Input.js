import React, { useState } from "react";
import styles from "./Input.module.css";

function Input() {
  const [userInput1, setUserInput] = useState('');
  function handleUserInput1(e) {
    setUserInput(e.target.value);
  }
  const [userInput, setUserInput1] = useState('Pliska wpisz tutej adresik');
  function handleUserInput(e) {
    setUserInput1(e.target.value);
  }





  return (
    <>
      <div className={styles.emailContainer}>
        <h2>Let's stay in touch.</h2>
        <p>
          Sign up for our newsletter to stay up-to-date on the latest products,
          receive exclusive discounts, and connect with other programmers who
          share your passion for all things tech.
        </p>
        <form>
          <label for="email">Email: </label>
          <input id="email" type="text" onChange={handleUserInput1} value ={userInput1}/>
          <br></br>
          <label for="email">Email: </label>
          <input id="email" type="text" onChange={handleUserInput} value ={userInput}/>
        </form>
      </div>
      <div className={styles.inputDisplay}>
        <h2>Current User Input: </h2>
        <h4>{userInput1}</h4>
      </div>
<br></br>
      <div className={styles.inputDisplay}>
        <h2>Current User Input: </h2>
        <h4>{userInput}</h4>
      </div>
    </>
  );
}

export default Input;