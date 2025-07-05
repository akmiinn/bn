import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedWordsProps {
    text: string;
    className?: string;
    stagger?: number;
}

const containerVariants: Variants = {
    hidden: {},
    visible: (i = 1) => ({
        transition: { staggerChildren: i, delayChildren: 0.1 },
    }),
};

const wordVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        transition: { type: 'spring', damping: 12, stiffness: 200 },
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', damping: 12, stiffness: 200 },
    },
};

const AnimatedWords: React.FC<AnimatedWordsProps> = ({ text, className, stagger = 0.05 }) => {
    const words = text.split(' ');

    return (
        <motion.p
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            custom={stagger}
        >
            {words.map((word, index) => (
                <motion.span key={index} variants={wordVariants} className="inline-block mr-[0.25em]">
                    {word}
                </motion.span>
            ))}
        </motion.p>
    );
};

export default AnimatedWords;