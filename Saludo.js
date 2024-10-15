import React, { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('');
  const [greeted, setGreeted] = useState(false);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleGreet = () => {
    if (name.trim() !== '') {
      setGreeted(true);
    }
  };

  const handleReset = () => {
    setName('');
    setGreeted(false);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.greeting}>
        {greeted ? `Hola, ${name}!` : 'Por favor, ingresa tu nombre:'}
      </h2>
      {!greeted && (
        <div style={styles.inputContainer}>
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
            placeholder="Ingresa tu nombre"
            style={styles.input}
          />
          <button style={styles.button} onClick={handleGreet}>
            Saludar
          </button>
        </div>
      )}
      {greeted && (
        <button style={styles.resetButton} onClick={handleReset}>
          Reiniciar
        </button>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: "'Arial', sans-serif",
  },
  greeting: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '200px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#008CBA',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  resetButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#FF5722',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.3s',
  },
};

export default Greeting;
