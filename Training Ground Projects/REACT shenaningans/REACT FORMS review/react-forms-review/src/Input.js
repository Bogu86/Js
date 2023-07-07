import React, { useState } from "react";
import styles from "./Input.module.css";

function Input() {
  const [userName, setUserName] = useState('Imię');
  function handleUserName(e) {
    setUserName(e.target.value);
  }
  const [userLastname, setUserLastname] = useState('Nazwisko');
  function handleUserLastname(e) {
    setUserLastname(e.target.value);
  }

  const[userAge, setUserAge] = useState('Wiek');
  function handleUserAge(e) {
    setUserAge(e.target.value);
  }

  const[userAdress, setUserAdress] = useState('Adres');
  function handleUserAdress(e) {
    setUserAdress(e.target.value);
  }

  const[userHomeRoomClassNumber, setUserHomeRoomClassNumber] = useState('Numer Klasy');
  function handleUserHomeRoomClassNumber(e) {
    setUserHomeRoomClassNumber(e.target.value);
  }



  return (
    <>
      <div className={styles.emailContainer}>
        <h2>Let's stay in touch.</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <form>
          <label for="name">Imię: </label>
          <input id="name" type="text" onChange={handleUserName} value ={userName}/>
          <br></br>
          <label for="name">Nazwisko: </label>
          <input id="name" type="text" onChange={handleUserLastname} value ={userLastname}/>
          <br></br>
          <label for="name">Wiek: </label>
          <input id="name" type="text" onChange={handleUserAge} value ={userAge}/>
          <br></br>
          <label for="name">Adres: </label>
          <input id="name" type="text" onChange={handleUserAdress} value ={userAdress}/>
          <br></br>
          <label for="name">Numer Klasy: </label>
          <input id="name" type="text" onChange={handleUserHomeRoomClassNumber} value ={userHomeRoomClassNumber}/>
        </form>
      </div>
      <div className={styles.inputDisplay}>
        <h2>Podane Imię: </h2>
        <h4>{userName}</h4>
      </div>
<br></br>
      <div className={styles.inputDisplay}>
        <h2>Podane Nazwisko: </h2>
        <h4>{userLastname}</h4>
      </div>
<br></br>
      <div className={styles.inputDisplay}>
        <h2>Podany Wiek: </h2>
        <h4>{userAge}</h4>
      </div>
<br></br>
      <div className={styles.inputDisplay}>
        <h2>Podany Adres: </h2>
        <h4>{userAdress}</h4>
      </div>
<br></br>
      <div className={styles.inputDisplay}>
        <h2>Podany Numer Klasy: </h2>
        <h4>{userHomeRoomClassNumber}</h4>
      </div>
    </>
  );
}

export default Input;