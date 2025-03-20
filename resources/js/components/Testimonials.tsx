import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            content: "Umesh is an exceptional problem solver. His ability to tackle complex technical challenges and find elegant solutions is remarkable. Always willing to share knowledge and help others grow.",
            author: "Ravi Prajapati",
            position: "Team Lead",
            image: "/images/testimonials/peer1.png"
        },
        {
            id: 2,
            content: "Working with Umesh on our SaaS project was a great experience. His expertise in Laravel and React, combined with his understanding of cloud architecture, made him an invaluable team member.",
            author: "Amit Prajapati",
            position: "Senior Software Developer",
            image: "/images/testimonials/peer2.png"
        },
        {
            id: 3,
            content: "Umesh's dedication to writing clean, maintainable code is inspiring. He's not just a developer; he's a mentor who elevates the entire team's coding standards.",
            author: "Pruthvi Patel",
            position: "Senior Software Developer",
            image: "/images/testimonials/peer3.png"
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    return (
        <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                        Peer Recommendations
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        What fellow developers say about collaborating with me
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center px-4 z-10">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevTestimonial}
                            className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-purple-600 dark:text-purple-400"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextTestimonial}
                            className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-purple-600 dark:text-purple-400"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>
                    </div>

                    {/* Testimonials Slider */}
                    <div className="relative h-[400px] overflow-hidden">
                        <AnimatePresence initial={false} custom={currentIndex}>
                            <motion.div
                                key={currentIndex}
                                custom={currentIndex}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);
                                    if (swipe < -swipeConfidenceThreshold) {
                                        nextTestimonial();
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        prevTestimonial();
                                    }
                                }}
                                className="absolute w-full"
                            >
                                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
                                    <div className="flex flex-col items-center text-center">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.2 }}
                                            className="w-20 h-20 mb-6 rounded-full overflow-hidden border-4 border-purple-100 dark:border-purple-900"
                                        >
                                            <img
                                                src={testimonials[currentIndex].image}
                                                alt={testimonials[currentIndex].author}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                        <motion.blockquote
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6"
                                        >
                                            "{testimonials[currentIndex].content}"
                                        </motion.blockquote>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                                {testimonials[currentIndex].author}
                                            </p>
                                            <p className="text-purple-600 dark:text-purple-400">
                                                {testimonials[currentIndex].position}
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center space-x-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'w-8 bg-purple-600'
                                        : 'bg-gray-300 dark:bg-gray-700'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
