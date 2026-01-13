import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Home, Layers, FileText, Ruler, Building, Scale } from 'lucide-react';

const ProjectDetails = () => {
    const details = [
        {
            label: "사업명",
            value: "서울 목동역 인근 도심복합사업",
            icon: <FileText className="w-5 h-5" />,
            colSpan: "col-span-1 md:col-span-2"
        },
        {
            label: "면적",
            value: "78,923㎡ (약 2.4만평)",
            icon: <Ruler className="w-5 h-5" />
        },
        {
            label: "건설호수",
            value: "2,591호",
            icon: <Home className="w-5 h-5" />
        },
        {
            label: "세대타입",
            value: "36㎡(413), 46㎡(311), 59㎡(721), 84㎡(906), 105㎡(240)",
            icon: <Layers className="w-5 h-5" />,
            colSpan: "col-span-1 md:col-span-2",
            subtext: "다양한 평형 구성으로 실거주 만족도 극대화"
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-sky-600 font-bold tracking-wider uppercase text-sm mb-3 block">Project Overview</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                            사업 상세 개요
                        </h2>
                        <p className="text-slate-500 mt-4">
                            투명하고 확실한 계획으로 목동의 미래를 건설합니다.
                        </p>
                    </div>

                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {details.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`${item.colSpan || 'col-span-1'} bg-white p-6 rounded-2xl border border-slate-100 hover:border-sky-100 hover:shadow-md transition-all group`}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-slate-100 rounded-lg text-slate-400 group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors">
                                            {item.icon}
                                        </div>
                                        <span className="text-slate-500 font-bold text-sm tracking-wide">{item.label}</span>
                                    </div>
                                    <div className="font-medium text-slate-800 text-lg md:text-xl break-keep pl-2">
                                        {item.value}
                                    </div>
                                    {item.subtext && (
                                        <div className="mt-2 pl-2 text-sm text-sky-600 font-medium">
                                            ※ {item.subtext}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-200 text-center">
                            <p className="text-slate-400 text-sm">
                                * 위 사업 내용은 향후 지구 지정 및 인허가 과정에서 일부 변경될 수 있습니다.<br className="hidden md:block" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;
