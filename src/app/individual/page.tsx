"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import KitabisaEmbed from "../../components/KitabisaEmbed";
import { useLocale, useTranslations } from "../../i18n/LocaleProvider";

const filterKitabisaErrors = (event: ErrorEvent | PromiseRejectionEvent) => {
  const message = 'reason' in event ? String(event.reason) : event.message;
  const source = 'filename' in event ? event.filename : undefined;
  if (!message) return false;
  const checks = [
    message.includes('Blocked a frame with origin "https://kitabisa.com"'),
    message.includes('window.fbq is not a function'),
    source?.includes('ads.tiktok.com'),
  ];
  if (checks.some(Boolean)) {
    event.preventDefault?.();
    return true;
  }
  return false;
};

export default function IndividualPage() {
  const { locale } = useLocale();
  const t = useTranslations('donasi');
  const donationRef = useRef<HTMLDivElement>(null);
  const [selectedTrees, setSelectedTrees] = useState<number | null>(null);

  useEffect(() => {
    const errorListener = (e: ErrorEvent) => filterKitabisaErrors(e);
    const rejectionListener = (e: PromiseRejectionEvent) => filterKitabisaErrors(e);
    window.addEventListener('error', errorListener, true);
    window.addEventListener('unhandledrejection', rejectionListener, true);
    return () => {
      window.removeEventListener('error', errorListener, true);
      window.removeEventListener('unhandledrejection', rejectionListener, true);
    };
  }, []);

  const scrollToDonation = () => {
    donationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <p className="text-hijaukan-green font-semibold tracking-wide uppercase">Individual</p>
              <h1 className="text-3xl md:text-4xl font-bold text-hijaukan-dark leading-tight">
                {locale === 'id'
                  ? 'Restorasi Lahan : Lahan Kritis Lampung Selatan'
                  : 'Land Restoration : South Lampung Critical Land'}
              </h1>
              <p className="text-gray-700 leading-relaxed">
                {locale === 'id'
                  ? 'Restorasi lahan kami mulai dari wilayah Lampung. Lebih dari 30% wilayah Lampung masuk kategori lahan kritis dan sangat kritis (data KLHK) dan Lampung Selatan merupakan salah satu Kabupaten dengan tingkat kerusakan hutan dan degradasi lahan yang cukup mengkhawatirkan. Laporan menunjukkan hingga saat ini, sekitar 375.000 hektar lahan terdampak di Lampung Selatan.'
                  : 'Our land restoration starts from the Lampung region. More than 30% of Lampung is categorized as critical and very critical land (Ministry of Environment data) and South Lampung is one of the regencies with alarming levels of forest damage and land degradation. Reports show up to 375,000 hectares of affected land in South Lampung.'}
              </p>
              <div className="space-y-3 text-sm">
                <div className="bg-hijaukan-light/50 rounded-lg px-4 py-2 text-gray-700">
                  {locale === 'id'
                    ? 'Alih fungsi lahan kritis / keragaman vegetasi rendah / tidak produktif'
                    : 'Critical land conversion / low vegetation diversity / unproductive'}
                </div>
                <div className="bg-hijaukan-light/50 rounded-lg px-4 py-2 text-gray-700">
                  {locale === 'id'
                    ? 'Pertanian yang fokus ke satu tanaman saja dan sifatnya tanaman semusim'
                    : 'Agriculture focused on single seasonal crops only'}
                </div>
                <div className="bg-hijaukan-light/50 rounded-lg px-4 py-2 text-gray-700">
                  {locale === 'id'
                    ? 'Kualitas tanah turun, cuaca makin parah penyebab petani terus gagal panen.'
                    : 'Soil quality declining, worsening weather causing continuous crop failures.'}
                </div>
              </div>
            </div>
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/E_WEB_04.png"
                alt="Map Lampung"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </section>

        {/* Programs: Jajan Karbon & Eco-Carbon Reserve */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-hijaukan-dark">
                {locale === 'id' ? 'Pulihkan Lahan, Jaga Iklim' : 'Restore Land, Protect Climate'}
              </h2>
              <p className="text-gray-600">
                {locale === 'id'
                  ? 'Dukung gerakan restorasi lahan kritis bersama KitaHijaukan melalui'
                  : 'Support our critical land restoration movement through'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Jajan Karbon */}
              <div id="jajan-karbon" className="bg-white border border-hijaukan-light rounded-2xl p-6 shadow-md scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">💸</div>
                  <h3 className="text-xl font-bold text-hijaukan-dark">JajanKarbon</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  {locale === 'id'
                    ? 'Donasi individu terjangkau untuk bibit Indigofera.'
                    : 'Accessible individual giving for Indigofera seedlings.'}
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2"><span className="text-hijaukan-green">•</span>{locale === 'id' ? 'Mulai Rp30 ribu sudah tanam' : 'From ~IDR 30K per seedling'}</li>
                  <li className="flex items-start gap-2"><span className="text-hijaukan-green">•</span>{locale === 'id' ? 'E-sertifikat & foto tiap 6 bulan' : 'E-certificates & photos every 6 months'}</li>
                  <li className="flex items-start gap-2"><span className="text-hijaukan-green">•</span>{locale === 'id' ? 'Edukasi pakan rendah emisi' : 'Low-emission feed education'}</li>
                </ul>
                <button
                  onClick={scrollToDonation}
                  className="mt-6 w-full bg-hijaukan-green hover:bg-hijaukan-dark text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  {locale === 'id' ? 'Donasi Sekarang' : 'Donate Now'}
                </button>
              </div>

              {/* Eco-Carbon Reserve */}
              <div id="eco-carbon-reserve" className="bg-white border border-hijaukan-light rounded-2xl p-6 shadow-md scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">🌿</div>
                  <h3 className="text-xl font-bold text-hijaukan-dark">Eco-Carbon Reserve</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  {locale === 'id'
                    ? 'Pulihkan lahan kritis Lampung sebagai lumbung karbon komunitas.'
                    : 'Restore Lampung critical land into a community carbon reserve.'}
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2"><span className="text-hijaukan-green">•</span>{locale === 'id' ? 'Campuran Indigofera + pohon keras lokal' : 'Indigofera + native hardwood mix'}</li>
                  <li className="flex items-start gap-2"><span className="text-hijaukan-green">•</span>{locale === 'id' ? 'Pendampingan petani & perawatan 12 bulan' : 'Farmer-led care for 12 months'}</li>
                  <li className="flex items-start gap-2"><span className="text-hijaukan-green">•</span>{locale === 'id' ? 'Target serap ±20 tCO₂e/ha/tahun' : 'Target ±20 tCO₂e/ha/year'}</li>
                </ul>
                <button
                  onClick={scrollToDonation}
                  className="mt-6 w-full bg-hijaukan-green hover:bg-hijaukan-dark text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  {locale === 'id' ? 'Donasi Sekarang' : 'Donate Now'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Jajan Karbon Donation Form Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-hijaukan-dark text-center mb-8">
              {locale === 'id' ? 'Jajan Karbon' : 'Jajan Karbon'}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              {locale === 'id' ? 'Kamu bisa jajan karbon disini' : 'You can support carbon here'}
            </p>

            {/* Quick select */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[1, 2, 3, 5].map((n) => (
                <button
                  key={n}
                  onClick={() => setSelectedTrees(n)}
                  className={`py-3 rounded-xl border-2 font-semibold transition-colors ${selectedTrees === n ? 'border-hijaukan-green bg-hijaukan-light text-hijaukan-dark' : 'border-gray-200 bg-white text-gray-700 hover:border-hijaukan-green'}`}
                >
                  {n} {locale === 'id' ? 'Pohon' : 'Tree'}
                </button>
              ))}
            </div>

            <p className="text-center text-gray-500 text-sm mb-8">
              {locale === 'id' ? 'Donasi dalam bentuk Rupiah' : 'Donation in Rupiah'} — Rp. {locale === 'id' ? 'Minimum Rp. 30.000' : 'Minimum IDR 30,000'}
            </p>

            {/* Platform buttons */}
            <div className="flex justify-center gap-4 mb-8">
              <a
                href="https://empower.amartha.com/caretogrow/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border-2 border-hijaukan-green text-hijaukan-green font-semibold hover:bg-hijaukan-green hover:text-white transition-colors"
              >
                Amartha
              </a>
              <a
                href="https://kitabisa.com/campaign/caretogrow"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border-2 border-hijaukan-green text-hijaukan-green font-semibold hover:bg-hijaukan-green hover:text-white transition-colors"
              >
                KitaBisa
              </a>
            </div>
          </div>
        </section>

        {/* Embed Donation */}
        <div ref={donationRef} id="donation">
          <KitabisaEmbed
            campaignUrl="https://empower.amartha.com/caretogrow/"
            title={t('kitabisaTitle') as string}
            subtitle={t('kitabisaSubtitle') as string}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
