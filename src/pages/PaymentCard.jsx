import React from "react";

const PaymentCard = ({ courseTitle, courseImage , coursePrice }) => {
  return (
<div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-4xl flex flex-col md:flex-row">
    {/* Course Details */}
    <div className="bg-white rounded-lg p-8 flex-1 flex flex-col justify-between">
      <h2 className="text-gray-600 font-semibold text-lg mb-6">COURSE DETAILS</h2>
      <div className="flex items-center justify-center">
        {courseImage ? (
          <img
            src={courseImage}
            alt={courseTitle}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ) : (
          <div className="bg-gray-200 shadow-inner w-full h-64 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">No Image Available</span>
          </div>
        )}
      </div>
      <h3 className=" text-gray-600 text-start text-xl font-bold">
        {courseTitle}
      </h3>
      <p className=" text-gray-600 text-start text-xl font-bold">
        {coursePrice}
        <span className="text-sm text-[#0DAFE6]">Happy Shoping</span>
      </p>
    </div>

    {/* Payment Details */}
    <div className="bg-white rounded-lg p-8 flex-1 md:ml-8 flex flex-col justify-between shadow-md mt-8 md:mt-0">
      <h2 className="text-gray-600 font-semibold text-lg mb-6">PAYMENT DETAILS</h2>

      <form className="flex flex-col justify-between flex-1">
        <div className="mb-6">
          <label
            className="block text-sm text-gray-600 mb-2"
            htmlFor="cardNumber"
          >
            Card Number
          </label>
          <input
            id="cardNumber"
            type="text"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0DAFE6]"
            placeholder="1234 5678 9012 3457"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-sm text-gray-600 mb-2"
            htmlFor="cardName"
          >
            Cardholder's Name
          </label>
          <input
            id="cardName"
            type="text"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0DAFE6]"
            placeholder="Name"
          />
        </div>
        <div className="flex space-x-6 mb-6">
          <div className="flex-1">
            <label
              className="block text-sm text-gray-600 mb-2"
              htmlFor="expiryDate"
            >
              Expiry Date
            </label>
            <input
              id="expiryDate"
              type="text"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0DAFE6]"
              placeholder="MM/YY"
            />
          </div>
          <div className="flex-1">
            <label
              className="block text-sm text-gray-600 mb-2"
              htmlFor="cvv"
            >
              CVV
            </label>
            <input
              id="cvv"
              type="text"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0DAFE6]"
              placeholder="123"
            />
          </div>
        </div>
        <button className="w-full bg-[#0DAFE6] text-white py-4 rounded-lg font-semibold hover:bg-[#0a94c5] transition-all">
          Confirm Payment
        </button>
      </form>
    </div>
  </div>
</div>


  );
};

export default PaymentCard;
