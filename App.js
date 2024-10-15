import React from 'react';
import Header from './Header'; // Importa el componente Header
import Contador from './Contador'; // Importar el componente Contador
import Saludo from './Saludo'; // Importar el componente Saludo


function App() {
  return (
    <div style={styles.appContainer}>
      <Header /> {/* Uso del componente Header */}
      <main style={styles.mainContent}>
        <h2>Explora los Servicios que Ofrecemos</h2>
        <p>
        Bienvenido al portal oficial de EE. UU. Aquí puedes encontrar información 
        sobre el gobierno, servicios para ciudadanos y mucho más. Ya sea que estés 
        buscando información sobre visas, formularios fiscales o detalles de contacto, 
        estás en el lugar correcto.
        </p>
      </main>
      <footer style={styles.footer}>
        <p>&copy; 2024 U.S. Portal de l Gobierno . All rights reserved.</p>
        <ul style={styles.footerNav}>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terminos de Servicios</a></li>
          <li><a href="#contact">Contactanos</a></li>
        </ul>
      </footer>
    </div>
  );
}

const styles = {
  appContainer: {
    fontFamily: "'Arial', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    color: '#333',
  },
  mainContent: {
    flex: '1',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '20px auto',
    maxWidth: '80%',
    borderRadius: '8px',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '15px 0',
    borderTop: '2px solid #ccc',
  },
  footerNav: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: 0,
    margin: '10px 0 0',
  },
  footerNavItem: {
    textDecoration: 'none',
    color: '#fff',
    transition: 'color 0.3s',
  },
};

export default App;
