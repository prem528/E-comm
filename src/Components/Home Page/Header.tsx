import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, X, Heart } from "lucide-react";
import { CartContext } from "../Hooks/CartContext";
import { WishlistContext } from "../Hooks/WishlistContext";

type NavItem = {
  label: string;
  link: string;
};

const navItems: NavItem[] = [
  { label: "Home", link: "/" },
  { label: "Products", link: "/products" },
  { label: "Categories", link: "/" },
  { label: "About", link: "/aboutpage" },
  { label: "Contact", link: "/contact" },
];
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItemCount } = useContext(CartContext) || { cartItemCount: 0 };
  const { wishlistItems } = useContext(WishlistContext) || { wishlistItems: [] };  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-gray-100 shadow-md fixed top-0 left-0 w-full z-10 lg:px-24">
      <div className="container mx-auto px-4 py-8 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary">
          <a href="/">E-Shop</a>
        </div>

        {/* Navigation for larger screens */}
        <nav className="hidden md:flex flex-grow justify-center">
          <div className="space-x-6 font-semibold text-lg">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.link}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center ml-auto">
          {" "}
          {/* Added ml-auto to push it to the right */}
          <input
            type="text"
            placeholder="Search products..."
            className="border border-input rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="bg-primary text-primary-foreground py-2 px-4 rounded-r-md hover:bg-primary/90 transition-colors">
            <Search className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Icon */}
        <div className="relative">
          <Link to="/cart">  
            <ShoppingCart className="w-12 h-6 text-primary" />
          </Link>  
          {cartItemCount > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartItemCount}
            </div>
          )}
        </div>

        <div className="relative">
          <Link to="/wishlist">  
            <Heart className="w-12 h-6 text-primary" />
          </Link>  
          {wishlistItems.length > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {wishlistItems.length}
            </div>
          )}
        </div>
        

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-muted-foreground"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.link}
                className="text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center py-2">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-grow border border-input rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground py-2 px-4 rounded-r-md hover:bg-primary/90 transition-colors">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
