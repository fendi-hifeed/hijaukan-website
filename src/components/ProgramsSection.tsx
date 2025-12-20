"use client";

import React from 'react';
import { useLocale } from '../i18n/LocaleProvider';

interface ProgramCard {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

const ProgramCard: React.FC<ProgramCard> = ({ title, description, buttonText, href }) => (
  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
    <h3 className="text-2xl font-bold text-hijaukan-dark mb-4">
      {title}
    </h3>
    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
      {description}
    </p>
    <a
      href={href}
      className="bg-hijaukan-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-hijaukan-dark transition-colors text-center"
    >
      {buttonText}
    </a>
  </div>
);

const getProgramsData = (locale: string): ProgramCard[] => {
  const programsId: ProgramCard[] = [
    {
      id: 'jajan-karbon',
      title: 'Jajan Karbon',
      description: 'Didedikasikan untuk membiayai satu unit bibit Indigofera dan biaya operasional target 10.000 bibit/ha',
      buttonText: 'SELENGKAPNYA',
      href: '/individual#jajan-karbon'
    },
    {
      id: 'eco-carbon-reserve',
      title: 'Eco-Carbon Reserve',
      description: 'Didedikasikan untuk biaya pemeliharaan sustain lahan yang sudah ditanami bibit sebanyak 2.4 ha',
      buttonText: 'SELENGKAPNYA',
      href: '/individual#eco-carbon-reserve'
    },
    {
      id: 'sustainatree',
      title: 'SustainaTree',
      description: 'Program kolaboratif dan partisipatif dengan korporasi untuk melakukan penanaman pohon yang berkelanjutan, transparan dan mudah',
      buttonText: 'SELENGKAPNYA',
      href: '/partnership#sustainatree'
    }
  ];

  const programsEn: ProgramCard[] = [
    {
      id: 'jajan-karbon',
      title: 'Jajan Karbon',
      description: 'Dedicated to funding one unit of Indigofera seedlings and operational costs targeting 10,000 seedlings/ha',
      buttonText: 'LEARN MORE',
      href: '/individual#jajan-karbon'
    },
    {
      id: 'eco-carbon-reserve',
      title: 'Eco-Carbon Reserve',
      description: 'Dedicated to maintenance costs for sustaining land already planted with seedlings as many as 2.4 ha',
      buttonText: 'LEARN MORE',
      href: '/individual#eco-carbon-reserve'
    },
    {
      id: 'sustainatree',
      title: 'SustainaTree',
      description: 'A collaborative and participatory program with corporations to conduct sustainable, transparent and easy tree planting',
      buttonText: 'LEARN MORE',
      href: '/partnership#sustainatree'
    }
  ];

  return locale === 'id' ? programsId : programsEn;
};

const ProgramsSection: React.FC = () => {
  const { locale } = useLocale();
  const programs = getProgramsData(locale);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-hijaukan-green to-hijaukan-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((program) => (
            <ProgramCard key={program.id} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

export default ProgramsSection;
