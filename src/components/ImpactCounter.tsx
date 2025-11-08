'use client';

import React, { useEffect, useState } from 'react';
import { useLocale } from '../i18n/LocaleProvider';

interface CounterStat {
  value: number;
  label: string;
  icon: string;
  suffix?: string;
}

const ImpactCounter: React.FC = () => {
  const { locale } = useLocale();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({ trees: 0, land: 0, co2: 0 });

  useEffect(() => {
    if (hasAnimated) return;
    
    // Target values
    const targets = {
      trees: 1248,
      land: 12,
      co2: 3744
    };
    
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounts({
        trees: Math.floor(targets.trees * progress),
        land: Math.floor(targets.land * progress),
        co2: Math.floor(targets.co2 * progress)
      });
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
        setHasAnimated(true);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, [hasAnimated]);

  const stats: CounterStat[] = [
    {
      value: counts.trees,
      label: locale === 'id' ? 'Pohon Didanai' : 'Trees Funded',
      icon: '🌳'
    },
    {
      value: counts.land,
      label: locale === 'id' ? 'Hektar Lahan Dipulihkan' : 'Hectares Restored',
      icon: '🌱',
      suffix: locale === 'id' ? ' Ha' : ' Ha'
    },
    {
      value: counts.co2,
      label: locale === 'id' ? 'Ton CO₂ Diserap/Tahun' : 'Tons CO₂ Absorbed/Year',
      icon: '💨',
      suffix: locale === 'id' ? ' Ton' : ' Tons'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-hijaukan-green/10 to-hijaukan-light/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-hijaukan-dark mb-4">
            {locale === 'id' ? 'Dampak Nyata Kami' : 'Our Real Impact'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === 'id' 
              ? 'Setiap kontribusi membawa perubahan nyata untuk Indonesia yang lebih hijau' 
              : 'Every contribution brings real change for a greener Indonesia'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-6xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-hijaukan-green mb-2">
                {stat.value.toLocaleString()}{stat.suffix || ''}
              </div>
              <div className="text-gray-700 font-semibold text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            {locale === 'id' 
              ? '* Data per November 2025. Diperbarui setiap bulan.' 
              : '* Data as of November 2025. Updated monthly.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactCounter;
