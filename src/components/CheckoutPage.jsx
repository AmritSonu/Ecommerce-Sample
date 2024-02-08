import { useNavigate } from "react-router-dom";
import { useCart } from "./contextAPIs/useCart";
import { validateEmail, validatePhone } from "./utils/validateInfo.js";
import { useState } from "react";

const calculateTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
};

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [showSelectItemsMessage, setShowSelectItemsMessage] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      errors.email = "Valid Email is required";
    }
    if (!formData.phone.trim() || !validatePhone(formData.phone)) {
      errors.phone = "Valid Phone Number is required";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      setShowSelectItemsMessage(true);
      return;
    }

    if (validateForm()) {
      // If form is valid, navigate to Review and Submit page
      navigate("/review-submit", {
        state: {
          product: cart,
          customerInfo: formData,
          totalPrice: calculateTotal(cart),
        },
      });
    } else {
      setShowSelectItemsMessage(false);
      console.log("Form has errors. Please fix them.");
    }
  };
  console.log(cart);

  function handleBackBtn() {
    navigate(-1);
  }

  return (
    <>
      <button
        className=" flex justify-start items-center underline font-bold py-5"
        onClick={handleBackBtn}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
          />
        </svg>
        Back
      </button>

      <div className="container mx-auto mt-8">
        <h2 className="text-3xl font-semibold mb-4">Checkout</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    className="w-16 h-16 object-cover "
                  />

                  <p>{item.projectName}</p>
                </div>

                <p>${item.price}</p>
              </div>
            ))}
            <hr className="my-4" />
            <p className="font-semibold">
              Total:
              {calculateTotal(cart)}
            </p>
          </div>
          {/* form  */}

          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Customer Information</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded-md"
                />
                {formErrors.firstName && (
                  <p className="text-red-500 text-sm">{formErrors.firstName}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded-md"
                />
                {formErrors.firstName && (
                  <p className="text-red-500 text-sm">
                    {JSON.stringify(formErrors.lastName)}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded-md"
                />
                {formErrors.firstName && (
                  <p className="text-red-500 text-sm">{formErrors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded-md"
                />
                {formErrors.firstName && (
                  <p className="text-red-500 text-sm">{formErrors.phone}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={cart.length === 0}
                className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 ${
                  cart.length === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Place Order
              </button>
            </form>
            {showSelectItemsMessage && (
              <p className="text-red-500 text-sm mt-2">
                Please select items before submitting.
              </p>
            )}
            <p className="my-5">{JSON.stringify(formErrors)}</p>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
