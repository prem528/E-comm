import React, { useState } from 'react';

export default function PaymentForm() {
  const [cardNumber, setCardNumber] = useState('');

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\s/g, '');
    if (value.length <= 16 && /^\d*$/.test(value)) {
      value = value.match(/.{1,4}/g)?.join(' ') || '';
      setCardNumber(value);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-8 p-6 bg-gray-100">
      <form className="w-full max-w-4xl p-8 bg-white rounded-xl shadow-2xl">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-blue-500 mb-4">Billing Address</h3>
            
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Full Name:</label>
              <input type="text" id="name" placeholder="Enter your full name" required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5e8f94]" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email:</label>
              <input type="email" id="email" placeholder="Enter email address" required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5e8f94]" />
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-700">Address:</label>
              <input type="text" id="address" placeholder="Enter address" required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5e8f94]" />
            </div>

            <div className="mb-4">
              <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-700">City:</label>
              <input type="text" id="city" placeholder="Enter city" required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5e8f94]" />
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-700">State:</label>
                <input type="text" id="state" placeholder="Enter state" required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5e8f94]" />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label htmlFor="zip" className="block mb-2 text-sm font-medium text-gray-700">Zip Code:</label>
                <input type="text" id="zip" placeholder="123 456" required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5e8f94]" />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-3">
            <h3 className="text-xl font-semibold text-blue-500 mb-4">Payment</h3>
            
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">Card Accepted:</label>
              <img src="https://i.ibb.co/X38b5PF/card-img.png" alt="Accepted Cards" className="h-8 mt-1 filter drop-shadow" />
            </div>

            <div className="mb-4">
              <label htmlFor="cardName" className="block mb-2 text-sm font-medium text-gray-700">Name On Card:</label>
              <input type="text" id="cardName" placeholder="Enter card name" required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5e8f94]" />
            </div>

            <div className="mb-4">
              <label htmlFor="cardNum" className="block mb-2 text-sm font-medium text-gray-700">Credit Card Number:</label>
              <input type="text" id="cardNum" placeholder="1111 2222 3333 4444" required
                value={cardNumber} onChange={handleCardNumberChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5e8f94]" />
            </div>

            <div className="mb-4">
              <label htmlFor="expMonth" className="block mb-2 text-sm font-medium text-gray-700">Exp Month:</label>
              <select id="expMonth" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5e8f94]">
                <option value="">Choose month</option>
                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month) => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label htmlFor="expYear" className="block mb-2 text-sm font-medium text-gray-700">Exp Year:</label>
                <select id="expYear" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5e8f94]">
                  <option value="">Choose Year</option>
                  {[2023, 2024, 2025, 2026, 2027].map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label htmlFor="cvv" className="block mb-2 text-sm font-medium text-gray-700">CVV:</label>
                <input type="text" id="cvv" placeholder="1234" required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5e8f94]" />
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="w-full py-3 px-4 bg-blue-400 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300 ease-in-out">
          Proceed to Checkout
        </button>
      </form>
    </div>
  );
}