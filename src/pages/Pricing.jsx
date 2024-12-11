import React from "react";

const Pricing = () => {
  const plans = [
    {
      title: "Basic Plan",
      price: "$9.99/month",
      features: [
        "Access to basic features",
        "5 GB of storage",
        "Standard support",
      ],
    },
    {
      title: "Pro Plan",
      price: "$19.99/month",
      features: [
        "Access to all features",
        "50 GB of storage",
        "Priority support",
        "Customizable options",
      ],
    },
    {
      title: "Enterprise Plan",
      price: "$49.99/month",
      features: [
        "Unlimited access to features",
        "Unlimited storage",
        "24/7 dedicated support",
        "Tailored solutions",
      ],
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">Our Pricing Plans</h1>
        <p className="text-lg text-gray-700 mb-6">
          Choose the plan that fits your needs and start today!
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg border hover:shadow-xl transition-all"
          >
            <h2 className="text-2xl font-bold mb-3 text-center">
              {plan.title}
            </h2>
            <p className="text-center text-3xl font-bold text-blue-700 mb-4">
              {plan.price}
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="mr-2 text-green-500">✔</span> {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition-all">
              Choose Plan
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Pricing;
