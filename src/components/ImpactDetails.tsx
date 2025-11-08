'use client';

import React from 'react';
import { useTranslations } from '../i18n/LocaleProvider';

interface DonationPackage {
  id: string;
  amount: string;
  title: string;
  description: string;
  impact: string[];
  popular?: boolean;
}

interface ImpactDetailsProps {
  title: string;
  subtitle: string;
  packages: DonationPackage[];
  onSelectPackage: (packageId: string) => void;
}

const ImpactDetails: React.FC<ImpactDetailsProps> = ({ 
  title, 
  subtitle, 
  packages, 
  onSelectPackage 
}) => {
  const t = useTranslations('donasi');
  
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-hijaukan-dark mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            {subtitle}
          </p>
          <div className="w-24 h-1 bg-hijaukan-green mx-auto"></div>
        </div>

        {/* Impact Highlights */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-hijaukan-green">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">🌳</div>
              <div>
                <h3 className="text-xl font-bold text-hijaukan-dark mb-2">
                  {t('highlight1Title') as string}
                </h3>
                <p className="text-gray-600">
                  {t('highlight1Desc') as string}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">💨</div>
              <div>
                <h3 className="text-xl font-bold text-hijaukan-dark mb-2">
                  {t('highlight2Title') as string}
                </h3>
                <p className="text-gray-600">
                  {t('highlight2Desc') as string}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-500">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">📸</div>
              <div>
                <h3 className="text-xl font-bold text-hijaukan-dark mb-2">
                  {t('highlight3Title') as string}
                </h3>
                <p className="text-gray-600">
                  {t('highlight3Desc') as string}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-orange-500">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">🎯</div>
              <div>
                <h3 className="text-xl font-bold text-hijaukan-dark mb-2">
                  {t('highlight4Title') as string}
                </h3>
                <p className="text-gray-600">
                  {t('highlight4Desc') as string}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Packages */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-hijaukan-dark mb-8">
            {t('impactTitle') as string}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`relative bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                  pkg.popular ? 'ring-4 ring-hijaukan-green' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-hijaukan-green text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      {t('popularBadge') as string}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="text-3xl md:text-4xl font-bold text-hijaukan-dark mb-2">
                    {pkg.amount}
                  </div>
                  <div className="text-xl font-semibold text-gray-700">
                    {pkg.title}
                  </div>
                  <p className="text-gray-600 mt-2">
                    {pkg.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.impact.map((item, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <span className="text-hijaukan-green mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    try {
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      (window as any).dataLayer = (window as any).dataLayer || [];
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      (window as any).dataLayer.push({
                        event: 'donate_select',
                        package_id: pkg.id,
                        amount_label: pkg.amount,
                        popular: !!pkg.popular,
                      });
                    } catch {}
                    onSelectPackage(pkg.id);
                  }}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-hijaukan-green text-white hover:bg-hijaukan-dark'
                      : 'bg-gray-100 text-hijaukan-dark hover:bg-hijaukan-green hover:text-white'
                  }`}
                >
                  {t('selectPackageBtn') as string}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Urgency CTA */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl p-10 text-center">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">
            {t('urgencyTitle') as string}
          </h3>
          <p className="text-xl mb-6">
            {t('urgencyDesc') as string}
          </p>
          <div className="inline-block bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg">
            {t('urgencyCta') as string}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactDetails;
