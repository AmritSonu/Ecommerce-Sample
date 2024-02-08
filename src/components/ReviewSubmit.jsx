// ReviewSubmit.js
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "./contextAPIs/useCart.js";
import { useState } from "react";

const ReviewSubmit = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = useCart();
  const { customerInfo, totalPrice } = location.state;

  const handleBackBtn = () => {
    navigate(-1);
  };

  const handlePlaceOrder = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      // Navigate back to the home page
      navigate("/", { order: true });
    }, 5000);
  };

  return (
    <div className="container mx-auto mt-8">
      {isLoading ? (
        <div className=" flex items-center justify-center h-80 my-10">
          <p className="font-bold text-4xl animate-bounce">
            Placing Your Order...
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-3xl font-semibold mb-4">Review & Submit</h2>

          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <div className="flex items-center gap-1">
                  <img
                    src={item.imageUrl}
                    alt={item.projectName}
                    className="w-16 h-16 object-cover"
                  />
                  <p>{item.projectName}</p>
                </div>
                <p>${item.price}</p>
              </div>
            ))}
            <hr className="my-4" />
            <p className="font-semibold">Total: {totalPrice}</p>
          </div>

          <div className="bg-white p-4 mt-8 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Customer Information</h3>
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold mb-1"
              >
                First Name
              </label>
              <p>{customerInfo.firstName}</p>
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold mb-1"
              >
                Last Name
              </label>
              <p>{customerInfo.lastName}</p>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-1"
              >
                Email
              </label>
              <p>{customerInfo.email}</p>
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-semibold mb-1"
              >
                Phone Number
              </label>
              <p>{customerInfo.phone}</p>
            </div>
          </div>

          <div className="mt-8 flex justify-between">
            <button
              className="flex justify-start items-center underline font-bold py-5"
              onClick={handleBackBtn}
            >
              Back
            </button>
            <button
              className="bg-blue-500 text-white py-2 my-5 px-4 rounded-md hover:bg-blue-600"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ReviewSubmit;
