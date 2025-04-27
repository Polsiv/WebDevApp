import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  var username = localStorage.getItem('username');

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/characters">
            <span className="logo-text">FUTURAMA</span>
          </Link>
        </div>
        
        <div className="navbar-links">
          <Link 
            to="/characters" 
            className={location.pathname === '/characters' ? 'active' : ''}
          >
            Personajes
          </Link>
          <Link 
            to="/form" 
            className={location.pathname === '/form' ? 'active' : ''}
          >
            Formulario
          </Link>
          <div className='wrapper'>
            {username && (
              <div className="navbar-username">
                <span>Bienvenido {username}!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;