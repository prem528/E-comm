import React,  { useState } from 'react'
import { ChevronDown, ChevronUp, User, Mail, Phone, MapPin } from 'lucide-react'

// Define types for our data structures
type Order = {
    id: string
    date: string
    total: number
    status: 'Delivered' | 'Shipped' | 'Processing'
    items: { name: string; quantity: number; price: number }[]
  }
  
  type UserData = {
    name: string
    email: string
    phone: string
    address: string
  }
  
  // Mock data
  const userData: UserData = {
    name: 'user name',
    email: 'abc.123@example.com',
    phone: '+1 (91) 123-4567',
    address: '123 Street New Delhi, India'
  }
  
  const orderHistory: Order[] = [
    {
      id: 'ORD-001',
      date: '2024-10-20',
      total: 129.99,
      status: 'Delivered',
      items: [
        { name: 'Wireless Headphones', quantity: 1, price: 79.99 },
        { name: 'Phone Case', quantity: 2, price: 25.00 }
      ]
    },
    {
      id: 'ORD-002',
      date: '2024-10-21',
      total: 199.99,
      status: 'Shipped',
      items: [
        { name: 'Smartwatch', quantity: 1, price: 199.99 }
      ]
    },
    {
      id: 'ORD-003',
      date: '2024-10-20',
      total: 69.98,
      status: 'Processing',
      items: [
        { name: 'T-Shirt', quantity: 2, price: 19.99 },
        { name: 'Jeans', quantity: 3, price: 49.99 }
      ]
    }
  ]
  
  const Profile:React.FC = () => {
    const [expandedOrder, setExpandedOrder] = useState<string | null>(null)
  
    const toggleOrderDetails = (orderId: string) => {
      setExpandedOrder(expandedOrder === orderId ? null : orderId)
    }
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white overflow-hidden rounded-xl shadow-2xl ">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="text-2xl font-bold text-gray-900">User Profile</h1>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <User className="mr-2 h-5 w-5" />
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userData.name}</dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userData.email}</dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    Phone number
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userData.phone}</dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <MapPin className="mr-2 h-5 w-5" />
                    Address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userData.address}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-8 bg-white overflow-hidden rounded-xl shadow-2xl">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-xl font-bold text-gray-900">Order History</h2>
            </div>
            <ul className="divide-y divide-gray-200">
              {orderHistory.map((order) => (
                <li key={order.id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">Order {order.id}</span>
                      <span className="text-sm text-gray-500">{order.date}</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                          order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 
                          'bg-yellow-100 text-yellow-800'}`}>
                        {order.status}
                      </span>
                      <button
                        onClick={() => toggleOrderDetails(order.id)}
                        className="ml-4 text-sm text-blue-600 hover:text-blue-800 flex items-center"
                      >
                        {expandedOrder === order.id ? (
                          <>
                            Hide Details
                            <ChevronUp className="ml-1 h-4 w-4" />
                          </>
                        ) : (
                          <>
                            View Details
                            <ChevronDown className="ml-1 h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  {expandedOrder === order.id && (
                    <div className="mt-4 px-6">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {order.items.map((item, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-normal text-sm text-gray-900">{item.name}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.price.toFixed(2)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="mt-4 text-right">
                        <span className="text-sm font-medium text-gray-900">Total: ${order.total.toFixed(2)}</span>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  export default Profile
