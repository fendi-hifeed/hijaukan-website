'use client';

import React, { useEffect, useRef } from 'react';
import { useTranslations, useLocale } from '../i18n/LocaleProvider';

interface KitabisaEmbedProps {
  campaignUrl: string;
  title?: string;
  subtitle?: string;
}

const KitabisaEmbed: React.FC<KitabisaEmbedProps> = ({
  campaignUrl,
  title,
  subtitle
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const t = useTranslations('donasi');
  const { locale } = useLocale();

  useEffect(() => {
    // Handle iframe responsive behavior
    const handleResize = () => {
      if (iframeRef.current) {
        const width = iframeRef.current.offsetWidth;
        iframeRef.current.style.height = `${width * 1.2}px`;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-hijaukan-dark mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
          <div className="w-24 h-1 bg-hijaukan-green mx-auto mt-6"></div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-green-50 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="font-bold text-hijaukan-dark mb-2">{t('kitabisaTrust1') as string}</h3>
            <p className="text-sm text-gray-600">{t('kitabisaTrust1Desc') as string}</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">💳</div>
            <h3 className="font-bold text-hijaukan-dark mb-2">{t('kitabisaTrust2') as string}</h3>
            <p className="text-sm text-gray-600">{t('kitabisaTrust2Desc') as string}</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-bold text-hijaukan-dark mb-2">{t('kitabisaTrust3') as string}</h3>
            <p className="text-sm text-gray-600">{t('kitabisaTrust3Desc') as string}</p>
          </div>
        </div>

        {/* Kitabisa Embed */}
        <div className="bg-gray-50 rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-hijaukan-green to-hijaukan-dark p-6 text-white">
            <h3 className="text-2xl font-bold text-center">
              {t('kitabisaHashtag') as string}
            </h3>
            <p className="text-center mt-2 opacity-90">
              {t('kitabisaHashtagDesc') as string}
            </p>
          </div>

          <div className="p-4 md:p-8">
            {/* Kitabisa iframe embed */}
            <div className="relative w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                ref={iframeRef}
                src={campaignUrl}
                title="Amartha Care to Grow - KitaHIJAUkan Indonesia"
                className="w-full border-0"
                style={{ minHeight: '600px' }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Direct Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-3">
                {t('kitabisaDirectText') as string}
              </p>
              <a
                href={campaignUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  try {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (window as any).dataLayer = (window as any).dataLayer || [];
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (window as any).dataLayer.push({ event: 'donate_cta_click', source: 'amartha_button' });
                  } catch { }
                }}
                className="inline-block bg-hijaukan-green text-white font-bold px-8 py-4 rounded-full hover:bg-hijaukan-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {t('kitabisaDirectBtn') as string}
              </a>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-hijaukan-light/30 rounded-xl p-6">
            <h4 className="font-bold text-hijaukan-dark mb-3 text-lg">
              {t('kitabisaSocial1Title') as string}
            </h4>
            <p className="text-gray-700 mb-3">
              {t('kitabisaSocial1Desc') as string}
            </p>
            <a
              href="https://instagram.com/kitahijaukan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-hijaukan-green font-bold hover:underline"
            >
              <span>Instagram @kitahijaukan</span>
              <span>→</span>
            </a>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6">
            <h4 className="font-bold text-hijaukan-dark mb-3 text-lg">
              {t('kitabisaSocial2Title') as string}
            </h4>
            <p className="text-gray-700 mb-3">
              {t('kitabisaSocial2Desc') as string}
            </p>
            <a
              href="https://instagram.com/kitahijaukan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-hijaukan-green font-bold hover:underline"
            >
              <span>{locale === 'id' ? 'Hubungi Tim Kami di Instagram' : 'Contact Our Team on Instagram'}</span>
              <span>📧</span>
            </a>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-hijaukan-dark to-hijaukan-green text-white rounded-2xl p-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {t('kitabisaFinalTitle') as string}
          </h3>
          <p className="text-lg opacity-90">
            {t('kitabisaFinalDesc') as string}
          </p>
        </div>
      </div>
    </section>
  );
};

export default KitabisaEmbed;
