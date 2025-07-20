import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#282c34',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-around',
      gap: '30px',
      top: '0',
      right: '0',
      position: 'fixed',
      width: '50%',
      height: '20px'
    }}>
      <Link to="/" style={{ color: 'white' }}>Home</Link>
      <Link to="/about" style={{ color: 'white' }}>About</Link>
      <Link to="/services" style={{ color: 'white' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
