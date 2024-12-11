import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <section className="text-center py-10 bg-gray-100 rounded-lg">
        <h1 className="text-5xl font-bold mb-4">Welcome to Flowbite!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Discover premium services and solutions tailored for you. Explore our offerings today!
        </p>
        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-all">
          Get Started
        </button>
      </section>

      {/* Services Section */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-3">Web Development</h3>
            <p className="text-gray-700">
              Build responsive and dynamic websites tailored to your needs.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-3">Mobile Applications</h3>
            <p className="text-gray-700">
              Create sleek and efficient mobile apps for all platforms.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
            <p className="text-gray-700">
              Enhance user experience with modern and intuitive designs.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold text-center mb-6">What Our Clients Say</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <p className="italic text-gray-600">
              "Amazing service! My website looks fantastic, and the team was so professional!"
            </p>
            <p className="text-right mt-4">- John Doe</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <p className="italic text-gray-600">
              "I’m impressed by their attention to detail and quality of work."
            </p>
            <p className="text-right mt-4">- Jane Smith</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
