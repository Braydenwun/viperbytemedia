import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white text-center mb-16"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 rounded-xl p-8"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-400 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-emerald-500">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;