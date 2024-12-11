import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        We would love to hear from you! Please fill out the form below or use the contact details provided to get in touch.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mt-6">

        <div>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-600 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-600 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:info@flowbite.com" className="text-blue-700 hover:underline">
                info@flowbite.com
              </a>
            </li>
            <li>
              <span className="font-semibold">Phone:</span> +1 (123) 456-7890
            </li>
            <li>
              <span className="font-semibold">Address:</span> 123 Main Street, Anytown, USA
            </li>
            <li>
              <span className="font-semibold">Working Hours:</span> Monday - Friday, 9:00 AM - 5:00 PM
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
