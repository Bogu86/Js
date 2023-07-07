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
    <div>
      <h2>Strona logowania</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Nazwa użytkownika:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Hasło:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Zaloguj</button>
      </form>
    </div>
  );
};

export default LoginPage;