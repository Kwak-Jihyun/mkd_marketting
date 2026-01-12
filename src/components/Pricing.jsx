import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
    {
        name: "Starter",
        price: "$49",
        period: "/mo",
        features: [
            "5 Active Listings",
            "Basic Analytics",
            "CRM Integration",
            "Email Support"
        ],
        cta: "Start Free Trial",
        popular: false
    },
    {
        name: "Pro",
        price: "$99",
        period: "/mo",
        features: [
            "Unlimited Listings",
            "Advanced Analytics",
            "CRM + AI Agents",
            "Priority Support",
            "Virtual Tours"
        ],
        cta: "Get Pro Access",
        popular: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        features: [
            "Custom Solutions",
            "API Access",
            "Dedicated Manager",
            "White Labeling",
            "SSO Integration"
        ],
        cta: "Contact Sales",
        popular: false
    }
];

const Pricing = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                        Simple, Transparent <span className="text-sky-600">Pricing</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Choose the plan that fits your growth. No hidden fees. Cancel anytime.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`relative p-8 rounded-2xl border ${plan.popular
                                    ? 'border-sky-500 shadow-xl shadow-sky-100 scale-105 z-10 bg-slate-900 text-white'
                                    : 'border-slate-200 bg-white text-slate-900 hover:shadow-lg transition-shadow'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className={`text-sm ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>{plan.period}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <Check className={`w-5 h-5 ${plan.popular ? 'text-sky-400' : 'text-sky-600'}`} />
                                        <span className={plan.popular ? 'text-slate-300' : 'text-slate-600'}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular
                                    ? 'bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/25'
                                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                                }`}>
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
