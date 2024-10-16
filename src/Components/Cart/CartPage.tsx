import  { useState } from 'react'
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

//  cart data (get this from a state management solution or API)
const initialCartItems: CartItem[] = [
  { id: 1, name: "MacBook", price: 999, category: "Electronics", image: MacBook, quantity: 1 },
  { id: 4, name: "T-shirt", price: 29, category: "Clothing", image: tshirt, quantity: 2 },
  { id: 7, name: "Sneakers", price: 89, category: "Footwear", image: nike  , quantity: 1 },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems)

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto px-24 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-xl mb-4">Your cart is empty</p>
          <Link to="/" className="text-blue-500 hover:text-blue-600">Continue Shopping</Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/3">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center border-b border-gray-200 py-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="ml-4 flex-grow">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600">{item.category}</p>
                  <p className="font-bold">${item.price}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-gray-200 px-2 py-1 rounded-l"
                  >
                    -
                  </button>
                  <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-200 px-2 py-1 rounded-r"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-4 text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="lg:w-1/3">
            <div className="bg-gray-100 rounded-lg shadow p-6">
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
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                Proceed to Checkout
              </button>
              <Link to="/" className="block text-center text-blue-500 hover:text-blue-600 mt-4">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}