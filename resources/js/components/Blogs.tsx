import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

interface MediumPost {
    title: string;
    link: string;
    pubDate: string;
    description: string;
    image: string | null;
    readTime: string;
    categories: string[];
    author: string;
}

const Blogs = () => {
    const [posts, setPosts] = React.useState<MediumPost[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch('/api/medium-posts');
                const data = await response.json();

                if (data.success) {
                    setPosts(data.posts);
                } else {
                    setError(data.message || 'Failed to fetch posts');
                }
            } catch (err) {
                console.error('Failed to fetch Medium posts:', err);
                setError('Failed to fetch posts');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const variants = {
        container: {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.1
                }
            }
        },
        item: {
            hidden: { y: 20, opacity: 0 },
            visible: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    ease: 'easeOut'
                }
            }
        }
    };

    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                    variants={variants.container}
                >
                    <motion.h2
                        variants={variants.item}
                        className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                    >
                        Latest Blog Posts
                    </motion.h2>
                    <motion.p
                        variants={variants.item}
                        className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                    >
                        Insights and tutorials about web development and design
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={variants.container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {loading ? (
                        // Loading skeleton
                        Array.from({ length: 3 }).map((_, index) => (
                            <motion.div
                                key={index}
                                variants={variants.item}
                                className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg animate-pulse"
                            >
                                <div className="h-48 bg-gray-200 dark:bg-gray-700" />
                                <div className="p-6">
                                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4" />
                                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
                                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                                </div>
                            </motion.div>
                        ))
                    ) : error ? (
                        <motion.div
                            variants={variants.item}
                            className="col-span-full text-center text-gray-600 dark:text-gray-300"
                        >
                            <p>{error}</p>
                            <p className="mt-4">
                                Meanwhile, you can visit my{' '}
                                <a
                                    href="https://medium.com/@umeshp113"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-600 dark:text-purple-400 hover:underline"
                                >
                                    Medium profile
                                </a>
                            </p>
                        </motion.div>
                    ) : (
                        posts.map((post) => (
                            <motion.article
                                key={post.link}
                                variants={variants.item}
                                whileHover={{ y: -10 }}
                                className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-shadow hover:shadow-xl"
                            >
                                <a href={post.link} target="_blank" rel="noopener noreferrer" className="block">
                                    <div className="relative h-48 overflow-hidden">
                                        {post.image ? (
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                                <svg
                                                    className="w-16 h-16 text-purple-600 dark:text-purple-400"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                                    />
                                                </svg>
                                            </div>
                                        )}
                                        {post.categories && post.categories.length > 0 && (
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 text-sm font-medium bg-purple-600 text-white rounded-full">
                                                    {post.categories[0]}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                                            <span>{post.pubDate}</span>
                                            <span className="mx-2">•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100 line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                            {post.description}
                                        </p>
                                        <div className="flex items-center justify-end">
                                            <span className="text-purple-600 dark:text-purple-400 font-medium hover:underline">
                                                Read on Medium →
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </motion.article>
                        ))
                    )}
                </motion.div>

                <motion.div
                    variants={variants.item}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://medium.com/@umeshp113"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-medium hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
                    >
                        Follow me on Medium
                        <svg
                            className="w-5 h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Blogs;
