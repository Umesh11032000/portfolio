import React, { useEffect } from 'react';
import { Head } from '@inertiajs/react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import Works from '@/components/Works';
import Resume from '@/components/Resume';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

interface Props {
    auth: {
        user: any;
    };
}

const Home: React.FC<Props> = ({ auth }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        // Smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return (
        <>
            <Head title="Portfolio" />
            <div className="font-sans relative bg-white dark:bg-gray-900">
                {/* Progress Bar */}
                <motion.div
                    className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-500 transform origin-left z-50"
                    style={{ scaleX }}
                />

                <Navbar />
                
                <main className="relative z-10">
                    <section id="home" className="min-h-screen">
                        <HeroSection />
                    </section>

                    <section id="services" className="scroll-mt-20">
                        <Services />
                    </section>

                    <section id="works" className="scroll-mt-20">
                        <Works />
                    </section>

                    <section id="resume" className="scroll-mt-20">
                        <Resume />
                    </section>

                    <section id="skills" className="scroll-mt-20">
                        <Skills />
                    </section>

                    <section id="testimonials" className="scroll-mt-20">
                        <Testimonials />
                    </section>

                    <section id="blogs" className="scroll-mt-20">
                        <Blogs />
                    </section>

                    <section id="contact" className="scroll-mt-20">
                        <Contact />
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default Home;