import { useState } from "react";
import { Search, ShoppingBasket, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setShowLogin, onSearch }) => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="flex justify-between items-center py-6">
      {/* Logo */}
      <h1 className="text-5xl font-bold text-orange-500">
        Tomato.
      </h1>

      {/* Links */}
      <ul className="hidden md:flex gap-10 text-gray-600 font-medium">
        <li>
          <a href="#home" className="border-b-2 border-orange-500 pb-1">
            Home
          </a>
        </li>

        <li>
          <a href="#menu" className="hover:text-orange-500">
            Menu
          </a>
        </li>

        <li>
          <a href="#download" className="hover:text-orange-500">
            Mobile App
          </a>
        </li>

        <li>
          <a href="#contact" className="hover:text-orange-500">
            Contact Us
          </a>
        </li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-5">
        {showSearch ? (
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
            <Search size={18} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search food..."
              className="outline-none px-2 w-44"
              onChange={(e) => onSearch(e.target.value)}
              autoFocus
            />

            <X
              size={18}
              className="cursor-pointer text-gray-500"
              onClick={() => {
                setShowSearch(false);
                onSearch("");
              }}
            />
          </div>
        ) : (
          <Search
            size={22}
            className="cursor-pointer"
            onClick={() => setShowSearch(true)}
          />
        )}

        <ShoppingBasket
          size={22}
          className="cursor-pointer"
          onClick={() => navigate("/cart")}
        />

        <button
          onClick={() => setShowLogin(true)}
          className="border border-orange-500 px-7 py-2 rounded-full hover:bg-orange-500 hover:text-white duration-300"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;