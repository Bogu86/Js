//Przykładowa strona wygenerowana przez ChatGPT
import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Tutaj możesz dodać logikę do przetwarzania danych logowania, np. wysłanie ich na serwer
    console.log('Wprowadzono następujące dane logowania:', username, password);
    // Czyści pola po zatwierdzeniu formularza
    setUsername('');
    setPassword('');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Strona logowania</h2>
      <form onSubmit={handleFormSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="username" style={styles.label}>
            Nazwa użytkownika:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>
            Hasło:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Zaloguj
        </button>
      </form>
    </div>
  );
};
const styles = {
  container: {
    width: '300px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    cursor: 'pointer',
  },
};
export default LoginPage;