import React from 'react'
import nike from '../../assets/img/nike.png'
import nike1 from '../../assets/img/Nike1.jpg'
import nike2 from '../../assets/img/Nike2.png'
import { Link } from 'react-router-dom'

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
      name: "Nike Dunk",
      description: "Men's shoes",
      price: 129.99,
      image: nike,
      link: '/About'  
    },
    {
      id: 2,
      name: "Nike Jordan",
      description: "Men's shoes",
      price: 199.99,
      image:nike1,
      link: '/About' 
    },
    {
      id: 3,
      name: "Nike Jordan",
      description: "Men's shoes",
      price: 49.99,
      image:  nike2,
      link: '/About' 
    },
    {
      id: 4,
      name: "Nike Dunk",
      description: "Men's shoes",
      price: 79.99,
      image:  nike1,
      link: '/About' 
    },
    {
      id: 5,
      name: "Nike Dunk",
      description: "Men's shoes",
      price: 69.99,
      image:  nike2,
      link: '/About' 
    },
    {
      id: 6,
      name: "Nike Jordan",
      description: "Men's shoes",
      price: 39.99,
      image:  nike,
      link: '/About'
    }
  ]

const Products:React.FC = () => {
  return (
    <div className="container mx-auto px-10 lg:px-24 py-10">
      <h1 className="text-5xl font-bold text-center mb-20 text-blue-900">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 ">
            <Link to={product.link}  >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80  object-cover transition-transform duration-300 ease-in-out hover:scale-110" // Added hover effect
                loading="lazy"
              />
            </Link>
            <div className="p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
               
               
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
