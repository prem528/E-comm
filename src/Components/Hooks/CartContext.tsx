 import React, { createContext, useState, ReactNode } from 'react'
 

// Define the shape of the cart item
type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
}

// Define the shape of the context state
interface CartContextType {
  cartItems: CartItem[]
  cartItemCount: number
  addToCart: (item: CartItem) => void
}

// Create the context
export const CartContext = createContext<CartContextType | undefined>(undefined)

// Create a provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = (item: CartItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id)
      if (existingItem) {
        // If the item already exists, increase the quantity
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      } else {
        // If the item does not exist, add it to the cart
        return [...prevItems, { ...item, quantity: 1 }]
      }
    })
  }

  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0)

  return (
    <CartContext.Provider value={{ cartItems, cartItemCount, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}