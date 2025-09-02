function ProductCard({ title, description, category, price }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-sm text-gray-500 mb-2">Category: {category}</p>
      <p className="text-lg font-semibold text-blue-600">₹{price}</p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;