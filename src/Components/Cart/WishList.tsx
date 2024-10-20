import { useState } from 'react';
import wishlist from '../../assets/img/wishlist.png'
import shoes from '../../assets/img/nike.png'
import headphone from '../../assets/img/headphone.webp'
import iphone from '../../assets/img/apple.jpg'

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    { id: 1, name: "headphone", price: 99.99, image: headphone  },
    { id: 2, name: "Smartphone", price: 199.99, image: iphone },
    { id: 3, name: "Running Shoes", price: 79.99, image:  shoes},
  ]);

  const removeItem = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const addToCart = (item: WishlistItem) => {
    // This is where you would typically dispatch an action to add the item to the cart
    console.log(`Added ${item.name} to cart`);
    // Optionally, remove from wishlist after adding to cart
    removeItem(item.id);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
          My Wishlist
          <img src={wishlist} alt="Wishlist" className="inline-block w-8 h-8 m-4" />
        </h1>
        {wishlistItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your wishlist is empty.</p>
        ) : (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wishlistItems.map((item) => (
              <li key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4" />
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h2>
                  <p className="text-gray-600 mb-4">${item.price.toFixed(2)}</p>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                      Add to Cart
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
