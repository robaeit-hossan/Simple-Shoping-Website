const About = () => {
    return (
        <div>
           <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Welcome to our e-commerce store! We are dedicated to providing you with the best shopping experience.
          Our mission is to offer high-quality products at affordable prices while delivering excellent customer service.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to bring you a curated selection of top-notch products that make your life easier,
              better, and more enjoyable.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why Choose Us</h2>
            <p className="text-gray-600">
              We prioritize quality, affordability, and customer satisfaction. Your happiness is our goal!
            </p>
          </div>
        </div>
      </div>
    </div> 
        </div>
    );
};

export default About;