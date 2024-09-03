import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(null);
  const handleMenuToggle = () => setIsOpen(!isOpen);
  const handleSubMenuToggle = (menu) =>
    setSubMenuOpen(subMenuOpen === menu ? null : menu);

  return (
    <nav className="bg-gray-800 p-4 px-20">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-white font-bold text-xl" to="/">
          Student Dashboard{" "}
        </Link>
        <div className="md:hidden flex items-center">
          <button onClick={handleMenuToggle} className="text-white">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className={`md:flex md:items-center md:space-x-4 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link to="/" className="text-white block md:inline-block">
            GridView
          </Link>
          <Link to="/course" className="block px-4 py-2 text-white">
            Courses
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
