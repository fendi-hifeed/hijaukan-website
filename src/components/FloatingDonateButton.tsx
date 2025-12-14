"use client";
import React, { useEffect, useState } from 'react';
import { useLocale } from '../i18n/LocaleProvider';

const FloatingDonateButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { locale } = useLocale();

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      setVisible(scrolled > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToDonation = () => {
    try {
      window.location.href = '/individual#jajan-karbon';
    } catch {
      // no-op
    }
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).dataLayer = (window as any).dataLayer || [];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).dataLayer.push({ event: 'donate_cta_click', source: 'floating_button' });
    } catch {}
  };

  return (
    <button
      onClick={scrollToDonation}
      aria-label={locale === 'id' ? 'Donasi Sekarang' : 'Donate Now'}
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 shadow-xl rounded-full px-6 py-4 font-bold text-white text-sm md:text-base bg-gradient-to-r from-hijaukan-green to-hijaukan-dark hover:scale-105 focus:outline-none focus:ring-4 focus:ring-hijaukan-green/40 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`}
    >
      🌱 {locale === 'id' ? 'Donasi Sekarang' : 'Donate Now'}
    </button>
  );
};

export default FloatingDonateButton;
