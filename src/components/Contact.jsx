import React from 'react';
import { motion } from 'framer-motion';
import { FileSignature, AlertCircle } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-sky-600/20 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full border border-amber-500/20 mb-8 font-bold"
                    >
                        <AlertCircle className="w-5 h-5" />
                        <span>마지막 골든타임</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 break-keep">
                        동의서는 선택이 아닌, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">생존을 위한 필수입니다.</span>
                    </h2>

                    <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto break-keep">
                        20년 넘은 낡은 빌라촌에 계속 남으시겠습니까? <br />
                        아니면, 49층 랜드마크의 주인이 되시겠습니까? <br />
                        본지구 지정을 위한 동의율 67% 달성, 지금 바로 참여해야 합니다.
                    </p>

                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
                        <div className="mb-6">
                            <div className="text-sm text-slate-400 mb-2">현재 동의율 현황</div>
                            <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "58%" }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="h-full bg-gradient-to-r from-sky-500 to-green-500 relative"
                                >
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg" />
                                </motion.div>
                            </div>
                            <div className="flex justify-between mt-2 text-sm font-bold">
                                <span className="text-white">58% 달성</span>
                                <span className="text-emerald-400">목표 67%</span>
                            </div>
                        </div>

                        <button className="w-full py-5 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white rounded-xl font-bold text-lg shadow-xl shadow-sky-900/50 flex items-center justify-center gap-3 transition-all">
                            <FileSignature className="w-6 h-6" />
                            전자 동의서 제출하기
                        </button>
                        <p className="mt-4 text-xs text-slate-500">
                            휴대폰 인증으로 3분이면 완료됩니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
