'use client';

import React from 'react';
import { useLocale } from "../i18n/LocaleProvider";

interface SolutionApproachProps {
  title: string;
  subtitle: string;
  approaches: Array<{
    step: string;
    title: string;
    description: string;
    icon: string;
  }>;
  callToAction: string;
}

const SolutionApproach: React.FC<SolutionApproachProps> = ({ 
  title, 
  subtitle, 
  approaches, 
  callToAction 
}) => {
  const { locale } = useLocale();
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Hope Message */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-100 rounded-full px-8 py-3 mb-6">
            <p className="text-green-800 font-bold text-lg">{locale === 'id' ? '✨ Kabar Baiknya: Tanah Bisa Pulih! ✨' : '✨ Good News: Land Can Recover! ✨'}</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-hijaukan-dark mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
          <div className="w-24 h-1 bg-hijaukan-green mx-auto mt-6"></div>
        </div>

        {/* Approach Steps */}
        <div className="space-y-8 mb-16">
          {approaches.map((approach, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-start bg-hijaukan-light/30 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              {/* Step Number & Icon */}
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                <div className="relative">
                  <div className="w-20 h-20 bg-hijaukan-green rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                    {approach.step}
                  </div>
                  <div className="absolute -bottom-2 -right-2 text-4xl">
                    {approach.icon}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-hijaukan-dark mb-3">
                  {approach.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {approach.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-br from-hijaukan-green to-hijaukan-dark text-white rounded-2xl p-12 text-center">
          <div className="text-6xl mb-6">🌱</div>
          <h3 className="text-2xl md:text-4xl font-bold mb-4">
            {locale === 'id' ? 'Ketika satu persatu pohon tumbuh' : 'As trees take root and grow'}
          </h3>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            {locale === 'id' ? (
              <>Itu bukan hanya harapan, melainkan <span className="font-bold underline">aset jangka panjang bagi Indonesia</span></>
            ) : (
              <>This is not just hope — it becomes a <span className="font-bold underline">long-term asset for communities</span></>
            )}
          </p>
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-8 py-4">
            <p className="text-lg font-semibold">
              {callToAction}
            </p>
          </div>
        </div>

        {/* Partnership Call */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-10">
          <h3 className="text-2xl md:text-3xl font-bold text-hijaukan-dark mb-4">
            {locale === 'id' ? 'Mari Bergandengan Tangan' : 'Join Hands with Us'}
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {locale === 'id' ? (
              <>Kami membuka kesempatan seluas-luasnya bagi <span className="font-bold text-hijaukan-green">institusi dan individu</span> yang memiliki visi selaras untuk bergabung. Mari kita tingkatkan skala dampak ini bersama.</>
            ) : (
              <>We welcome institutions and individuals who share our vision to collaborate. Together, let’s scale this impact.</>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionApproach;
