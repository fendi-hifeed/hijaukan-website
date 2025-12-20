"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from "../i18n/LocaleProvider";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { locale, setLocale } = useLocale();
    const t = useTranslations('nav');

    const pathname = usePathname();

    const closeMenu = () => setIsMenuOpen(false);

    const NavGroup: React.FC<{
        label: string;
        items: Array<{ href: string; label: string }>;
    }> = ({ label, items }) => (
        <div className="relative group">
            <button
                type="button"
                className="text-gray-600 hover:text-hijaukan-green font-medium transition-colors scale-hover inline-flex items-center gap-2"
                aria-haspopup="menu"
            >
                {label}
                <span className="text-xs">▾</span>
            </button>
            <div
                className="hidden group-hover:block absolute left-0 top-full pt-3"
                role="menu"
            >
                <div className="bg-white border border-hijaukan-light rounded-2xl shadow-xl p-2 min-w-[220px]">
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                            className="block px-4 py-2 rounded-xl text-gray-700 hover:text-hijaukan-green hover:bg-hijaukan-light/30 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );

    const aboutItems = [
        { href: '/about', label: locale === 'id' ? 'About us' : 'About us' },
        { href: '/about#visi', label: locale === 'id' ? 'Visi' : 'Vision' },
        { href: '/about#misi', label: locale === 'id' ? 'Misi' : 'Mission' },
        { href: '/contact', label: locale === 'id' ? 'Contact us' : 'Contact us' },
        { href: '/faq', label: 'FAQ' },
    ];

    const individualItems = [
        { href: '/individual#jajan-karbon', label: locale === 'id' ? 'Jajan Karbon' : 'Jajan Karbon' },
        { href: '/individual#eco-carbon-reserve', label: locale === 'id' ? 'Eco Carbon Reserve' : 'Eco Carbon Reserve' },
    ];

    const partnershipItems = [
        { href: '/partnership#sustainatree', label: locale === 'id' ? 'SustainaTree' : 'SustainaTree' },
        { href: '/partnership#communitree', label: locale === 'id' ? 'CommuniTree Program' : 'CommuniTree Program' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-hijaukan-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center space-x-3 cursor-pointer" onClick={closeMenu}>
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center bounce-gentle overflow-hidden relative">
                            <Image
                                src="/hijaukan_logo.png"
                                alt="KitaHijaukan logo"
                                fill
                                className="object-contain"
                                sizes="(max-width: 640px) 48px, 64px"
                                priority
                            />
                        </div>
                    </Link>
                    <div className="hidden md:flex items-center space-x-6">
                        <NavGroup label={locale === 'id' ? 'About us' : 'About us'} items={aboutItems} />
                        <NavGroup label={locale === 'id' ? 'Individual' : 'Individual'} items={individualItems} />
                        <NavGroup label={locale === 'id' ? 'Partnership' : 'Partnership'} items={partnershipItems} />
                        <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-hijaukan-light">
                            <button onClick={() => setLocale('id')} className={`px-2 py-1 rounded-full text-sm ${locale === 'id' ? 'bg-hijaukan-green text-white' : 'text-gray-600 hover:text-hijaukan-green'}`}>ID</button>
                            <button onClick={() => setLocale('en')} className={`px-2 py-1 rounded-full text-sm ${locale === 'en' ? 'bg-hijaukan-green text-white' : 'text-gray-600 hover:text-hijaukan-green'}`}>EN</button>
                        </div>
                        <Link
                            href="/individual#jajan-karbon"
                            aria-label={locale === 'id' ? 'Donasi Sekarang' : 'Donate Now'}
                            className="bg-hijaukan-green hover:bg-hijaukan-dark text-white px-6 py-2 rounded-full font-semibold transition-all scale-hover"
                            onClick={closeMenu}
                        >
                            {t('donateCta') as string ?? (locale === 'id' ? 'Donasi Sekarang' : 'Donate Now')}
                        </Link>
                    </div>
                    <div className="md:hidden flex items-center gap-2">
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-hijaukan-light">
                            <button onClick={() => setLocale('id')} className={`px-2 py-1 rounded-full text-sm ${locale === 'id' ? 'bg-hijaukan-green text-white' : 'text-gray-600 hover:text-hijaukan-green'}`}>ID</button>
                            <button onClick={() => setLocale('en')} className={`px-2 py-1 rounded-full text-sm ${locale === 'en' ? 'bg-hijaukan-green text-white' : 'text-gray-600 hover:text-hijaukan-green'}`}>EN</button>
                        </div>

                        {/* Mobile Donate button placed left of menu toggle */}
                        <Link href="/individual#jajan-karbon" onClick={closeMenu} aria-label={locale === 'id' ? 'Donasi Sekarang' : 'Donate Now'} className="bg-hijaukan-green hover:bg-hijaukan-dark text-white px-3 py-2 rounded-full font-semibold text-sm transition-all">
                            {t('donateCta') as string ?? (locale === 'id' ? 'Donasi Sekarang' : 'Donate Now')}
                        </Link>

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
                    <div className="space-y-2">
                        <div className="text-xs uppercase tracking-[0.35em] text-gray-400 px-2 pt-2">
                            {locale === 'id' ? 'Navigasi' : 'Navigation'}
                        </div>

                        <details className="group rounded-xl border border-hijaukan-light">
                            <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-gray-700 flex items-center justify-between">
                                <span>{locale === 'id' ? 'About us' : 'About us'}</span>
                                <span className="text-gray-400 group-open:rotate-180 transition-transform">▾</span>
                            </summary>
                            <div className="px-2 pb-2">
                                {aboutItems.map((item) => (
                                    <Link key={item.href} href={item.href} onClick={closeMenu} className="block px-3 py-2 rounded-lg text-gray-600 hover:text-hijaukan-green hover:bg-hijaukan-light/30">
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </details>

                        <details className="group rounded-xl border border-hijaukan-light">
                            <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-gray-700 flex items-center justify-between">
                                <span>{locale === 'id' ? 'Individual' : 'Individual'}</span>
                                <span className="text-gray-400 group-open:rotate-180 transition-transform">▾</span>
                            </summary>
                            <div className="px-2 pb-2">
                                {individualItems.map((item) => (
                                    <Link key={item.href} href={item.href} onClick={closeMenu} className="block px-3 py-2 rounded-lg text-gray-600 hover:text-hijaukan-green hover:bg-hijaukan-light/30">
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </details>

                        <details className="group rounded-xl border border-hijaukan-light">
                            <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-gray-700 flex items-center justify-between">
                                <span>{locale === 'id' ? 'Partnership' : 'Partnership'}</span>
                                <span className="text-gray-400 group-open:rotate-180 transition-transform">▾</span>
                            </summary>
                            <div className="px-2 pb-2">
                                {partnershipItems.map((item) => (
                                    <Link key={item.href} href={item.href} onClick={closeMenu} className="block px-3 py-2 rounded-lg text-gray-600 hover:text-hijaukan-green hover:bg-hijaukan-light/30">
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </details>

                        {pathname !== '/' && (
                            <Link href="/" onClick={closeMenu} className="block px-4 py-3 rounded-xl text-gray-700 hover:text-hijaukan-green hover:bg-hijaukan-light/30 border border-hijaukan-light">
                                {locale === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
