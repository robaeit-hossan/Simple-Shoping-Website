const Home = () => {
  return (
    <div>
    <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-12 px-6 mt-5 rounded text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our E-Commerce Store!</h1>
      <p className="text-xl mb-6">
        Discover amazing products at unbeatable prices. Your shopping journey starts here.
      </p>
      <a
        href="/posts"
        className="bg-yellow-500 text-black py-2 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300"
      >
        Start Shopping
      </a>
    </div>    
    </div>
  );
};

export default Home;