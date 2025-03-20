import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from '@inertiajs/react';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Contact: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post('/contact', {
            onSuccess: () => {
                setSubmitted(true);
                reset();
            }
        });
    };

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

    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Email',
            info: 'umeshprajapati1317@gmail.com',
            link: 'mailto:umeshprajapati1317@gmail.com'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: 'Phone',
            info: '+91 78747 75225',
            link: 'tel:+917874775225'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'Location',
            info: 'Ahmedabad, Gujrat',
            link: 'https://www.google.com/maps/place/Ahmedabad,+Gujrat/@23.0295013,72.5257152,13z/data=!3m1!4b1'
        }
    ];

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
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
                        Get in Touch
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                    >
                        Have a project in mind? Let's work together!
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-1 space-y-6"
                    >
                        {contactInfo.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.link}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
                            >
                                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {item.info}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <motion.form
                            variants={itemVariants}
                            onSubmit={handleSubmit}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 transition-colors"
                                        required
                                    />
                                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 transition-colors"
                                        required
                                    />
                                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={data.subject}
                                    onChange={e => setData('subject', e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 transition-colors"
                                    required
                                />
                                {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    value={data.message}
                                    onChange={e => setData('message', e.target.value)}
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 transition-colors resize-none"
                                    required
                                />
                                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={processing}
                                className={`w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium ${
                                    processing ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-lg'
                                } transition-all`}
                            >
                                {processing ? 'Sending...' : 'Send Message'}
                            </motion.button>
                        </motion.form>

                        {/* Success Message */}
                        <AnimatePresence>
                            {submitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg"
                                >
                                    Thank you for your message! I'll get back to you soon.
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
