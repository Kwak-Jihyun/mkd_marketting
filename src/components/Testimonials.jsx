import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Top Agent, Luxury Estates",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
        quote: "This platform has completely transformed how I manage my luxury listings. The analytics are a game-changer."
    },
    {
        name: "Michael Chen",
        role: "Agency Owner",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
        quote: "We've seen a 40% increase in lead conversion since switching to this SaaS. Highly recommended for any serious team."
    },
    {
        name: "Emily Davis",
        role: "Realtor",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
        quote: "The interface is beautiful and intuitive. My clients love the virtual tour features we can now offer easily."
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-slate-900 text-white relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-accent-GOLD font-medium tracking-wide uppercase mb-2 block">Success Stories</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold">
                            Trusted by the World's <br /> Best Agents
                        </h2>
                    </div>
                    <div className="flex gap-2 text-accent-GOLD">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 fill-current" />
                        ))}
                        <span className="ml-2 text-white font-medium">5.0/5 Rating</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl relative"
                        >
                            <div className="absolute -top-6 right-8 text-6xl text-slate-700 font-serif opacity-50">"</div>
                            <p className="text-slate-300 mb-8 relative z-10 leading-relaxed text-lg">
                                {testimonial.quote}
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover ring-2 ring-accent-GOLD/50"
                                />
                                <div>
                                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
