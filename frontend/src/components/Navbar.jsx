import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex gap-4">
      <nav style={{ margin: '1rem' }}>
      <Link to="/">Home</Link> |{' '}
      <Link to="/productos">Productos</Link> |{' '}
      <Link to="/nosotros">Nosotros</Link> |{' '}
      <Link to="/contacto">Contacto</Link>
      </nav>
      </ul>
    </nav>
  );
}

export default Navbar;