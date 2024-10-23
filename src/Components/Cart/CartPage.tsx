import { useState } from 'react'
import { Link } from 'react-router-dom'
import MacBook from '../../assets/img/macBook.jpg'
import tshirt from '../../assets/img/Tshirt.webp'
import nike from '../../assets/img/Nike1.jpg'

// Define types
type Product = {
  id: number
  name: string
  price: number
  category: string
  image: string
}

type CartItem = Product & {
  quantity: number
}

// Cart data (get this from a state management solution or API)
const initialCartItems: CartItem[] = [
  { id: 1, name: "MacBook", price: 999, category: "Electronics", image: MacBook, quantity: 1 },
  { id: 4, name: "T-shirt", price: 29, category: "Clothing", image: tshirt, quantity: 2 },
  { id: 7, name: "Sneakers", price: 89, category: "Footwear", image: nike, quantity: 1 },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems)

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto px-4 sm:px-24 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <svg
            className="w-16 h-16 text-gray-400 mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <p className="text-xl font-semibold mb-4">Your cart is empty</p>
          <p className="text-gray-500 mb-6">Add some items to your cart to get started.</p>
          <Link
            to="/"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-3 rounded-xl shadow-2xl p-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 mb-4">
              <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
              <div className="space-y-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-4 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <div className="w-full sm:w-32 h-32 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-grow text-center sm:text-left">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.category}</p>
                      <p className="font-bold mt-1">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-2">
                      <div className="flex items-center gap-2">
                        <button
                          className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full hover:bg-gray-300 transition duration-300"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full hover:bg-gray-300 transition duration-300"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="text-red-500 hover:text-red-600 transition duration-300 mt-2 sm:mt-0"
                        onClick={() => removeItem(item.id)}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-xl shadow-2xl p-6 ">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
              </div>

              <Link to= "/checkout">
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition duration-300">
                Proceed to Checkout
              </button> 
              </Link>

              <Link
                to="/"
                className="block text-center text-blue-500 hover:text-blue-600 mt-4 transition duration-300"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}