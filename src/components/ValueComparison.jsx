import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Home, ArrowRight } from 'lucide-react';

const ValueComparison = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                        평생 한 번뿐인 <br /><span className="text-sky-600">자산 증식의 기회</span>
                    </h2>
                    <p className="text-slate-600 text-lg break-keep">
                        오래된 빌라를 소유하시겠습니까, 아니면 30억 가치의 랜드마크 아파트를 소유하시겠습니까?
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto items-center">
                    {/* Current State */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full bg-white p-8 rounded-3xl border border-slate-200 grayscale text-slate-500 relative overflow-hidden"
                    >
                        <div className="absolute top-4 right-4 text-xs font-bold border border-slate-300 px-2 py-1 rounded uppercase">Current</div>
                        <div className="mb-8 flex justify-center">
                            <Home className="w-16 h-16 text-slate-300" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-center font-serif">낡은 빌라 / 주택</h3>
                        <p className="text-center mb-8 text-sm break-keep">건물 가치 하락, 심각한 주차난, 화재 및 안전 취약.</p>

                        <div className="space-y-4 border-t border-slate-100 pt-6">
                            <div className="flex justify-between">
                                <span>현재 자산 가치</span>
                                <span className="font-bold">약 6-8억 원</span>
                            </div>
                            <div className="flex justify-between">
                                <span>주거 만족도</span>
                                <span>매우 낮음</span>
                            </div>
                            <div className="flex justify-between">
                                <span>미래 상승 여력</span>
                                <span>제한적</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="hidden md:block">
                        <ArrowRight className="w-8 h-8 text-slate-300" />
                    </div>

                    {/* Future State */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full bg-slate-900 p-8 rounded-3xl border border-sky-500 shadow-2xl relative overflow-hidden text-white transform md:scale-105"
                    >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sky-500 to-accent-GOLD" />
                        <div className="absolute top-4 right-4 text-xs font-bold bg-accent-GOLD text-slate-900 px-2 py-1 rounded uppercase">Future</div>

                        <div className="mb-8 flex justify-center relative">
                            <div className="absolute inset-0 bg-sky-500 blur-2xl opacity-20" />
                            <TrendingUp className="w-16 h-16 text-sky-400 relative z-10" />
                        </div>

                        <h3 className="text-2xl font-bold mb-2 text-center font-serif">신축 브랜드 랜드마크</h3>
                        <p className="text-center mb-8 text-sky-100/80 text-sm">49층 초고층, 파노라마 공원 뷰, 호텔급 커뮤니티.</p>

                        <div className="space-y-4 border-t border-white/10 pt-6">
                            <div className="flex justify-between items-center">
                                <span className="text-sky-200">예상 자산 가치</span>
                                <span className="font-bold text-2xl text-accent-GOLD font-serif">약 25-30억 원</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sky-200">분담금 부담</span>
                                <span className="font-bold">최소화 (인센티브)</span>
                            </div>
                            <div className="p-4 bg-sky-600/20 rounded-xl border border-sky-500/30 text-center mt-4">
                                <span className="text-sm block text-sky-200 mb-1">예상 시세 차익</span>
                                <span className="text-3xl font-bold text-white font-serif">+ 15억 원 이상</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <p className="text-center text-slate-400 mt-12 text-sm">
                    * 위 수치는 예상 시뮬레이션 결과이며 향후 사업 진행 과정에서 변동될 수 있습니다.
                </p>
            </div>
        </section>
    );
};

export default ValueComparison;
