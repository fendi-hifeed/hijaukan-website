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
        question: 'Bagaimana cara berdonasi?',
        answer: 'Kamu bisa berdonasi melalui platform Kitabisa yang tersedia di halaman ini. Pilih paket donasi yang sesuai atau masukkan nominal sesuai kemampuan. Tersedia berbagai metode pembayaran: transfer bank, e-wallet, dan kartu kredit.'
      },
      {
        question: 'Apakah saya akan mendapatkan laporan donasi?',
        answer: 'Ya! Semua donatur akan mendapatkan sertifikat digital dan update berkala melalui Instagram @kitahijaukan. Kami dokumentasikan setiap tahap penanaman dan perawatan pohon secara transparan.'
      },
      {
        question: 'Di mana pohon akan ditanam?',
        answer: 'Pohon akan ditanam di lahan-lahan kritis yang telah dipetakan di berbagai wilayah Indonesia, prioritas di daerah yang terdegradasi akibat erosi dan praktik pertanian tidak berkelanjutan. Kami bekerja sama dengan petani lokal dan komunitas.'
      },
      {
        question: 'Bagaimana memastikan pohon tumbuh dengan baik?',
        answer: 'Setiap pohon mendapatkan perawatan intensif selama 1 tahun penuh. Tim kami bersama petani lokal melakukan monitoring rutin, penyiraman, pemupukan, dan pengendalian hama. Update progress bisa dipantau di Instagram kami.'
      },
      {
        question: 'Berapa minimal donasi?',
        answer: 'Tidak ada minimal donasi. Kamu bisa memilih paket Rp 50.000 untuk 1 pohon, Rp 250.000 untuk 5 pohon, atau nominal bebas sesuai kemampuan. Setiap rupiah sangat berarti untuk restorasi lahan Indonesia.'
      },
      {
        question: 'Apakah donasi saya aman dan legal?',
        answer: 'Sangat aman! Donasi disalurkan melalui Kitabisa, platform donasi terpercaya di Indonesia. Program ini dijalankan oleh Yayasan Langkah Restorasi Bumi yang legal dan transparan.'
      }
    ],
    en: [
      {
        question: 'How do I donate?',
        answer: 'You can donate through the Kitabisa platform available on this page. Choose a donation package that suits you or enter an amount according to your ability. Various payment methods are available: bank transfer, e-wallet, and credit card.'
      },
      {
        question: 'Will I receive a donation report?',
        answer: 'Yes! All donors will receive a digital certificate and regular updates via Instagram @kitahijaukan. We document every stage of tree planting and care transparently.'
      },
      {
        question: 'Where will the trees be planted?',
        answer: 'Trees will be planted on mapped critical lands in various regions of Indonesia, prioritizing areas degraded by erosion and unsustainable agricultural practices. We work together with local farmers and communities.'
      },
      {
        question: 'How do you ensure trees grow well?',
        answer: 'Each tree receives intensive care for 1 full year. Our team together with local farmers conduct routine monitoring, watering, fertilizing, and pest control. Progress updates can be monitored on our Instagram.'
      },
      {
        question: 'What is the minimum donation?',
        answer: 'There is no minimum donation. You can choose IDR 50,000 package for 1 tree, IDR 250,000 for 5 trees, or any amount according to your ability. Every rupiah really matters for Indonesia\'s land restoration.'
      },
      {
        question: 'Is my donation safe and legal?',
        answer: 'Very safe! Donations are channeled through Kitabisa, a trusted donation platform in Indonesia. This program is run by Yayasan Langkah Restorasi Bumi which is legal and transparent.'
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
