
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    // For 3D tilt effect - made heavier and less extreme
    const ROTATION_RANGE = 10;
    const rotateX = useSpring(useMotionValue(0), { stiffness: 250, damping: 25, mass: 0.8 });
    const rotateY = useSpring(useMotionValue(0), { stiffness: 250, damping: 25, mass: 0.8 });
    
    // For glossy glare effect - layered for more realism
    const glareX = useMotionValue(0);
    const glareY = useMotionValue(0);
    const glareOpacity = useSpring(0, { stiffness: 400, damping: 50 });

    const glareBackground = useMotionTemplate`
        radial-gradient(
            circle 400px at ${glareX}px ${glareY}px,
            rgba(255, 255, 255, 0.04) 0%,
            rgba(255, 255, 255, 0) 60%
        ),
        radial-gradient(
            circle 150px at ${glareX}px ${glareY}px,
            rgba(255, 255, 255, 0.09) 0%,
            rgba(255, 255, 255, 0) 80%
        )
    `;

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        
        const { width, height, left, top } = cardRef.current.getBoundingClientRect();
        const mouseXLocal = event.clientX - left;
        const mouseYLocal = event.clientY - top;

        // Set values for 3D tilt
        const xPct = mouseXLocal / width - 0.5;
        const yPct = mouseYLocal / height - 0.5;
        rotateX.set(yPct * -ROTATION_RANGE);
        rotateY.set(xPct * ROTATION_RANGE);

        // Set values for glare
        glareX.set(mouseXLocal);
        glareY.set(mouseYLocal);
    }

    const handleMouseEnter = () => {
        glareOpacity.set(1);
    }

    const handleMouseLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
        glareOpacity.set(0);
    }

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ 
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
            }}
            className={`
                bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 relative transition-all duration-300
                shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6),_inset_0_3px_5px_rgba(255,255,255,0.08),_inset_0_-4px_8px_rgba(0,0,0,0.8)]
                hover:border-white/30 hover:shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9),_inset_0_3px_5px_rgba(255,255,255,0.1),_inset_0_-4px_8px_rgba(0,0,0,0.8)]
                ${className}
            `}
        >
            {/* Glossy Glare Overlay */}
            <motion.div
                className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden"
                style={{
                    background: glareBackground,
                    opacity: glareOpacity,
                }}
            />

            <div style={{ transform: "translateZ(70px)", transformStyle: "preserve-3d" }} className="p-8 relative">
                 {children}
            </div>
        </motion.div>
    );
};

export default GlassCard;
