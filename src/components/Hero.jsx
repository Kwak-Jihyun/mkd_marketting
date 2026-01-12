import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Info } from 'lucide-react';
import landmarkImg from '../assets/landmark.png';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                    src={landmarkImg}
                    alt="Mok-dong Landmark"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-20">
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-accent-GOLD/20 border border-accent-GOLD/50 text-accent-GOLD text-sm font-medium tracking-wide mb-6">
                            목동역 역세권 도심 공공주택 복합사업
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight drop-shadow-lg">
                            목동의 새로운 <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white">
                                49층 스카이라인
                            </span>
                        </h1>
                        <p className="text-lg text-slate-100 max-w-xl leading-relaxed mt-6 drop-shadow-md font-medium">
                            낙후된 저층 주거지에서 벗어나, 하이페리온과 어깨를 나란히 할 하이엔드 랜드마크로 재탄생합니다.
                            지금이 변화를 위한 골든타임입니다.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-wrap gap-4"
                    >
                        <button className="flex items-center gap-2 px-8 py-4 bg-accent-GOLD hover:bg-yellow-600 text-slate-900 rounded-full font-bold transition-all shadow-lg shadow-yellow-500/25 group">
                            지금 바로 동의하기
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 hover:bg-white/20 text-white rounded-full font-medium transition-all backdrop-blur-md">
                            <Info className="w-5 h-5" />
                            사업 개요 보기
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="pt-8 flex items-center gap-8 text-slate-200 text-sm backdrop-blur-sm p-4 rounded-xl bg-black/20 inline-flex border border-white/10"
                    >
                        <div>
                            <span className="block text-2xl font-bold text-white">49층</span>
                            <span>랜드마크</span>
                        </div>
                        <div className="h-8 w-px bg-white/20" />
                        <div>
                            <span className="block text-2xl font-bold text-white">3년</span>
                            <span>착공 목표</span>
                        </div>
                        <div className="h-8 w-px bg-white/20" />
                        <div>
                            <span className="block text-2xl font-bold text-white">1군</span>
                            <span>브랜드 시공</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
