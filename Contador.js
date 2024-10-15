import React, { useState } from 'react';

function Contador() {
  // Declarar una variable de estado llamada 'count' y su función 'setCount'
  const [count, setCount] = useState(0);

  // Función para manejar el color según el valor del contador
  const getCounterColor = () => {
    if (count > 0) return '#4CAF50'; // Verde si es positivo
    if (count < 0) return '#F44336'; // Rojo si es negativo
    return '#000'; // Negro si es 0
  };

  return (
    <div style={styles.container}>
      <h1 style={{ ...styles.counterText, color: getCounterColor() }}>
        {count}
      </h1>
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => setCount(count + 1)}>
          Incrementar
        </button>
        <button style={styles.button} onClick={() => setCount(count - 1)}>
          Decrementar
        </button>
        <button style={styles.resetButton} onClick={() => setCount(0)}>
          Reiniciar
        </button>
      </div>
      <p>Has hecho clic {count} veces</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  counterText: {
    fontSize: '4rem',
    transition: 'color 0.5s ease', // Cambio de color con transición suave
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    margin: '20px 0',
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
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#005F73',
  }
};

export default Contador;