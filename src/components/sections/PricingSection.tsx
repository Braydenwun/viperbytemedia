import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "499",
    description: "For small businesses – essential tools to get started",
    features: [
      "AI Customer Support Bot",
      "Basic CRM Integration",
      "5 Team Members",
      "Standard Support"
    ]
  },
  {
    name: "Growth",
    price: "999",
    description: "For growing teams – advanced automation and integrations",
    features: [
      "Everything in Starter",
      "Advanced Analytics",
      "15 Team Members",
      "Priority Support",
      "Custom Workflows"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations – tailored solutions at scale",
    features: [
      "Everything in Growth",
      "Unlimited Team Members",
      "24/7 Premium Support",
      "Custom AI Training",
      "Dedicated Account Manager"
    ]
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Affordable Plans That Grow with You</h2>
          <p className="text-gray-400">Choose the perfect plan for your business needs</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative bg-white/5 rounded-xl p-8 ${plan.popular ? 'border-2 border-emerald-500' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-400">/month</span>}
              </div>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-400">
                    <Check className="w-5 h-5 text-emerald-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                plan.popular
                  ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;