import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
    const experiences = [
        {
            period: '2024 - Present',
            title: 'Software Engineer',
            company: 'Bytes Technolab Private Limited',
            description: 'Working on cutting-edge web applications using modern technologies and frameworks.'
        },
        {
            period: '2023 - 2024',
            title: 'Software Developer',
            company: 'WebMob Technologies',
            description: 'Developed and maintained client projects focusing on web application development.'
        },
        {
            period: '2021 - 2023',
            title: 'PHP Developer',
            company: 'Rainstream Technologies',
            description: 'Built and maintained PHP-based web applications and systems.'
        }
    ];

    const education = [
        {
            period: '2017 - 2021',
            degree: 'Computer Engineering',
            institution: 'Gujarat Technological University',
            description: 'Bachelor of Engineering degree with focus on computer science and engineering principles.'
        },
        {
            period: '2015 - 2017',
            degree: 'Higher Secondary',
            institution: 'Gujarat Board of Secondary Education',
            description: 'Science stream with focus on Mathematics, Physics, and Computer Science.'
        },
        {
            period: '2013 - 2015',
            degree: 'Secondary',
            institution: 'Gujarat Board of Secondary Education',
            description: 'Completed secondary education with excellent academic performance.'
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
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900">
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
                        Resume
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                    >
                        My professional journey and educational background
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Experience Section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h3
                            variants={itemVariants}
                            className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100"
                        >
                            Work Experience
                        </motion.h3>
                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="relative pl-8 pb-8 border-l-2 border-purple-200 dark:border-purple-800 last:pb-0"
                                >
                                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-purple-600" />
                                    <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                                        {exp.period}
                                    </span>
                                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                        {exp.title}
                                    </h4>
                                    <p className="text-purple-600 dark:text-purple-400 mb-2">
                                        {exp.company}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {exp.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education Section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h3
                            variants={itemVariants}
                            className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100"
                        >
                            Education
                        </motion.h3>
                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="relative pl-8 pb-8 border-l-2 border-purple-200 dark:border-purple-800 last:pb-0"
                                >
                                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-purple-600" />
                                    <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                                        {edu.period}
                                    </span>
                                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                        {edu.degree}
                                    </h4>
                                    <p className="text-purple-600 dark:text-purple-400 mb-2">
                                        {edu.institution}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {edu.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
