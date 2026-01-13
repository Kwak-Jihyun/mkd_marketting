import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircleQuestion } from 'lucide-react';

const faqs = [
    {
        question: "기부채납(공원/공공시설) 비율이 너무 높지 않나요?",
        answer: "고밀 개발을 위한 필수적인 투자입니다. 법적 기준에 따라 부지를 기부채납하는 대신 용적률을 대폭 상향 받아 49층 건립이 가능해지는 것입니다. 이는 곧 사업 수익성을 높이고, 내 집 앞에 명품 공원을 조성하여 '숲세권' 프리미엄을 만드는 가장 확실한 방법입니다."
    },
    {
        question: "공공(LH)이 지으면 아파트 품질이 떨어지지 않나요?",
        answer: "전혀 그렇지 않습니다. LH는 공정하고 투명한 '시행'을 맡을 뿐, 실제 '시공'은 삼성물산, 현대건설 등 국내 1군 메이저 건설사가 '하이엔드 브랜드'를 걸고 진행합니다. 목동 신시가지 재건축 단지와 견주어도 손색없는 최고급 마감재와 커뮤니티가 적용됩니다."
    },
    {
        question: "학군이 목동 단지와 다르지 않나요?",
        answer: "'신축 대단지'와 '역세권'의 가치가 모든 것을 압도합니다. 5호선 초역세권 입지에 들어서는 최신 5세대 신축 아파트에는 고소득 전문직 위주의 입주가 예상되며, 이에 따라 교육 환경과 주변 상권 수준 또한 자연스럽게 목동 최고 수준으로 동반 상승할 것입니다."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5">
                        <div className="sticky top-24">
                            <span className="text-sky-600 font-bold tracking-wider uppercase text-sm mb-4 block">Clear Answers</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                                주민 여러분의 오해를 <br /> 풀어드립니다
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 break-keep">
                                근거 없는 소문에 흔들리지 마세요. <br />
                                도심 공공주택 복합사업에 대한 진실을 알려드립니다.
                            </p>
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 inline-flex items-center gap-4">
                                <MessageCircleQuestion className="w-8 h-8 text-sky-600" />
                                <div className="flex flex-col gap-4">
                                    <div className="font-bold text-slate-900">더 궁금한 점이 있으신가요?</div>
                                    <div className="text-sm text-slate-500 mb-2">주민 센터를 방문하시거나 전화주세요.</div>
                                    <a
                                        href="/documents/promotion_brochure.pdf"
                                        download
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-sky-200"
                                    >
                                        사업 홍보책자 다운로드 (PDF)
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                                >
                                    <span className="font-bold text-lg text-slate-800 pr-8 break-keep">{faq.question}</span>
                                    {openIndex === index ? <Minus className="w-5 h-5 text-sky-500 shrink-0" /> : <Plus className="w-5 h-5 text-slate-400 shrink-0" />}
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 break-keep">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
