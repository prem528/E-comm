import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/img/image01.jpg'
import img2 from '../../assets/img/image02.jpg'
import img3 from '../../assets/img/image03.jpg'

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
    image:  img,
    link: "/products"
  },
  {
    id: 2,
    name: "Winter Dress",
    image: img2,
    link: "/products"
  },
  {
    id: 3,
    name: "Summer Dress",
    image:  img3,
    link: "/products"
  }
]

const ClothingCard: React.FC<ClothingItem> = memo(({ name, image, link }) => (
  <Link
    to={link}
    className="group block bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <div className="relative pb-[133%]">
      <img
        src={image}
        alt={name}
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-200 group-hover:opacity-80"
        loading="lazy"
      />
    </div>
    <div className="p-4 bg-white">
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600 mt-1">Click to view details</p>
    </div>
  </Link>
))

const ClothingCards: React.FC = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <h2 className="sr-only">Clothing Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {clothingItems.map((item) => (
          <ClothingCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export default memo(ClothingCards)