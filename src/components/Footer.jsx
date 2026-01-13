import React from 'react';
import { Home, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 text-white text-xl font-bold font-serif mb-6">
                            <Home className="w-6 h-6 text-sky-500" />
                            <span>목동역<span className="text-sky-500">도심복합</span></span>
                        </div>
                        <p className="text-sm leading-relaxed mb-6 break-keep">
                            주민들의 뜻을 모아 새로운 목동의 미래를 만듭니다. 성공적인 도심 공공주택 복합사업을 위해 최선을 다하겠습니다.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">사업 안내</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-sky-400 transition-colors">사업 개요</a></li>
                            <li><a href="#" className="hover:text-sky-400 transition-colors">추진 일정</a></li>
                            <li><a href="#" className="hover:text-sky-400 transition-colors">입주민 혜택</a></li>
                            <li><a href="#" className="hover:text-sky-400 transition-colors">공지사항</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">관련 사이트</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-sky-400 transition-colors">LH 공사</a></li>
                            <li><a href="#" className="hover:text-sky-400 transition-colors">국토교통부</a></li>
                            <li><a href="#" className="hover:text-sky-400 transition-colors">양천구청</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">문의처</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="tel:010-6266-8290" className="hover:text-sky-400 transition-colors">전화: 010-6***-****</a></li>
                            <li><a href="#" className="hover:text-sky-400 transition-colors">이메일: contact@mokdonghub.kr</a></li>
                            <li><a href="#" className="hover:text-sky-400 transition-colors">주소: 서울시 양천구 목동</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Mokdong Urban Complex Project. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
