// ProductListing.js
import { useNavigate } from "react-router-dom";
import { shoesData } from "./exampleProductAPI.js";
import { useCart } from "./contextAPIs/useCart.js";

const ProductListing = () => {
  const { addToCart, isInCart } = useCart();
  const navigate = useNavigate();

  const handleBuyProduct = (product) => {
    addToCart(product);
    navigate("/checkout");

    console.log(`Product ${product.name} added to the cart`);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4">Product Listing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {shoesData.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-md shadow-md">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-32 object-cover mb-4"
            />
            <p className="text-lg font-semibold mb-2">{product.name}</p>
            <p className="text-gray-600">${product.price}</p>
            <p>{product.productInfo} </p>
            <button
              disabled={isInCart(product.id)}
              onClick={() => handleBuyProduct(product)}
              className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded-md ${
                isInCart(product.id)
                  ? "opacity-50 cursor-not-allowed bg-slate-500"
                  : ""
              }`}
            >
              {isInCart(product.id) ? "In Cart" : "Buy"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
