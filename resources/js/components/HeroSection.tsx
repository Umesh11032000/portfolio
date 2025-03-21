import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-minimal.css';

const HeroSection = () => {
    const [odometerValue1, setOdometerValue1] = useState(0);
    const [odometerValue2, setOdometerValue2] = useState(0);
    const [odometerValue3, setOdometerValue3] = useState(0);
    const [odometerValue4, setOdometerValue4] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOdometerValue1(5);
            setOdometerValue2(20);
            setOdometerValue3(15);
            setOdometerValue4(100);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,#6366f1_1px,transparent_0)] dark:opacity-[0.02] [background-size:24px_24px]"></div>
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20"
                        animate={{
                            x: [0, 100, 0],
                            y: [0, 50, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            delay: i * 2,
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            background: `hsl(${Math.random() * 360}, 70%, 50%)`,
                            width: '400px',
                            height: '400px',
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto flex-grow flex items-center px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="text-left lg:order-1 order-2 max-w-xl mx-auto lg:mx-0">
                        <motion.div
                            variants={itemVariants}
                            className="inline-block mb-6"
                        >
                            <span className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium flex items-center gap-2 shadow-sm">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                                Software Architect & Innovation Engineer
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                        >
                            <span className="block mb-2">Hi, I'm</span>
                            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Umesh</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed"
                        >
                            Crafting innovative digital solutions with cutting-edge technologies. Transforming ideas into elegant, scalable, and efficient applications that drive business success.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                            >
                                Get in Touch
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="#works"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-full border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 font-medium hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all flex items-center justify-center gap-2 group"
                            >
                                View My Work
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </motion.a>
                        </motion.div>
                    </div>

                    <motion.div 
                        variants={itemVariants}
                        className="relative lg:order-2 order-1 flex justify-center lg:justify-end mt-8 lg:mt-06"
                        style={{marginTop: 'clamp(5rem, 10vw, 5rem)'}}
                    >
                        <div className="relative w-32 h-32 md:w-64 md:h-64 lg:w-[360px] lg:h-[360px]">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 animate-pulse blur-3xl opacity-30"></div>
                            <motion.div 
                                className="relative rounded-full overflow-hidden border-4 md:border-8 border-white dark:border-gray-800 shadow-xl lg:shadow-2xl"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img 
                                    src="/images/profile-pic.jpg"
                                    alt="Umesh Prajapati"
                                    className="w-32 h-32 md:w-64 md:h-64 lg:w-[360px] lg:h-[360px] object-cover"
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>

            {/* Fun Facts Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <motion.div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
                        <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                            <Odometer value={odometerValue1} format="d" duration={1000} />
                            <span className="text-purple-600 dark:text-purple-400">+</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
                        <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                            <Odometer value={odometerValue2} format="d" duration={1000} />
                            <span className="text-purple-600 dark:text-purple-400">+</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
                        <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                            <Odometer value={odometerValue3} format="d" duration={1000} />
                            <span className="text-purple-600 dark:text-purple-400">+</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">Happy Clients</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
                        <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                            <Odometer value={odometerValue4} format="d" duration={1000} />
                            <span className="text-purple-600 dark:text-purple-400">%</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">Client Satisfaction</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
