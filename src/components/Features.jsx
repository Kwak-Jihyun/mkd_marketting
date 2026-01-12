import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, TrendingUp, Building2, Trees, Train } from 'lucide-react';

const benefits = [
    {
        icon: <Clock className="w-8 h-8" />,
        title: "압도적인 속도",
        description: "민간 재개발 평균 18.5년 소요. 공공 주도 사업은 통합 심의로 인허가를 단축하여 지구 지정 후 3년 내 착공, 5년 후 입주를 목표로 합니다.",
        highlight: "3년 내 착공"
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "정부 보증 안전성",
        description: "LH가 직접 시행하여 조합 내 이권 다툼, 비대위 소송, 공사비 갈등 등 민간 사업의 고질적인 리스크가 획기적으로 낮습니다.",
        highlight: "리스크 ZERO"
    },
    {
        icon: <TrendingUp className="w-8 h-8" />,
        title: "사업성 극대화",
        description: "역세권 고밀 개발 인센티브로 용적률을 상향 받아, 주민 분담금은 낮추고 자산 가치는 3배 이상 상승시킵니다.",
        highlight: "높은 수익률"
    }
];

const infrastructure = [
    {
        icon: <Building2 className="w-6 h-6" />,
        title: "1군 하이엔드 브랜드",
        description: "LH 시행이지만 시공은 1군 건설사가 맡아 하이엔드 설계와 마감재를 적용합니다."
    },
    {
        icon: <Trees className="w-6 h-6" />,
        title: "국회대로 숲세권",
        description: "단지 바로 앞 국회대로 공원화 수혜로 도심 속 명품 숲세권 라이프를 누립니다."
    },
    {
        icon: <Train className="w-6 h-6" />,
        title: "목동역 초역세권",
        description: "5호선 목동역과 신정역을 아우르는 더블 역세권의 가치가 신축과 결합됩니다."
    }
];

const Features = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-sky-600 font-bold tracking-wider uppercase text-sm mb-4 block">Why Public Urban Composition?</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6">
                        왜 <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-800">'도심 공공주택 복합사업'</span><br />
                        이어야 할까요?
                    </h2>
                    <p className="text-slate-600 text-lg">
                        속도, 안전, 그리고 확실한 수익. <br />
                        민간 재개발은 흉내 낼 수 없는, 오직 공공 주도만이 가능한 성공 공식입니다.
                    </p>
                </div>

                {/* Core Benefits */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                {item.icon}
                            </div>
                            <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-8 group-hover:bg-sky-600 group-hover:text-white transition-colors shadow-lg shadow-sky-100/50">
                                {item.icon}
                            </div>
                            <div className="uppercase tracking-wide text-xs font-bold text-sky-600 mb-2">{item.highlight}</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed break-keep">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Infrastructure Highlights */}
                <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-serif font-bold mb-6">
                                기다릴 가치가 있는 <br />
                                <span className="text-sky-400">명품 인프라</span>
                            </h3>
                            <p className="text-slate-300 mb-8 leading-relaxed break-keep">
                                주차난 없는 지하 주차장 100% 완비부터 최첨단 커뮤니티 시설까지.<br />
                                단순한 주거 개선을 넘어, 목동의 생활 수준을 한 단계 높입니다.
                            </p>
                            <div className="grid gap-6">
                                {infrastructure.map((inf, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="p-2 bg-white/10 rounded-lg text-sky-400 shrink-0">
                                            {inf.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{inf.title}</h4>
                                            <p className="text-sm text-slate-400 break-keep">{inf.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                            {/* Using a placeholder or the park image if available */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                            <img
                                src="/src/assets/park.png"
                                alt="국회대로 공원 조감도"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80' }}
                            />
                            <div className="absolute bottom-0 left-0 p-8 z-20">
                                <span className="bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block">COMING SOON</span>
                                <h4 className="text-2xl font-bold font-serif">국회대로 공원화</h4>
                                <p className="text-sm text-slate-300 mt-2">내 집 앞마당처럼 누리는 도심 속 녹지</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
