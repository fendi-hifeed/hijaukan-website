'use client';

import React, { useState } from 'react';
import { useLocale } from '../i18n/LocaleProvider';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const { locale } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: Record<'en' | 'id', FAQItem[]> = {
    id: [
      {
        question: 'Apa itu KitaHijaukan?',
        answer: 'KitaHijaukan adalah gerakan restorasi lahan berbasis Circular Economy & Cadangan Karbon. KitaHijaukan berupaya mewujudkan ekosistem lingkungan yang berkelanjutan melalui restorasi lahan dan kontribusi nyata terhadap penyerapan karbon di Indonesia.'
      },
      {
        question: 'Program apa saja yang ada di KitaHijaukan?',
        answer: 'Mulai dari penanaman pohon, budidaya tanaman hijau bermanfaat (kayak indigofera), edukasi lingkungan, sampai dukungan untuk petani dan komunitas lokal.'
      },
      {
        question: 'Kenapa saya perlu mendukung program KitaHijaukan?',
        answer: 'Karena setiap pohon yang ditanam dan setiap aksi kecil ikut membantu perbaiki kualitas tanah, kurangi emisi, dan bikin lingkungan lebih sehat buat generasi berikutnya.'
      },
      {
        question: 'Bagaimana cara saya berkontribusi?',
        answer: 'Ikut donasi, ikut kegiatan tanam, bantu sebarin edukasi, atau ajak komunitasmu terlibat.'
      },
      {
        question: 'Apakah program dapat dipantau secara langsung?',
        answer: 'Ya, kegiatan kami bisa dipantau lewat update rutin—mulai dari progres lapangan, foto, sampai laporan penanaman.'
      },
      {
        question: 'Bagaimana transparansi dan pelaporan dilakukan?',
        answer: 'Kami sediakan laporan perkembangan, dokumentasi, dan data program yang bisa kamu akses secara terbuka.'
      },
      {
        question: 'Siapa saja mitra yang bekerja sama?',
        answer: 'Kami bekerja sama dengan petani, komunitas lokal, pemerintah daerah, lembaga lingkungan, dan relawan.'
      },
      {
        question: 'Apakah komunitas bisa berkontribusi dengan kegiatan KitaHijaukan?',
        answer: 'Bisa banget! Kamu bisa ajak komunitas ikut tanam, kampanye, atau bikin proyek bareng.'
      },
      {
        question: 'Apakah saya bisa mengusulkan program bersama KitaHijaukan?',
        answer: 'Bisa banget dong. Kamu bisa langsung hubungi tim KitaHijaukan, ceritakan idemu, dan kita lihat bareng cara terbaik ngejalaninnya.'
      }
    ],
    en: [
      {
        question: 'What is KitaHijaukan?',
        answer: 'KitaHijaukan is a land restoration movement built on circular economy and community carbon reserves—turning real contributions into measurable carbon absorption impact in Indonesia.'
      },
      {
        question: 'What programs does KitaHijaukan run?',
        answer: 'From tree planting and beneficial green cultivation (like Indigofera), to environmental education and support for local farmers and communities.'
      },
      {
        question: 'Why should I support KitaHijaukan?',
        answer: 'Because every tree planted and every small action helps restore soil quality, reduce emissions, and build a healthier environment for future generations.'
      },
      {
        question: 'How can I contribute?',
        answer: 'Donate, join planting activities, help spread education, or bring your community to get involved.'
      },
      {
        question: 'Can I track the program progress?',
        answer: 'Yes—progress is shared through routine updates, including field progress, photos, and planting reports.'
      },
      {
        question: 'How do transparency and reporting work?',
        answer: 'We provide progress reports, documentation, and program data that you can access openly.'
      },
      {
        question: 'Who are your partners?',
        answer: 'We collaborate with farmers, local communities, local governments, environmental organizations, and volunteers.'
      },
      {
        question: 'Can communities contribute?',
        answer: 'Absolutely—invite your community to plant together, run a campaign, or build a project with us.'
      },
      {
        question: 'Can I propose a joint program?',
        answer: 'Yes. Reach out to our team, share your idea, and we\'ll explore the best way to run it together.'
      }
    ]
  };

  const currentFAQs = faqs[locale];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-hijaukan-dark mb-4">
            {locale === 'id' ? 'Pertanyaan Umum' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-gray-600">
            {locale === 'id' 
              ? 'Punya pertanyaan? Temukan jawabannya di sini' 
              : 'Have questions? Find answers here'}
          </p>
        </div>

        <div className="space-y-4">
          {currentFAQs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-hijaukan-light/30 hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-hijaukan-light/10 transition-colors"
              >
                <span className="font-semibold text-hijaukan-dark pr-4">
                  {faq.question}
                </span>
                <span className="text-2xl text-hijaukan-green flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 pt-2">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-hijaukan-light/20 rounded-xl p-6">
          <p className="text-gray-700 mb-3">
            {locale === 'id' 
              ? 'Masih punya pertanyaan lain?' 
              : 'Still have other questions?'}
          </p>
          <a
            href="https://instagram.com/kitahijaukan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-hijaukan-green font-bold hover:underline"
          >
            <span>💬</span>
            <span>{locale === 'id' ? 'Hubungi Tim Kami di Instagram' : 'Contact Our Team on Instagram'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
