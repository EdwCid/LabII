import React, { useState } from 'react';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
          alt="US Flag"
          style={styles.flag}
        />
        <h1>Bienvenidos al Poetal de Los Estados Unidos</h1>
      </div>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Acercad de </a></li>
          <li><a href="#services">Servios</a></li>
          <li><a href="#contact">Contactanos</a></li>
        </ul>
      </nav>
      <button style={styles.loginButton} onClick={handleLoginClick}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      <p>{isLoggedIn ? 'Hello, User!' : 'Please log in.'}</p>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#f1f1f1',
    padding: '20px',
    textAlign: 'center',
    borderBottom: '2px solid #ccc',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flag: {
    width: '50px',
    marginRight: '10px',
  },
  nav: {
    marginTop: '10px',
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  loginButton: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  }
};

export default Header;
