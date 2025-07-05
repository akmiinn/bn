import React from 'react';
import { motion } from 'framer-motion';

const TextShimmer: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className,
}) => {
    return (
        <span className={`inline-block relative overflow-hidden ${className}`}>
            {/* Base text */}
            <span className="text-gray-500">{children}</span>

            {/* Shimmer effect */}
            <motion.span
                className="absolute inset-0 bg-clip-text text-transparent"
                style={{
                    backgroundImage: 'linear-gradient(110deg, #EAEAEA, #a3a3a3, #EAEAEA)',
                    backgroundSize: '200% 100%',
                }}
                initial={{ backgroundPosition: '200% 0' }}
                animate={{ backgroundPosition: '-200% 0' }}
                transition={{
                    duration: 5,
                    ease: 'linear',
                    repeat: Infinity,
                }}
            >
                {children}
            </motion.span>
        </span>
    );
};

export default TextShimmer;