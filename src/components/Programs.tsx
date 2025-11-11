"use client";

import React from 'react';
import { useLocale } from '../i18n/LocaleProvider';

interface ProgramBlock {
  id: string;
  icon: string;
  title: string;
  focus: string;
  aspects: Array<{ label: string; value: string }>;
  strategic: string;
  highlight?: string;
}

const Programs: React.FC = () => {
  const { locale } = useLocale();

  const data: Record<'en' | 'id', ProgramBlock[]> = {
    id: [
      {
        id: 'eco-carbon-reserve',
        icon: '🌿',
        title: 'Program 1: Eco-Carbon Reserve (Lampung)',
        focus: 'Inisiasi utama pemulihan fungsi lahan kritis di Lampung sebagai model Reservasi Karbon & Ekosistem (Eco-Carbon Reserve).',
        strategic: 'Restorasi ganda: perbaikan kesuburan tanah + penyerapan karbon (hingga ~20 tCO2e/ha/tahun).',
        aspects: [
          { label: 'Metode Tanam', value: 'Sistem tumpang sari: Indigofera (legum penambat Nitrogen) + pohon keras lokal + tanaman pangan bernilai ekonomi.' },
          { label: 'Tujuan Khusus', value: 'Memperbaiki tanah, meningkatkan biodiversitas, mencegah gagal panen total monokultur.' },
          { label: 'Kemitraan', value: 'Membuka akuisisi proyek restorasi untuk korporat & individu.' },
          { label: 'Alokasi Dana', value: 'Pembibitan, penanaman, persiapan lahan, dan maintenance terstruktur.' },
        ],
        highlight: 'Model dasar ekosistem untuk program lanjutan karbon & ekonomi petani.'
      },
      {
        id: 'sustainatree',
        icon: '🏢',
        title: 'Program 2: SustainaTree (Carbon Scaling Hub B2B)',
        focus: 'Skema kolaborasi korporasi berbasis hasil Program 1 untuk akuisisi/pengelolaan lahan kritis.',
        strategic: 'Solusi offset karbon terukur + transparansi tinggi laporan berkala (estimasi serapan hingga 20 tCO2e/ha/tahun).',
        aspects: [
          { label: 'Tujuan Khusus', value: 'Paket penanaman (mis. 1.000–3.000 pohon) dengan pelaporan ESG/CSR.' },
          { label: 'Keunggulan Transparansi', value: 'Laporan akhir 1 tahun: sosial, ekonomi, dan estimasi karbon terserap.' },
          { label: 'Model Keberlanjutan', value: 'Menjamin biaya perawatan & tenaga kerja petani (man power) jangka panjang.' },
        ],
        highlight: 'Jembatan scaling antara restorasi ekologis dan kebutuhan offset korporat.'
      },
      {
        id: 'jajankarbon',
        icon: '💸',
        title: 'Program 3: JajanKarbon (Skema B2C Partisipatif)',
        focus: 'Donasi individu mudah diakses fokus pada storytelling dampak ganda Indigofera.',
        strategic: 'Partisipasi mulai Rp30.000 mendanai satu bibit penyerap karbon + edukasi pakan rendah emisi.',
        aspects: [
          { label: 'Skema Donasi', value: 'Adopsi pohon individu: E-sertifikat, update foto & laporan tiap 6 bulan.' },
          { label: 'Edukasi', value: 'Menjelaskan Indigofera sebagai penyerap karbon & superfood ternak rendah emisi.' },
          { label: 'Alokasi Dana', value: 'Pembibitan & penanaman (Rp50.000/donasi) + sebagian maintenance awal.' },
        ],
        highlight: 'Mengubah aksi kecil publik menjadi efek restorasi & mitigasi iklim nyata.'
      },
      {
        id: 'carbon-pet',
        icon: '🌲',
        title: 'Program 4: Carbon Pet (Pohon Asuh)',
        focus: 'Individu “mengadopsi” bibit dan mendanai perawatan 1 tahun lengkap dengan update bergaya gamifikasi.',
        strategic: 'Membuat hubungan emosional antara individu dan siklus hidup pohon restorasi.',
        aspects: [
          { label: 'Komponen Biaya', value: 'Bibit & Tanam Rp15.000; Perawatan + Man Power ± Rp1.200.000/tahun; Monitoring & Reporting ± Rp1.000.000/tahun.' },
          { label: 'Gamification', value: 'Unlock Karakter (Bibit), Daily Care Fund (Maintenance), Upgrade Status (Monitoring GPS + laporan).' },
          { label: 'Skema Cicilan', value: 'Total estimasi Rp2.220.000 dapat dicicil per 3 bulan.' },
        ],
        highlight: 'Memperkuat retensi donor lewat pengalaman mirip memelihara “pet” hijau.'
      }
    ],
    en: [
      {
        id: 'eco-carbon-reserve',
        icon: '🌿',
        title: 'Program 1: Eco-Carbon Reserve (Lampung)',
        focus: 'Primary initiative restoring critical land in Lampung as an Eco-Carbon Reserve model.',
        strategic: 'Dual restoration: soil fertility recovery + carbon sequestration (up to ~20 tCO2e/ha/year).',
        aspects: [
          { label: 'Planting Method', value: 'Intercropping system: Indigofera (nitrogen-fixing legume) + local hardwood species + economic/food crops.' },
          { label: 'Specific Goal', value: 'Improve soil, biodiversity, and resilience vs monoculture collapse.' },
          { label: 'Partnership', value: 'Open acquisition of restoration projects (corporate & individual).' },
          { label: 'Fund Allocation', value: 'Nursery, planting, land preparation, structured maintenance.' },
        ],
        highlight: 'Foundational ecosystem model enabling next carbon & farmer livelihood programs.'
      },
      {
        id: 'sustainatree',
        icon: '🏢',
        title: 'Program 2: SustainaTree (Carbon Scaling Hub B2B)',
        focus: 'Corporate collaboration scheme built atop Program 1 for land acquisition & managed treatment.',
        strategic: 'Measured carbon offset solution + high transparency periodic reports (upto 20 tCO2e/ha/year).',
        aspects: [
          { label: 'Specific Goal', value: 'Tree planting packages (e.g. 1,000–3,000 trees) with ESG/CSR reporting.' },
          { label: 'Transparency Advantage', value: 'Final 1-year report: social, economic & estimated absorbed carbon.' },
          { label: 'Sustainability Model', value: 'Funds secure long-term care & farmer manpower costs.' },
        ],
        highlight: 'Scaling bridge between ecological restoration and corporate offset demand.'
      },
      {
        id: 'jajankarbon',
        icon: '💸',
        title: 'Program 3: JajanKarbon (Participatory B2C)',
        focus: 'Accessible individual donation emphasizing Indigofera’s dual climate & feed impact.',
        strategic: 'Entry from ~IDR 30K funds a carbon-sequestering seedling + low-emission feed education.',
        aspects: [
          { label: 'Donation Scheme', value: 'Individual tree adoption: E-certificate, photo updates & brief reports every 6 months.' },
          { label: 'Education', value: 'Explaining Indigofera as both carbon sink and low-emission livestock superfood.' },
          { label: 'Fund Allocation', value: 'Nursery & planting (≈IDR 50K/donation) + partial initial maintenance.' },
        ],
        highlight: 'Transforms small public actions into tangible restoration & climate mitigation.'
      },
      {
        id: 'carbon-pet',
        icon: '🌲',
        title: 'Program 4: Carbon Pet (Adopt-a-Tree)',
        focus: 'Individuals “adopt” a seedling funding 1-year care with gamified progress updates.',
        strategic: 'Creates emotional linkage between supporter and tree lifecycle.',
        aspects: [
          { label: 'Cost Components', value: 'Seed & Planting ≈IDR 15K; Care + Man Power ≈IDR 1.2M/year; Monitoring & Reporting ≈IDR 1M/year.' },
          { label: 'Gamification', value: 'Unlock Character (Seedling), Daily Care Fund (Maintenance), Upgrade Status (GPS & growth reports).' },
          { label: 'Installments', value: 'Total ≈IDR 2.22M can be paid in quarterly cycles.' },
        ],
        highlight: 'Improves donor retention via a “green pet” experience.'
      }
    ]
  };

  const programs = data[locale];

  return (
    <section id="programs" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-hijaukan-dark mb-4">
            {locale === 'id' ? 'Program Inisiasi Strategis' : 'Strategic Initiation Programs'}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {locale === 'id' ? 'Empat program untuk membangun Ekonomi Sirkular Hijau menghubungkan mitigasi iklim, restorasi lahan, dan keberlanjutan ekonomi petani.' : 'Four programs engineered to build a Green Circular Economy connecting climate mitigation, land restoration, and farmer livelihood resilience.'}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {programs.map(p => (
            <div key={p.id} className="relative bg-gray-50 border border-hijaukan-light rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl md:text-4xl">{p.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-hijaukan-dark leading-snug">
                  {p.title}
                </h3>
              </div>
              <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">{p.focus}</p>
              <div className="bg-white rounded-xl p-4 mb-4 border border-hijaukan-light/40">
                <p className="text-hijaukan-green font-semibold text-sm md:text-base mb-2">
                  {locale === 'id' ? 'Penekanan Strategis:' : 'Strategic Emphasis:'}
                </p>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{p.strategic}</p>
              </div>
              <ul className="space-y-2 mb-4">
                {p.aspects.map((a,i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-hijaukan-green mt-0.5">✔</span>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm md:text-base">{a.label}</p>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{a.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
              {p.highlight && (
                <div className="bg-hijaukan-green/10 rounded-lg p-4 text-sm md:text-base">
                  <span className="font-semibold text-hijaukan-green">
                    {locale === 'id' ? 'Highlight:' : 'Highlight:'}
                  </span>{' '}
                  <span className="text-gray-700">{p.highlight}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
