import ProductCard from './ProductCard';

function ProductCardList() {
  // Sample data (replace with data from your backend or API later)
  const products = [
    {
      title: "JEE Physics Guide",
      description: "Comprehensive guide for JEE physics with practice questions.",
      category: "Study Material",
      price: 499,
    },
    {
      title: "GATE CS Course",
      description: "Online course with video lectures and mock tests for GATE CS.",
      category: "Online Course",
      price: 799,
    },
    {
      title: "AI Study Buddy",
      description: "AI chatbot for personalized exam preparation.",
      category: "AI Tool",
      price: 299,
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Study Resources
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            category={product.category}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductCardList;