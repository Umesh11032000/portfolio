import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectThumbnail from './ui/ProjectThumbnail';

const Works = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'laravel', name: 'Laravel' },
        { id: 'react', name: 'React' },
        { id: 'node', name: 'Node.js' }
    ];

    const projects = [
        {
            id: 1,
            title: 'Realtime Chat App',
            category: 'laravel',
            description: 'A real-time one-to-one chat application built using Laravel WebSockets and Vue.js',
            link: 'https://github.com/Umesh11032000/laravel-websockets'
        },
        {
            id: 2,
            title: 'Article Project',
            category: 'laravel',
            description: 'Article management project with modern frontend using Laravel Livewire, Tailwind CSS, and Alpine.js',
            link: 'https://github.com/Umesh11032000/article-app'
        },
        {
            id: 3,
            title: 'Activity Points Leaderboard',
            category: 'laravel',
            description: 'Track and display user leaderboard based on physical activities with real-time updates',
            link: 'https://github.com/Umesh11032000/leaderboard'
        },
        {
            id: 4,
            title: 'PizzaZap',
            category: 'react',
            description: 'React-based pizza ordering app with Spoonacular API integration and dynamic cart',
            link: 'https://github.com/Umesh11032000/PizzaZap'
        },
        {
            id: 5,
            title: 'Laravel 11 Starter',
            category: 'laravel',
            description: 'Laravel 11 starter template with Bootstrap 5 and Ynex Theme, including authentication and dashboard',
            link: 'https://github.com/Umesh11032000/laravel-11-starter'
        },
        {
            id: 6,
            title: 'Realtime Video Calling',
            category: 'node',
            description: 'Real-time video calling application using WebRTC, Node.js, React, and Socket.io',
            link: 'https://github.com/Umesh11032000/Realtime-Video-Calling'
        }
    ];

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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
        <section id="works" className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-12"
                    variants={containerVariants}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                    >
                        My Works
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                    >
                        Explore my recent projects and creative works
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            variants={itemVariants}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                                selectedCategory === category.id
                                    ? 'bg-purple-600 text-white'
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30'
                            }`}
                        >
                            {category.name}
                        </motion.button>
                    ))}
                </motion.div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                whileHover={{ y: -10 }}
                                className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-lg"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <ProjectThumbnail
                                        title={project.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <h3 className="text-white text-xl font-bold mb-2">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-200 text-sm">
                                                {project.description}
                                            </p>
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block mt-4 px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
                                            >
                                                View Project
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Works;
