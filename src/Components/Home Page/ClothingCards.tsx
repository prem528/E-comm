import React from 'react'
import { Link } from 'react-router-dom';  
import image1 from '../../assets/img/image01.jpg'
import image2 from '../../assets/img/image02.jpg'
import image3 from '../../assets/img/image03.jpg'
 


interface ClothingItem {
  id: number
  name: string
  image: string
  link: string
}

const clothingItems: ClothingItem[] = [
  {
    id: 1,
    name: "Cloths",
    image: image1,
    link: "/products"
  },
  {
    id: 2,
    name: "Winter Dress",
    image: image2,
    link: "/products"
  },
  {
    id: 3,
    name: "Summer Dress",
    image: image3,
    link: "/products"
  }
]

const ClothingCards:React.FC = () => {
  return (
    <div className="container mx-auto  px-10 lg:px-20 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {clothingItems.map((item) => (
          <Link  
            to={item.link}  
            key={item.id} 
            className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="relative pb-[133%]">
              <img
                src={item.image}
                alt={item.name}
                className="absolute top-0 left-0 w-full h-full object-cover hover:opacity-80"
                loading="lazy"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-600 mt-1">Click to view details</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
 export default ClothingCards;