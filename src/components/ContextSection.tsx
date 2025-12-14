"use client";

import React from 'react';
import Image from 'next/image';
import { useLocale } from '../i18n/LocaleProvider';

const ContextSection = () => {
  const { locale } = useLocale();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/context-restoration.png"
          alt="Restored Landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl text-white space-y-6">
          <div className="inline-block px-4 py-1.5 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full text-green-300 text-sm font-medium uppercase tracking-wider">
            {locale === 'id' ? 'Konteks & Misi' : 'Context & Mission'}
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {locale === 'id' 
              ? 'Mengubah Lahan Kritis Menjadi Harapan Hijau' 
              : 'Transforming Critical Land into Green Hope'}
          </h2>
          
          <p className="text-lg text-gray-200 leading-relaxed">
            {locale === 'id'
              ? 'Indonesia menghadapi tantangan lahan kritis yang meluas. Melalui penanaman Indigofera yang terintegrasi, kami merestorasi ekosistem, menyerap emisi karbon secara masif, dan menciptakan sumber ekonomi baru bagi petani lokal. Ini bukan sekadar menanam pohon, ini tentang membangun masa depan yang berkelanjutan.'
              : 'Indonesia faces the challenge of expanding critical lands. Through integrated Indigofera planting, we restore ecosystems, absorb massive carbon emissions, and create new economic sources for local farmers. This is not just about planting trees; it is about building a sustainable future.'}
          </p>

          <div className="pt-4 grid grid-cols-2 gap-6">
            <div className="border-l-4 border-green-500 pl-4">
              <p className="text-3xl font-bold text-green-400">20+</p>
              <p className="text-sm text-gray-300">
                {locale === 'id' ? 'Ton CO₂/Ha/Tahun' : 'Tons CO₂/Ha/Year'}
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="text-3xl font-bold text-green-400">100%</p>
              <p className="text-sm text-gray-300">
                {locale === 'id' ? 'Pemberdayaan Lokal' : 'Local Empowerment'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContextSection;
