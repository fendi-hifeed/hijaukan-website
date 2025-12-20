'use client';

import React from 'react';
import { useLocale } from "../i18n/LocaleProvider";

interface ProblemStatementProps {
  title: string;
  problems: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

const ProblemStatement: React.FC<ProblemStatementProps> = ({ title, problems }) => {
  const { locale } = useLocale();
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          {/* SDG icons — show above the title; responsive sizes */}
          <div className="flex items-center justify-center mb-4 space-x-3 md:space-x-4 lg:space-x-5">
            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center p-0.5">
              <img src="/E_WEB_01.png" alt="SDG 1 - No Poverty" className="w-full h-full rounded-sm shadow-sm object-contain" />
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center p-0.5">
              <img src="/E_WEB_04.png" alt="SDG 4 - Quality Education" className="w-full h-full rounded-sm shadow-sm object-contain" />
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center p-0.5">
              <img src="/E_WEB_11.png" alt="SDG 11 - Sustainable Cities" className="w-full h-full rounded-sm shadow-sm object-contain" />
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center p-0.5">
              <img src="/E_WEB_12.png" alt="SDG 12 - Responsible Consumption" className="w-full h-full rounded-sm shadow-sm object-contain" />
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center p-0.5">
              <img src="/E_WEB_13.png" alt="SDG 13 - Climate Action" className="w-full h-full rounded-sm shadow-sm object-contain" />
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center p-0.5">
              <img src="/E_WEB_15.png" alt="SDG 15 - Life on Land" className="w-full h-full rounded-sm shadow-sm object-contain" />
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center p-0.5">
              <img src="/E_WEB_17.png" alt="SDG 17 - Partnerships" className="w-full h-full rounded-sm shadow-sm object-contain" />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-hijaukan-dark mb-6">
            {title}
          </h2>
          <div className="w-24 h-1 bg-hijaukan-green mx-auto"></div>
        </div>

        {/* Crisis Description */}
        <div className="bg-red-50 border-l-4 border-red-600 p-8 mb-12 rounded-r-lg">
          <div className="flex items-start space-x-4">
            <div className="text-4xl">⚠️</div>
            <div>
              <h3 className="text-2xl font-bold text-red-900 mb-4">
                {locale === 'id' ? 'Setiap Detik, Kita Kehilangan Lahan Subur' : 'Every Second, We Lose Fertile Land'}
              </h3>
              <p className="text-lg text-red-800 leading-relaxed">
                {locale === 'id' ? (
                  <>Tanah di sekitar kita sakit dan kehilangan kemampuannya menyerap air dan karbon. Dampaknya langsung terasa: <span className="font-bold">banjir, kekeringan, dan ancaman nyata pada pasokan pangan kita.</span></>
                ) : (
                  <>Soil around us is degraded and loses the ability to absorb water and carbon. The effects are immediate: <span className="font-bold">floods, droughts, and real threats to our food supply.</span></>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold text-hijaukan-dark mb-4">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="mt-16 bg-gradient-to-r from-hijaukan-dark to-hijaukan-green text-white rounded-2xl p-12 text-center">
          <p className="text-2xl md:text-3xl font-bold mb-4">
            {locale === 'id' ? 'Lahan yang terdegradasi bukan hanya masalah lingkungan' : 'Degraded land is more than an environmental issue'}
          </p>
          <p className="text-xl md:text-2xl opacity-90">
            {locale === 'id' ? 'Ini adalah langkah mundur bagi dapur dan masa depan anak cucu kita' : 'It sets back livelihoods and the future of the next generations.'}
          </p>
          <div className="mt-8 inline-block bg-white/20 backdrop-blur-sm rounded-full px-8 py-3">
            <p className="text-lg font-semibold">
              {locale === 'id' ? 'Ini adalah tanggung jawab kita bersama' : 'This is our shared responsibility'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
