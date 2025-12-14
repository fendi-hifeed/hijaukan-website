import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from "../i18n/LocaleProvider";

const Footer: React.FC = () => {
    const t = useTranslations('footer');
    const { locale } = useLocale();
    return (
    <footer className="bg-hijaukan-gray text-gray-600 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center bounce-gentle overflow-hidden relative">
                                <Image 
                                    src="/hijaukan_logo.png" 
                                    alt="HIJAUkan Logo" 
                                    fill
                                    className="object-contain"
                                    sizes="48px"
                                />
                            </div>
                            <div className="text-3xl font-bold text-hijaukan-green">KitaHIJAUkan</div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6">{t('about') as string}</p>
                        <div className="space-y-1 text-sm">
                          <div className="font-semibold">{t('addressTitle') as string}</div>
                          <div>{t('company') as string}</div>
                          <div>{t('address') as string}</div>
                                                                                                            <div>
                                                                                                                <a href="https://instagram.com/kitahijaukan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 hover:text-hijaukan-green">
                                                                                                                    <span>{locale === 'id' ? 'Instagram @kitahijaukan' : 'Instagram @kitahijaukan'}</span>
                                                                                                                </a>
                                                                                                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-hijaukan-green">{locale === 'id' ? 'Program' : 'Programs'}</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/individual#jajan-karbon" className="text-gray-600 hover:text-hijaukan-green transition-colors scale-hover block">
                                    {locale === 'id' ? 'Jajan Karbon' : 'Jajan Karbon'}
                                </Link>
                            </li>
                            <li>
                                <Link href="/individual#eco-carbon-reserve" className="text-gray-600 hover:text-hijaukan-green transition-colors scale-hover block">
                                    {locale === 'id' ? 'Eco-Carbon Reserve' : 'Eco-Carbon Reserve'}
                                </Link>
                            </li>
                            <li>
                                <Link href="/partnership#sustainatree" className="text-gray-600 hover:text-hijaukan-green transition-colors scale-hover block">
                                    {locale === 'id' ? 'SustainaTree' : 'SustainaTree'}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-hijaukan-green">{locale === 'id' ? 'Dukungan' : 'Support'}</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacy-policy" className="text-gray-600 hover:text-hijaukan-green transition-colors scale-hover block">
                                    {t('privacyPolicy') as string}
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-600 hover:text-hijaukan-green transition-colors scale-hover block">
                                    {t('termsOfService') as string}
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-600 hover:text-hijaukan-green transition-colors scale-hover block">
                                    {t('contact') as string}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-200 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-center md:text-left">&copy; {new Date().getFullYear()} KitaHIJAUkan. {t('copyright') as string}</p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                                     <a href="https://www.linkedin.com/company/hijaukanx" target="_blank" rel="noopener noreferrer" className="bg-hijaukan-light w-10 h-10 rounded-xl flex items-center justify-center hover:bg-hijaukan-green/20 transition-all scale-hover" aria-label="LinkedIn">
                                         <span className="text-sm font-bold text-hijaukan-green">in</span>
                            </a>
                                     <a href="https://www.instagram.com/kitahijaukan" target="_blank" rel="noopener noreferrer" className="bg-hijaukan-light w-10 h-10 rounded-xl flex items-center justify-center hover:bg-hijaukan-green/20 transition-all scale-hover" aria-label="Instagram">
                                         <span className="text-sm font-bold text-hijaukan-green">ig</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
