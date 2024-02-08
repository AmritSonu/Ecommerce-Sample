
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold">
          Home
        </Link>
        <div className="space-x-4">
          <Link to="/checkout" className="text-white">
            Checkout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
