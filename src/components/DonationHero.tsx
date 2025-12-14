'use client';

import React from 'react';
import { useLocale } from "../i18n/LocaleProvider";

const DonationHero: React.FC = () => {
  const { locale } = useLocale();
  
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
      {/* Video Trailer - Full width and height */}
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <iframe
          src="https://drive.google.com/file/d/16RuZu3UQKKO027FwjbTddciUTz1Fw72B/preview"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          title={locale === 'id' ? 'Trailer Kampanye' : 'Campaign Trailer'}
        />
      </div>
    </div>
  );
};

export default DonationHero;
