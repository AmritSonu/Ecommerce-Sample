// const validateForm = () => {
//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));
//   };

//   const validateForm = () => {
//     const errors = {};
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       // If form is valid, navigate to Review and Submit page
//       navigate("/review-submit", {
//         state: { product: cart, customerInfo: formData },
//       });
//     } else {
//       console.log("Form has errors. Please fix them.");
//     }
//   };

//   function handleBackBtn() {
//     navigate(-1);
//   }

//   return (
//     <>
//       <button
//         className="flex justify-start items-center underline font-bold py-5"
//         onClick={handleBackBtn}
//       >
//         Back
//       </button>

//       <div className="container mx-auto mt-8">
//         <h2 className="text-3xl font-semibold mb-4">Checkout</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="bg-white p-4 rounded-md shadow-md">
//             <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
//             {/* ... (unchanged) */}
//           </div>
//           <div className="bg-white p-4 rounded-md shadow-md">
//             <h3 className="text-xl font-semibold mb-4">Customer Information</h3>
//             <form onSubmit={handleSubmit}>
//               {/* ... (unchanged) */}
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//               >
//                 Place Order
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export { validateForm };
