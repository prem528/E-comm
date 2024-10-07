import React from 'react'
import nike from '../../assets/img/nike.png'
import nike1 from '../../assets/img/Nike1.jpg'
import nike2 from '../../assets/img/Nike2.png'

interface Product {
    id: number
    name: string
    description: string
    price: number
    image: string
    link: string  
  }
  
  const products: Product[] = [
    {
      id: 1,
      name: "Wireless Earbuds",
      description: "High-quality sound with noise cancellation",
      price: 129.99,
      image: nike,
      link: '/About'  
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Track your fitness and stay connected",
      price: 199.99,
      image:nike1,
      link: '/About' 
    },
    {
      id: 3,
      name: "Portable Charger",
      description: "Fast charging for all your devices",
      price: 49.99,
      image:  nike2,
      link: '/About' 
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      description: "Powerful sound in a compact design",
      price: 79.99,
      image:  nike1,
      link: '/About' 
    },
    {
      id: 5,
      name: "Laptop Backpack",
      description: "Stylish and functional with multiple compartments",
      price: 69.99,
      image:  nike2,
      link: '/About' 
    },
    {
      id: 6,
      name: "Wireless Mouse",
      description: "Ergonomic design for all-day comfort",
      price: 39.99,
      image:  nike,
      link: '/About'
    }
  ]

const Products:React.FC = () => {
  return (
    <div className="container mx-auto px-24 py-10">
      <h1 className="text-5xl font-bold text-center mb-8 text-blue-900">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <a href={product.link}  >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110" // Added hover effect
                loading="lazy"
              />
            </a>
            <div className="p-4">
               
               
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
                 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
