import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
    name: string;
    level: number;
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

const Skills: React.FC = () => {
    const skillCategories: SkillCategory[] = [
        {
            title: 'Frontend Development',
            skills: [
                { name: 'React', level: 80 },
                { name: 'JavaScript', level: 90 },
                { name: 'TypeScript', level: 80 },
                { name: 'Tailwind CSS', level: 95 },
                { name: 'HTML/CSS', level: 90 }
            ]
        },
        {
            title: 'Backend Development',
            skills: [
                { name: 'Laravel', level: 90 },
                { name: 'PHP', level: 80 },
                { name: 'Node.js', level: 75 },
                { name: 'MySQL', level: 85 },
                { name: 'API Design', level: 90 }
            ]
        },
        {
            title: 'Tools & Technologies',
            skills: [
                { name: 'Git', level: 90 },
                { name: 'Docker', level: 75 },
                { name: 'AWS', level: 70 },
                { name: 'Linux', level: 80 },
                { name: 'CI/CD', level: 75 }
            ]
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
        <section id="skills" className="py-20 bg-white dark:bg-gray-800">
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
                        My Skills
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                    >
                        Technologies and tools I work with
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
                >
                    <img src="/images/decorative-dots.svg" className="absolute top-0 right-0 w-48 h-48 opacity-5" alt="Decorative Dots" />
                    <img src="/images/grid-pattern.svg" className="absolute bottom-0 left-0 w-48 h-48 opacity-5" alt="Grid Pattern" />
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            variants={itemVariants}
                            className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg"
                        >
                            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
                                {category.title}
                            </h3>
                            <div className="space-y-4">
                                {category.skills.map((skill: Skill, skillIndex: number) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                {skill.name}
                                            </span>
                                            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                                                {skill.level}%
                                            </span>
                                        </div>

                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                            <motion.div
                                                className="bg-gradient-to-r from-purple-600 to-blue-500 h-2.5 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Tech Stack Icons */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <motion.h3
                        variants={itemVariants}
                        className="text-xl font-semibold mb-8 text-gray-800 dark:text-gray-100"
                    >
                        Technologies I Use
                    </motion.h3>
                    <motion.div
                        variants={containerVariants}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        {/* Replace these with actual tech icons */}
                        {['react', 'laravel', 'tailwind', 'javascript', 'typescript', 'php'].map((tech, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-900 rounded-xl shadow-lg"
                            >
                                <img
                                    src={`/images/tech/${tech}.svg`}
                                    alt={tech}
                                    className="w-10 h-10"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
