import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const services: Service[] = [
        {
            icon: "/images/services/web.svg",
            title: 'SaaS Development',
            description: 'Building scalable SaaS platforms with subscription management, multi-tenancy, and cloud infrastructure.'
        },
        {
            icon: "/images/services/backend.svg",
            title: 'Full-Stack Solutions',
            description: 'Delivering end-to-end web applications using React, Laravel, and modern cloud technologies.'
        },
        {
            icon: "/images/services/api.svg",
            title: 'API Integration',
            description: 'Implementing third-party integrations and building robust APIs for seamless data exchange.'
        },
        {
            icon: "/images/services/database.svg",
            title: 'System Architecture',
            description: 'Designing scalable architectures with microservices, caching, and optimized database structures.'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                    variants={containerVariants}
                >
                    <motion.h2 
                        variants={itemVariants}
                        className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                    >
                        My Services
                    </motion.h2>
                    <motion.p 
                        variants={itemVariants}
                        className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                    >
                        Delivering high-quality solutions tailored to your needs
                    </motion.p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
                >
                    <img src="/images/decorative-dots.svg" className="absolute top-0 right-0 w-48 h-48 opacity-5" />
                    <img src="/images/grid-pattern.svg" className="absolute bottom-0 left-0 w-48 h-48 opacity-5" />
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                                <img src={service.icon} alt={service.title} className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
