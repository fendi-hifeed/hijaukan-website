"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from "../i18n/LocaleProvider";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { locale, setLocale } = useLocale();
    const t = useTranslations('nav');

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsMenuOpen(false);
    };

    const navLinks = [
        { href: 'programs', label: t('programs') as string },
        { href: 'challenges', label: t('challenges') as string },
        { href: 'solution', label: t('solution') as string },
        { href: 'timeline', label: t('timeline') as string },
        { href: 'benefits', label: t('benefits') as string },
        { href: 'palatability', label: t('palatability') as string },
    ];

    return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-hijaukan-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center bounce-gentle overflow-hidden relative">
                            <Image 
                                src="/hijaukan_logo.png" 
                                alt="KitaHIJAUkan logo" 
                                fill
                                className="object-contain"
                                sizes="(max-width: 640px) 48px, 64px"
                                priority
                            />
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map(link => (
                            <a key={link.href} href={`#${link.href}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }} className="text-gray-600 hover:text-hijaukan-green font-medium transition-colors scale-hover">
                                {link.label}
                            </a>
                        ))}
                                                <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-hijaukan-light">
                                                    <button onClick={() => setLocale('id')} className={`px-2 py-1 rounded-full text-sm ${locale==='id' ? 'bg-hijaukan-green text-white' : 'text-gray-600 hover:text-hijaukan-green'}`}>ID</button>
                                                    <button onClick={() => setLocale('en')} className={`px-2 py-1 rounded-full text-sm ${locale==='en' ? 'bg-hijaukan-green text-white' : 'text-gray-600 hover:text-hijaukan-green'}`}>EN</button>
                                                </div>
                                                <button onClick={() => scrollToSection('donation')} aria-label={locale === 'id' ? 'Donasi Sekarang' : 'Donate Now'} className="bg-hijaukan-green hover:bg-hijaukan-dark text-white px-6 py-2 rounded-full font-semibold transition-all scale-hover">
                                                    {t('donateCta') as string ?? (locale === 'id' ? 'Donasi Sekarang' : 'Donate Now')}
                                                </button>
                    </div>
                    <div className="md:hidden flex items-center gap-2">
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-hijaukan-light">
                            <button onClick={() => setLocale('id')} className={`px-2 py-1 rounded-full text-sm ${locale==='id' ? 'bg-hijaukan-green text-white' : 'text-gray-600 hover:text-hijaukan-green'}`}>ID</button>
                            <button onClick={() => setLocale('en')} className={`px-2 py-1 rounded-full text-sm ${locale==='en' ? 'bg-hijaukan-green text-white' : 'text-gray-600 hover:text-hijaukan-green'}`}>EN</button>
                        </div>

                        {/* Mobile Donate button placed left of menu toggle */}
                        <button onClick={() => scrollToSection('donation')} aria-label={locale === 'id' ? 'Donasi Sekarang' : 'Donate Now'} className="bg-hijaukan-green hover:bg-hijaukan-dark text-white px-3 py-2 rounded-full font-semibold text-sm transition-all">
                            {t('donateCta') as string ?? (locale === 'id' ? 'Donasi Sekarang' : 'Donate Now')}
                        </button>

                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-hijaukan-green focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-hijaukan-light px-4 py-4">
                    {navLinks.map(link => (
                        <a key={link.href} href={`#${link.href}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }} className="block w-full text-left text-gray-600 hover:text-hijaukan-green font-medium py-2 transition-colors">
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Header;
