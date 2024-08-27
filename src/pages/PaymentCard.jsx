import React from "react";

const PaymentCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm">
        <h2 className="text-gray-600 font-medium mb-6">PAYMENT DETAILS</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-2" htmlFor="cardNumber">
              Card Number
            </label>
            <input
              id="cardNumber"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0DAFE6]"
              placeholder="1234 5678 9012 3457"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-2" htmlFor="cardName">
              Cardholder's Name
            </label>
            <input
              id="cardName"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0DAFE6]"
              placeholder="Name"
            />
          </div>
          <div className="flex space-x-4 mb-6">
            <div className="flex-1">
              <label className="block text-sm text-gray-600 mb-2" htmlFor="expiration">
                Expiration
              </label>
              <input
                id="expiration"
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-"
                placeholder="MM/YYYY"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-600 mb-2" htmlFor="cvv">
                CVV
              </label>
              <input
                id="cvv"
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                placeholder="•••"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
        
            <button
              type="submit"
              className="bg-[#0DAFE6] text-white rounded-full p-4 shadow-lg hover:bg-[#0DAFE6] focus:outline-none focus:ring-2 focus:ring-[#0DAFE6]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentCard;
