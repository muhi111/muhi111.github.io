import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaBars } from 'react-icons/fa';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768;
      setIsMobile(newIsMobile);
      if (newIsMobile) {
        setIsOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path: string): void => {
    navigate(path);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const sidebarContent = (
    <>
      <div className="mt-14">
        <nav>
          <ul className="space-y-2">
            <li>
              <button onClick={() => handleNavigation('/')} className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded transition duration-200">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation('/skills')} className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded transition duration-200">
                Skills
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation('/works')} className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded transition duration-200">
                Works
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-auto">
        <a
          href="https://github.com/muhi111"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block hover:text-gray-400 transition duration-200"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </>
  );

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 left-4 z-20 text-white bg-gray-800 p-2 rounded hover:bg-gray-700 transition duration-200 ${
          isOpen && !isMobile ? 'left-68' : 'left-4'
        }`}
      >
        <FaBars size={24} />
      </button>
      <div
        className={`bg-gray-800 text-white w-64 min-h-screen p-4 flex flex-col fixed top-0 left-0 z-10 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarContent}
      </div>
    </>
  );
}

export default Sidebar;