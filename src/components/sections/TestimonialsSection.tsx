import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Solutions",
    quote: "Viper Byte Media transformed our customer support. We've seen a 200% increase in response rates!",
    rating: 5
  },
  {
    name: "Michael Chen",
    company: "Growth Marketing Co",
    quote: "The AI automation saved us 15+ hours weekly. Our team can now focus on strategy instead of repetitive tasks.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    company: "Digital First Agency",
    quote: "Their CRM integration is seamless. Lead management has never been easier.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-400">See what our clients have to say about us</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/5 rounded-xl p-8"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-400 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-emerald-500">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;