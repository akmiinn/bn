import React, { useState } from 'react';
import { Page } from '../types';
import { NAV_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
    activePage: Page;
}

const Navbar: React.FC<NavbarProps> = ({ activePage }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            if (id === 'home') {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                section.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
        setMenuOpen(false); // Close menu on navigation
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 p-4">
                <div className="max-w-7xl mx-auto bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl flex items-center justify-between p-4">
                    <a 
                        href="#home"
                        onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                        className="text-2xl font-extrabold text-[#EAEAEA] cursor-pointer tracking-wider text-glossy"
                        aria-label="Go to home page"
                    >
                        B.N ENT.
                    </a>
                    
                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-1 relative">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.id)}
                                className={`px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors relative ${
                                    activePage === item.name ? 'text-white' : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                {item.name}
                                {activePage === item.name && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                                        layoutId="underline"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-white z-50 relative" aria-label="Toggle menu">
                            <motion.div animate={isMenuOpen ? "open" : "closed"}>
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <motion.path
                                        variants={{ closed: { d: "M 2 6 L 22 6" }, open: { d: "M 4 18 L 20 2" } }}
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    />
                                    <motion.path
                                        d="M 2 12 L 22 12"
                                        variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
                                        transition={{ duration: 0.1 }}
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    />
                                    <motion.path
                                        variants={{ closed: { d: "M 2 18 L 22 18" }, open: { d: "M 4 2 L 20 18" } }}
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    />
                                </svg>
                            </motion.div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 z-40"
                >
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => scrollToSection(item.id)}
                            className={`text-4xl font-bold uppercase tracking-wider transition-colors ${
                                activePage === item.name ? 'text-white' : 'text-gray-500'
                            }`}
                        >
                            {item.name}
                        </button>
                    ))}
                </motion.div>
            )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;