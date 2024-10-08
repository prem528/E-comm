import React, { useState } from 'react'
import { Search, ShoppingCart, Menu, X } from 'lucide-react'

type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Categories', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]
const Header:React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartItemCount,  ] = useState(0)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className="bg-gray-100 shadow-md  lg:px-24">
    <div className="container mx-auto px-4 py-8 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-primary">
        <a href="/">E-Shop</a>
      </div>

      {/* Navigation for larger screens */}
      <nav className="hidden md:flex flex-grow justify-center">
            <div className="space-x-6 font-semibold text-lg">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

      {/* Search Bar */}
      <div className="hidden md:flex items-center ml-auto"> {/* Added ml-auto to push it to the right */}
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
        <a href="/cart" className="text-muted-foreground hover:text-primary transition-colors">
          <ShoppingCart className="h-6 w-6" />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-muted-foreground" onClick={toggleMenu}>
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <nav className="md:hidden bg-background">
        <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              {item.label}
            </a>
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
  )
}

export default Header
