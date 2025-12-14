"use client";

import React from 'react';
import { useLocale } from '../i18n/LocaleProvider';
import type { Locale } from '../i18n/dictionaries';

interface ProgramBlock {
  id: string;
  icon: string;
  title: string;
  goal: string;
  keyPoints: string[];
  tag?: string;
}

const programData: Record<'en' | 'id', ProgramBlock[]> = {
    id: [
      {
        id: 'eco-carbon-reserve',
        icon: '🌿',
        title: 'Eco-Carbon Reserve',
        goal: 'Pulihkan lahan kritis Lampung sebagai lumbung karbon komunitas.',
        keyPoints: [
          'Campuran Indigofera + pohon keras lokal',
          'Pendampingan petani & perawatan 12 bulan',
          'Target serap ±20 tCO₂e/ha/tahun'
        ],
        tag: 'Pilot Kampung'
      },
      {
        id: 'sustainatree',
        icon: '🏢',
        title: 'SustainaTree',
        goal: 'Paket offset korporasi berbasis lahan komunitas.',
        keyPoints: [
          '1.000–3.000 pohon + laporan ESG',
          'Update transparan tiap kuartal',
          'Biaya rawat & man power terjamin'
        ],
        tag: 'B2B'
      },
      {
        id: 'jajankarbon',
        icon: '💸',
        title: 'JajanKarbon',
        goal: 'Donasi individu terjangkau untuk bibit Indigofera.',
        keyPoints: [
          'Mulai Rp30 ribu sudah tanam',
          'E-sertifikat & foto tiap 6 bulan',
          'Edukasi pakan rendah emisi'
        ],
        tag: 'Publik'
      }
    ],
    en: [
      {
        id: 'eco-carbon-reserve',
        icon: '🌿',
        title: 'Eco-Carbon Reserve',
        goal: 'Restore Lampung critical land into a community carbon reserve.',
        keyPoints: [
          'Indigofera + native hardwood mix',
          'Farmer-led care for 12 months',
          'Target ±20 tCO₂e/ha/year'
        ],
        tag: 'Community Pilot'
      },
      {
        id: 'sustainatree',
        icon: '🏢',
        title: 'SustainaTree',
        goal: 'Corporate offset packages rooted in community land.',
        keyPoints: [
          '1,000–3,000 trees + ESG reports',
          'Transparent quarterly updates',
          'Covers care and farmer wages'
        ],
        tag: 'B2B'
      },
      {
        id: 'jajankarbon',
        icon: '💸',
        title: 'JajanKarbon',
        goal: 'Accessible individual giving for Indigofera seedlings.',
        keyPoints: [
          'From ~IDR 30K per seedling',
          'E-certificates & photos every 6 months',
          'Low-emission feed education'
        ],
        tag: 'Public'
      }
    ]
  };

const SectionIntro: React.FC<{ locale: Locale }> = ({ locale }) => (
  <div className="text-center mb-12 space-y-3">
    <p className="text-sm uppercase tracking-[0.4em] text-hijaukan-green/70">
      {locale === 'id' ? 'Rangkaian Program' : 'Program Suite'}
    </p>
    <h2 className="text-3xl md:text-5xl font-bold text-hijaukan-dark">
      {locale === 'id' ? 'Program Inisiasi Strategis' : 'Strategic Startup Programs'}
    </h2>
    <p className="text-gray-600 max-w-3xl mx-auto">
      {locale === 'id'
        ? 'Setiap program punya tujuan jelas: siapa yang dibantu, apa yang dibiayai, dan bagaimana progres dilaporkan.'
        : 'Each program states the who, what, and how progress gets reported—kept lean but meaningful.'}
    </p>
  </div>
);

const ProgramCard: React.FC<{ program: ProgramBlock }> = ({ program }) => (
  <div className="bg-gray-50 border border-hijaukan-light/60 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="text-3xl md:text-4xl">{program.icon}</div>
        <h3 className="text-xl md:text-2xl font-bold text-hijaukan-dark">
          {program.title}
        </h3>
      </div>
      {program.tag && (
        <span className="text-xs uppercase tracking-wide bg-white px-3 py-1 rounded-full border border-hijaukan-light text-hijaukan-green">
          {program.tag}
        </span>
      )}
    </div>
    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">{program.goal}</p>
    <div className="space-y-3">
      {program.keyPoints.map(point => (
        <div key={point} className="flex items-start gap-3">
          <span className="text-hijaukan-green mt-1">•</span>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">{point}</p>
        </div>
      ))}
    </div>
  </div>
);

const ScrollHint: React.FC<{ locale: Locale }> = ({ locale }) => {
  const handleScrollTop = () => {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="text-center mt-12">
      <button
        onClick={handleScrollTop}
        className="inline-flex items-center gap-2 text-sm font-semibold text-hijaukan-dark hover:text-hijaukan-green"
      >
        {locale === 'id' ? 'Lihat detail penyaluran di atas halaman ini' : 'Scroll up for the detailed flow above'}
      </button>
    </div>
  );
};

const Programs: React.FC = () => {
  const { locale } = useLocale();

  const programs = programData[locale];

  return (
    <section id="programs" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionIntro locale={locale} />
        <div className="grid gap-6 md:grid-cols-2">
          {programs.map(program => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
        <ScrollHint locale={locale} />
      </div>
    </section>
  );
};

export default Programs;
