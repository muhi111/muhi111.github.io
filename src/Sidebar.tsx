import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Portfolio</h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="block py-2 px-4 hover:bg-gray-700 rounded transition duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/skills" className="block py-2 px-4 hover:bg-gray-700 rounded transition duration-200">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/works" className="block py-2 px-4 hover:bg-gray-700 rounded transition duration-200">
              Works
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;