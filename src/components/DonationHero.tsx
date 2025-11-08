'use client';

import React from 'react';
import { useLocale } from "../i18n/LocaleProvider";

interface DonationHeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  onCtaClick: () => void;
}

const DonationHero: React.FC<DonationHeroProps> = ({ 
  title, 
  subtitle, 
  description, 
  ctaText, 
  onCtaClick 
}) => {
  const { locale } = useLocale();
  return (
    <section className="relative bg-gradient-to-br from-hijaukan-green to-hijaukan-dark py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-6">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            {title}
          </h1>
          
          {/* Subtitle - Urgent Message */}
          <h2 className="text-2xl md:text-3xl font-semibold text-hijaukan-light">
            {subtitle}
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <button
              onClick={onCtaClick}
              className="bg-white text-hijaukan-green font-bold text-lg px-12 py-4 rounded-full hover:bg-hijaukan-light hover:text-hijaukan-dark transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              {ctaText}
            </button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-white">1.000+</div>
              <div className="text-hijaukan-light mt-2">{locale === 'id' ? 'Hektar Target Tahun Ini' : 'Hectares targeted this year'}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                {/* Locale-aware amount display */}
                {(() => {
                  // keep this simple and locale-aware; amount is illustrative
                  const amount = 50000;
                  // show currency in IDR but formatted according to locale
                  const formattedAmount = new Intl.NumberFormat(
                    locale === 'id' ? 'id-ID' : 'en-US',
                    { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }
                  ).format(amount);

                  return (
                    <>
                      <div className="text-4xl font-bold text-white">{formattedAmount}</div>
                      <div className="text-hijaukan-light mt-2">{locale === 'id' ? 'Transparansi Progress' : 'Progress Transparency'}</div>
                    </>
                  );
                })()}
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold text-white">100%</div>
                <div className="text-hijaukan-light mt-2">{locale === 'id' ? 'Transparansi Progress' : 'Progress Transparency'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationHero;
