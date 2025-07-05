
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Artist } from '../types';
import GlassCard from './GlassCard';

interface ArtistDetailModalProps {
    artist: Artist;
    onClose: () => void;
}

const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

const modalVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', damping: 25, stiffness: 200, delay: 0.1 } },
    exit: { scale: 0.9, opacity: 0, transition: { duration: 0.2 } },
};

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="text-lg md:text-xl font-bold text-[#EAEAEA] mb-4 border-b border-white/20 pb-2 uppercase tracking-wider text-glossy">{children}</h3>
);

const InfoRow: React.FC<{label: string, value: string | undefined}> = ({label, value}) => (
    value ? (
        <div>
           <strong className="text-gray-400 uppercase tracking-wider text-xs">{label}</strong>
           <p className="text-[#EAEAEA] text-base">{value}</p>
       </div>
    ) : null
);

const Socials: React.FC<{ artist: Artist }> = ({ artist }) => (
    <div className="flex items-center space-x-6 mt-4">
        <a href={artist.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            <span className="text-sm font-medium">Instagram</span>
        </a>
        {artist.facebookUrl && (
             <a href={artist.facebookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                <span className="text-sm font-medium">Facebook</span>
            </a>
        )}
    </div>
);


const ArtistDetailModal: React.FC<ArtistDetailModalProps> = ({ artist, onClose }) => {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
        >
            <motion.div
                 variants={modalVariants}
                 onClick={(e) => e.stopPropagation()}
                 className="w-full max-w-4xl max-h-[90vh] relative"
            >
                <GlassCard className="!p-0 overflow-hidden">
                    <div className="max-h-[85vh] overflow-y-auto">
                         <div className="grid md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.5fr)]">
                            {/* Left Column */}
                            <div className="flex flex-col p-4 md:p-8 bg-black/10">
                                <img src={artist.imageUrl} alt={artist.stageName} className="w-full h-auto object-cover rounded-xl shadow-2xl mb-6" />
                                <h2 className="text-3xl md:text-4xl font-bold text-[#EAEAEA] text-glossy text-center">{artist.stageName}</h2>
                                <div className="text-center mt-2 space-y-1">
                                    <p className="text-gray-300 text-sm md:text-base"><strong className="font-medium text-gray-400">Birth Name:</strong> {artist.realName}</p>
                                    {artist.englishName && <p className="text-gray-300 text-sm md:text-base"><strong className="font-medium text-gray-400">English Name:</strong> {artist.englishName}</p>}
                                    <p className="text-[#EAEAEA] font-semibold pt-2 text-sm md:text-base">{artist.positions.join(', ')}</p>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="text-gray-300 p-4 md:p-8 space-y-6">
                                <div>
                                    <SectionTitle>About {artist.stageName}</SectionTitle>
                                    <p className="mb-6 leading-relaxed text-base">{artist.about}</p>
                                </div>
                                
                                <div>
                                    <SectionTitle>Profile</SectionTitle>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                        <InfoRow label="Birthday" value={artist.birthday} />
                                        <InfoRow label="Zodiac Sign" value={artist.zodiacSign} />
                                        <InfoRow label="Chinese Zodiac" value={artist.chineseZodiacSign} />
                                        <InfoRow label="Height" value={artist.height} />
                                        <InfoRow label="Weight" value={artist.weight} />
                                        <InfoRow label="Blood Type" value={artist.bloodType} />
                                        <InfoRow label="MBTI" value={artist.mbti} />
                                        <InfoRow label="Rep. Animal" value={artist.representativeAnimal} />
                                    </div>
                                </div>

                                <div>
                                    <SectionTitle>Released Tracks</SectionTitle>
                                    <ul className="space-y-2 text-base">
                                        {artist.releasedSongs.map((song, index) => (
                                            <li key={index} className="flex items-center text-[#EAEAEA]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-music mr-3 text-gray-400 flex-shrink-0"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                                                <span>{song}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <SectionTitle>Follow</SectionTitle>
                                    <Socials artist={artist} />
                                </div>
                            </div>
                        </div>
                    </div>
                </GlassCard>
                <button onClick={onClose} className="absolute top-2 right-2 md:top-4 md:right-4 text-white/50 hover:text-white transition-colors z-20 bg-black/30 rounded-full p-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </motion.div>
        </motion.div>
    );
};


export default ArtistDetailModal;
