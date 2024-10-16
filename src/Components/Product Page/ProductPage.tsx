import React, { useState, useContext } from 'react'
import { CartContext } from '../Hooks/CartContext'

import nike from '../../assets/img/Nike1.jpg'
import MacBook from '../../assets/img/macBook.jpg'
import oversize from '../../assets/img/oversize.webp'
import tshirt from '../../assets/img/Tshirt.webp'
import iphone from '../../assets/img/apple.jpg'
import headphone from '../../assets/img/headphone.webp'
import jeans from '../../assets/img/jeans.jpg'
import camera from '../../assets/img/camera.jpg'
import shirt from '../../assets/img/shirt.jpg'

import { Link } from 'react-router-dom'

// Define types
type Product = {
  id: number
  name: string
  price: number
  category: string
  image: string
  link: string  
}

type FilterState = {
  priceRange: [number, number]
  categories: string[]
}

type CartContextType = {
  addToCart: (product: Product) => void; // Define the structure of your CartContext
  // Add other context methods or properties if needed
}

// Mock data
const products: Product[] = [
  { id: 1, name: "MacBook", price: 999, category: "Electronics", image: MacBook, link: '/About'  },
  { id: 2, name: "iPhone 15", price: 699, category: "Electronics", image: iphone , link: '/About' },
  { id: 3, name: "Headphones", price: 199, category: "Electronics", image: headphone, link: '/About' },
  { id: 4, name: "T-shirt", price: 29, category: "Clothing", image: oversize, link: '/About'},
  { id: 5, name: "Jeans", price: 59, category: "Clothing", image: jeans, link: '/About'},
  { id: 6, name: "T-shirt", price: 89, category: "Clothing", image: tshirt, link: '/About' },
  { id: 7, name: "Sneakers", price: 89, category: "Footwear", image: nike, link: '/About' },
  { id: 8, name: "Camera", price: 499, category: "Electronics", image: camera, link: '/About' },
  { id: 9, name: "Shirt", price: 89, category: "Clothing", image: shirt, link: '/About' },
   
]

const categories = ["Electronics", "Clothing", "Footwear"]

export default function ProductPage() {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 1000],
    categories: [],
  })

  const { addToCart } = useContext(CartContext) as unknown as CartContextType; // Ensure proper typing

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    setFilters(prev => ({
      ...prev,
      priceRange: [prev.priceRange[0], value],
    }))
  }

  const handleCategoryChange = (category: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category],
    }))
  }

  const filteredProducts = products.filter(product => 
    product.price >= filters.priceRange[0] &&
    product.price <= filters.priceRange[1] &&
    (filters.categories.length === 0 || filters.categories.includes(product.category))
  )

  const handleAddToCart = (product: Product) => {
    addToCart(product)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Product Catalog</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filter Sidebar */}
        <aside className="w-full md:w-1/4">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <div className="mb-6">
              <h3 className="font-medium mb-2">Price Range</h3>
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={filters.priceRange[1]}
                onChange={handlePriceChange}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>${filters.priceRange[0]}</span>
                <span>${filters.priceRange[1]}</span>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Categories</h3>
              {categories.map(category => (
                <div key={category} className="flex items-center space-x-2 mb-2">
                  <input
                    type="checkbox"
                    id={category}
                    checked={filters.categories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                  <label htmlFor={category} className="text-sm font-medium text-gray-700">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
                <Link to={product.link}  >
                <img src={product.image} alt={product.name} className="w-full h-80  object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
                </Link>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.category}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">${product.price}</span>
                    <button 
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
