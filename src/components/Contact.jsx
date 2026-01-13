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
                        <span>지금이 바로 골든타임</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 break-keep">
                        동의서는 '결정'이 아닌, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">첫걸음 입니다.</span>
                    </h2>

                    <div className="text-lg text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto break-keep space-y-6">
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-2">왜 지금인가요?</h3>
                            <p>
                                지금 동의서를 내지 않아 지연되면<br />
                                <span className="text-amber-400 font-bold">그 만큼 우리 모두의 비용이 늘어나게 됩니다.</span>
                            </p>
                        </div>
                        <p>
                            지금 동의하신다고 바로 집을 나가는 것이 아닙니다. <br />
                            우리 재산의 가치를 제대로 평가받기 위한 첫걸음을 떼는 것입니다.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
                        <div className="mb-6">
                            <div className="text-sm text-slate-400 mb-2">현재 동의율 현황</div>
                            <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "23%" }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="h-full bg-gradient-to-r from-sky-500 to-green-500 relative"
                                >
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg" />
                                </motion.div>
                            </div>
                            <div className="flex justify-between mt-2 text-sm font-bold font-serif">
                                <span className="text-white">23% 달성</span>
                                <span className="text-emerald-400">목표 67%</span>
                            </div>
                        </div>

                        <a
                            href="https://www.paysign.co.kr/service/qrcode/qrcode_send.php?code=1767676049199847500"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-5 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white rounded-xl font-bold text-lg shadow-xl shadow-sky-900/50 flex items-center justify-center gap-3 transition-all mb-4"
                        >
                            <FileSignature className="w-6 h-6" />
                            전자 동의서 제출하기
                        </a>

                        <a
                            href="/documents/submission_guide.pdf"
                            download
                            className="w-full py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-medium flex items-center justify-center gap-3 transition-all mb-6"
                        >
                            <AlertCircle className="w-5 h-5 text-amber-400" />
                            전자동의서 제출방법 안내 (PDF)
                        </a>

                        <div className="pt-6 border-t border-white/10">
                            <p className="text-slate-300 mb-4 font-medium">
                                "서류 쓰기 복잡하다", "어디로 낼지 모르겠다"<br />
                                아래로 연락주시면 직접 안내드리겠습니다.
                            </p>
                            <div className="space-y-2">
                                <a href="tel:010-6266-8290" className="block p-3 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-colors border border-slate-700">
                                    <span className="text-sky-400 font-bold mr-2">이OO 위원장</span>
                                    <span className="text-white font-mono">010-6***-****</span>
                                </a>
                                <a href="tel:010-3762-9540" className="block p-3 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-colors border border-slate-700">
                                    <span className="text-sky-400 font-bold mr-2">한OO 부위원장</span>
                                    <span className="text-white font-mono">010-3***-****</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
