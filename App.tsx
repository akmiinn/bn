import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Artist, Page } from './types';
import { ARTISTS, NAV_ITEMS } from './constants';
import Navbar from './components/Navbar';
import AnimatedWords from './components/AnimatedWords';
import ArtistDetailModal from './components/ArtistDetailModal';
import Background from './components/Background';
import GlassCard from './components/GlassCard';
import TextShimmer from './components/TextShimmer';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

// --- Page Components ---

// Scroll down indicator for the hero section
const ScrollDownIndicator = () => (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#landscape" aria-label="Scroll to next section">
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
                <svg className="w-8 h-8 text-white/50 hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </motion.div>
        </a>
    </div>
);

// 1. Hero Section (The initial view)
const HeroSection: React.FC = () => (
    <section id="home" className="h-screen flex flex-col items-center justify-center text-center px-4 relative">
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-[#EAEAEA] text-glossy">
            <TextShimmer>B.N Entertainment</TextShimmer>
        </h1>
        <AnimatedWords
            text="The Future of Entertainment is Here."
            className="mt-6 text-xl md:text-3xl text-gray-300 font-medium text-glossy"
        />
        <ScrollDownIndicator />
    </section>
);

// 2. Landscape Photo Section
const LandscapeSection = () => (
    <section id="landscape" className="h-[50vh] md:h-[70vh] w-full px-4" aria-hidden="true">
         <motion.div
            className="h-full w-full rounded-3xl bg-cover bg-center shadow-2xl"
            style={{ backgroundImage: `url(group.jpg)` }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="h-full w-full bg-black/30 rounded-3xl"></div>
        </motion.div>
    </section>
);


// 3. Vision Section (Appears on scroll)
const VisionSection: React.FC = () => (
     <section id="vision" className="min-h-screen flex flex-col items-center justify-center pt-12 pb-24 px-4">
        <motion.div
            className="max-w-4xl w-full mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
        >
            <GlassCard>
                <h2 className="text-2xl md:text-3xl font-bold text-[#EAEAEA] mb-4 text-glossy">Our Vision</h2>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                    B.N Entertainment was founded on the principle of nurturing unique talents and bringing groundbreaking entertainment to the global stage. We believe in the power of storytelling through music and performance, creating unforgettable experiences that connect artists and fans. Our history is one of passion, perseverance, and a relentless pursuit of excellence. We are more than a label; we are a family dedicated to shaping the future of culture.
                </p>
            </GlassCard>
        </motion.div>
    </section>
);


const ArtistsPage: React.FC<{ onSelectArtist: (artist: Artist) => void }> = ({ onSelectArtist }) => (
    <section id="artists" className="min-h-screen flex flex-col items-center justify-center py-24 px-4">
        <div className="w-full max-w-7xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-[#EAEAEA] uppercase tracking-wider text-glossy">
                Our Artists
            </h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {ARTISTS.map((artist, index) => (
                    <motion.div
                        key={artist.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onClick={() => onSelectArtist(artist)}
                        className="cursor-pointer bg-black/20 rounded-2xl overflow-hidden group border border-white/10 shadow-lg hover:shadow-2xl transition-shadow"
                    >
                        <div className="overflow-hidden">
                            <img src={artist.imageUrl} alt={artist.stageName} className="w-full h-56 sm:h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl md:text-2xl font-bold text-[#EAEAEA] text-glossy">{artist.stageName}</h3>
                            <p className="text-gray-400 text-sm md:text-base">{artist.realName}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const ActivitiesPage: React.FC = () => (
    <section id="activities" className="min-h-screen flex flex-col items-center justify-center py-24 px-4">
        <div className="w-full max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-[#EAEAEA] uppercase tracking-wider text-glossy">Our Activities</h1>
            <div className="space-y-8">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
                    <GlassCard>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#EAEAEA] mb-3 text-glossy">Global Tours & Concerts</h2>
                        <p className="text-gray-300 text-base md:text-lg">We produce world-class concerts and fan meetings, bringing our artists closer to their international fanbase. Our events are known for their high production value and immersive experiences.</p>
                    </GlassCard>
                </motion.div>
                 <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 }}>
                    <GlassCard>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#EAEAEA] mb-3 text-glossy">Music Production</h2>
                        <p className="text-gray-300 text-base md:text-lg">From composing to final mastering, our in-house production team works with top-tier producers and songwriters to create chart-topping hits that define industry trends.</p>
                    </GlassCard>
                </motion.div>
                 <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2 }}>
                    <GlassCard>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#EAEAEA] mb-3 text-glossy">Content Creation</h2>
                        <p className="text-gray-300 text-base md:text-lg">Beyond music, we create a wide range of digital content, including reality shows, vlogs, and documentary series, offering fans a deeper look into the lives of our artists.</p>
                    </GlassCard>
                </motion.div>
            </div>
        </div>
    </section>
);

const CareersPage: React.FC = () => (
    <section id="careers" className="min-h-screen flex flex-col items-center justify-center py-24 px-4">
        <div className="w-full max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-[#EAEAEA] uppercase tracking-wider text-glossy">Join Our Family</h1>
            <div className="space-y-8">
                 <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
                    <GlassCard>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#EAEAEA] mb-3 text-glossy">Become a B.N Artist</h2>
                        <p className="text-gray-300 mb-4 text-base md:text-lg">Do you have what it takes to be the next star? We are always searching for passionate and unique individuals with extraordinary talent. If you believe you have the potential, we want to hear from you.</p>
                        <h3 className="text-xl font-semibold text-[#EAEAEA] mb-3 text-glossy">How to Audition:</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 text-base md:text-lg">
                            <li>Prepare a 2-minute video showcasing your primary talent (singing, rapping, or dancing).</li>
                            <li>Include a brief self-introduction in English or Burmese.</li>
                            <li>Upload your video to a streaming platform (YouTube, Vimeo) and email the link to <a href="mailto:auditions@bn-entertainment.com" className="text-[#EAEAEA] hover:text-white transition-colors font-semibold underline">auditions@bn-entertainment.com</a>.</li>
                        </ul>
                    </GlassCard>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 }}>
                    <GlassCard>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#EAEAEA] mb-3 text-glossy">Corporate Positions</h2>
                        <p className="text-gray-300 text-base md:text-lg">We are also looking for talented professionals to join our corporate team in marketing, A&R, production, and management. Please send your resume and cover letter to <a href="mailto:careers@bn-entertainment.com" className="text-[#EAEAEA] hover:text-white transition-colors font-semibold underline">careers@bn-entertainment.com</a>.</p>
                    </GlassCard>
                </motion.div>
            </div>
        </div>
    </section>
);


const ContactPage: React.FC = () => (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-24 px-4">
        <div className="w-full max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-[#EAEAEA] uppercase tracking-wider text-glossy">Get In Touch</h1>
             <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}>
                <GlassCard>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Full Name</label>
                            <input type="text" id="name" className="w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg py-3 px-4 text-[#EAEAEA] placeholder-gray-400 focus:ring-2 focus:ring-white/50 focus:outline-none transition-all"/>
                        </div>
                         <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Email Address</label>
                            <input type="email" id="email" className="w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg py-3 px-4 text-[#EAEAEA] placeholder-gray-400 focus:ring-2 focus:ring-white/50 focus:outline-none transition-all"/>
                        </div>
                         <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Message</label>
                            <textarea id="message" rows={5} className="w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg py-3 px-4 text-[#EAEAEA] placeholder-gray-400 focus:ring-2 focus:ring-white/50 focus:outline-none transition-all"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-white/10 border border-white/20 text-[#EAEAEA] font-bold py-4 px-4 rounded-lg hover:bg-white/20 transition-colors duration-300 text-lg uppercase tracking-wider backdrop-blur-sm">
                            Send Message
                        </button>
                    </form>
                </GlassCard>
            </motion.div>
        </div>
    </section>
);


const App: React.FC = () => {
    const [activePage, setActivePage] = useState<Page>('Home');
    const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

    const observer = useRef<IntersectionObserver | null>(null);

    const handleSelectArtist = useCallback((artist: Artist) => {
        setSelectedArtist(artist);
    }, []);

    const handleCloseModal = useCallback(() => {
        setSelectedArtist(null);
    }, []);

    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                     // If vision or landscape section is in view, treat it as 'Home'
                    if (id === 'vision' || id === 'landscape' || id === 'home') {
                        setActivePage('Home');
                        return;
                    }

                    const navItem = NAV_ITEMS.find(item => item.id === id);
                    if (navItem) {
                        setActivePage(navItem.name);
                    }
                }
            });
        };

        observer.current = new IntersectionObserver(handleIntersection, {
            rootMargin: '-40% 0px -60% 0px',
        });

        const sections = document.querySelectorAll('section');
        sections.forEach(section => observer.current?.observe(section));

        return () => {
            sections.forEach(section => observer.current?.unobserve(section));
        };
    }, []);
    
    return (
        <>
            <Background />
            <div className="relative z-10">
                <Navbar activePage={activePage} />
                <main>
                    <HeroSection />
                    <LandscapeSection />
                    <VisionSection />
                    <ArtistsPage onSelectArtist={handleSelectArtist} />
                    <ActivitiesPage />
                    <CareersPage />
                    <ContactPage />
                </main>
                <Footer />
                <AnimatePresence>
                    {selectedArtist && (
                        <ArtistDetailModal 
                            artist={selectedArtist} 
                            onClose={handleCloseModal} 
                        />
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default App;
