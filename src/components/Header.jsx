import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [open, setOpen] = useState(false);
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-lg">
      <nav className="flex items-center justify-between px-6 py-5 mx-auto max-w-7xl">
        <h1 className="text-3xl font-extrabold text-orange-600">
          Ayodhya Nagri
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden gap-8 font-semibold text-gray-800 md:flex">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className="cursor-pointer hover:text-orange-500"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>


        {/* Hamburger */}
        <button
          className="text-3xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="bg-white shadow-md md:hidden">
          <ul className="flex flex-col gap-4 p-6 font-semibold text-gray-800">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="hover:text-orange-500"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
