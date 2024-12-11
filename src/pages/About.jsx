import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-lg text-gray-700 text-center mb-4">
        Welcome to <span className="font-semibold">Flowbite</span>! We are a dedicated team passionate about delivering top-notch services to our customers. Our mission is to provide innovative solutions that help our clients thrive in today's fast-paced digital world.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mt-6">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p className="text-gray-600">
            Our vision is to be a leading provider of innovative, reliable, and scalable solutions in the industry. We aim to empower businesses of all sizes by making technology accessible and impactful.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">Our Values</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Customer satisfaction is our top priority.</li>
            <li>We value integrity, transparency, and teamwork.</li>
            <li>Commitment to innovation and continuous improvement.</li>
            <li>Building long-lasting relationships with our clients.</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-600">
          Have questions or need more information? Feel free to reach out to us at{" "}
          <a href="mailto:info@flowbite.com" className="text-blue-700 hover:underline">
            info@flowbite.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
