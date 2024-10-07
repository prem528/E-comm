import React, { useState } from 'react'
import nike from '../../assets/img/Nike1.jpg'

interface Product {
  id: number
  name: string
  description: string
  price: number
  images: string[]
  features: string[]
  colors: string[]
  sizes: string[]
}

const product: Product = {
  id: 1,
  name: "Nike Blazer Mid '77 Premium",
  description: "This premium version of the Blazer Mid delivers a timeless design that's easy to wear. The resort-inspired details mean these shoes are a holiday for your feet. The terry-cloth accents and a monogrammed tongue label are reminiscent of the nicest towels. Exposed foam on the tongue and a special midsole finish make it look like you've just pulled them from the history books.",
  price: 299.99,
  images: [
     nike,
     nike,
     nike,
  ],
  features: [
    "AColour Shown: Summit White/Phantom/Light",
    "Style: FN5822-100",
    "Country/Region of Origin: Vietnam",
    "Comfortable design",
    "Standard delivery 4–9 business days",
  ],
  colors: ["Black", "Silver", "White"],
  sizes: ["One Size"],
}
const ProductDescription:React.FC = () => {
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [mainImage, setMainImage] = useState(product.images[0])
  return (
    <div className="container mx-auto px-24 py-8">
    <div className="flex flex-col md:flex-row gap-8">
      {/* Product Images */}
      <div className="md:w-1/2">
        <img src={mainImage} alt={product.name} className="w-full h-auto rounded-lg shadow-md mb-4" />
        <div className="flex gap-2">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setMainImage(image)}
              className="w-20 h-20 rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="text-3xl font-bold text-blue-600 mb-4">${product.price.toFixed(2)}</div>

        {/* Color Selection */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Color</h2>
          <div className="flex gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-4 py-2 rounded-full ${
                  selectedColor === color
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Size</h2>
          <div className="flex gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-full ${
                  selectedSize === size
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4">
          Add to Cart
        </button>

        {/* Product Features */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Features</h2>
          <ul className="list-disc list-inside text-gray-600">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductDescription
