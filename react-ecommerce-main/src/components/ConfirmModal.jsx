import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ConfirmModal = ({
  setIsConfirmModalOpen,
  setCartItems,
  setIsModalOpen,
}) => {
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "address") {
      setAddress(value);
    } else if (name === "pinCode") {
      setPinCode(value);
    }
  };
  const handlePlaceOrder = () => {
    console.log("handlePlaceOrder running");

    setIsModalOpen(true);
    setIsConfirmModalOpen(false);
    setTimeout(() => {
      navigate("/order-placed");
      setIsModalOpen(false);
      setCartItems([]);
    }, 3000);
  };

  const handleConfirmClick = () => {
    if (!address || !pinCode) {
      alert("Please fill out both address and pin code.");
      return;
    }
    handlePlaceOrder();
    setIsConfirmModalOpen(false);
  };

  return (
    <>
      <div className="fixed left-0 px-4 md:px-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10 z-50">
        <div className="max-h-full pb-10 w-full max-w-xl overflow-y-auto rounded-md px-4 bg-white">
          <div className="w-full h-[350px] flex flex-col m-auto items-center">
            <div className="flex m-auto items-center mb-4">
              <span className="text-xl text-gray-800 font-bold tracking-wider">
                Confirm Your Order
              </span>
            </div>

            <div className="w-full mb-4">
              <label
                htmlFor="address"
                className="block text-sm text-gray-600 mb-2"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={handleInputChange}
                placeholder="Enter your address"
                className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div className="w-full mb-6">
              <label
                htmlFor="pinCode"
                className="block text-sm text-gray-600 mb-2"
              >
                Pin Code
              </label>
              <input
                type="text"
                id="pinCode"
                name="pinCode"
                value={pinCode}
                onChange={handleInputChange}
                placeholder="Enter your pin code"
                className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div className="space-x-4">
              <button
                onClick={() => setIsConfirmModalOpen(false)}
                className="bg-gray-500 text-white px-4 font-semibold py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmClick}
                className="bg-sky-500 text-white px-4 py-2 font-semibold rounded-md"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmModal;
