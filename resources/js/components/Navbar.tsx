import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

interface NavItem {
    name: string;
    href: string;
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // Debounce scroll handler to improve performance
        let timeoutId: NodeJS.Timeout;
        const handleScroll = () => {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setScrolled(window.scrollY > 50);
            }, 10); // Small delay to smooth out scroll updates
        };

        // Initial check
        setScrolled(window.scrollY > 50);
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '#services' },
        { name: 'Works', href: '#works' },
        { name: 'Resume', href: '#resume' },
        { name: 'Skills', href: '#skills' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-all duration-200 ${
                scrolled
                    ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
                    : 'bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-shrink-0"
                    >
                        <Link href="/" className="flex items-center gap-2">
                            <img src="/images/logo.svg" alt="Umesh" className="h-8 w-8" />
                            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                                Umesh
                            </span>
                        </Link>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <div className="flex items-center space-x-4">
                            {navItems.map((item) => (
                                <motion.div
                                    key={item.name}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ y: 0 }}
                                >
                                    <Link
                                        href={item.href}
                                        className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-400 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle />
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <motion.div
                                    key={item.name}
                                    whileHover={{ x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        href={item.href}
                                        className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
