"use client";

import React from 'react';
import Image from 'next/image';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLocale } from "../../i18n/LocaleProvider";

export default function AboutPage() {
  const { locale } = useLocale();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero / About Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-hijaukan-green">About us</h1>
              <p className="text-hijaukan-dark font-semibold">
                {locale === 'id'
                  ? 'KitaHijaukan adalah Gerakan Restorasi Lahan Berbasis Circular Economy & Cadangan Karbon'
                  : 'KitaHijaukan is a Land Restoration Movement Based on Circular Economy & Carbon Reserve'}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {locale === 'id'
                  ? 'KitaHijaukan berupaya mewujudkan ekosistem lingkungan yang berkelanjutan melalui restorasi lahan dan kontribusi nyata terhadap penyerapan karbon di Indonesia'
                  : 'KitaHijaukan strives to build a sustainable environmental ecosystem through land restoration and real contribution to carbon absorption in Indonesia'}
              </p>
            </div>
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/E_WEB_01.png"
                alt="About KitaHijaukan"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </section>

        {/* Visi */}
        <section id="visi" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-hijaukan-green">Visi</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {locale === 'id'
                ? 'Menjadi platform lingkungan yang mempercepat aksi pemulihan alam dan menciptakan dampak keberlanjutan bagi generasi sekarang dan mendatang.'
                : 'To be an environmental platform that accelerates nature recovery and creates lasting sustainability impact for current and future generations.'}
            </p>
          </div>
        </section>

        {/* Misi */}
        <section id="misi" className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-hijaukan-green text-center">Misi</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-hijaukan-green mt-1">•</span>
                <span>
                  {locale === 'id'
                    ? 'Mengembalikan fungsi ekologis lahan yang rusak melalui program penanaman yang terukur, berkelanjutan, dan berbasis data.'
                    : 'Restore ecological functions of degraded land through measurable, sustainable, data-driven planting programs.'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-hijaukan-green mt-1">•</span>
                <span>
                  {locale === 'id'
                    ? 'Membangun cadangan karbon jangka panjang melalui penanaman pohon, agroforestri untuk mendukung mitigasi perubahan iklim.'
                    : 'Build long-term carbon reserves through tree planting and agroforestry to support climate change mitigation.'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-hijaukan-green mt-1">•</span>
                <span>
                  {locale === 'id'
                    ? 'Memberdayakan masyarakat lokal melalui pelibatan aktif, dan manfaat ekonomi berkelanjutan.'
                    : 'Empower local communities through active involvement and sustainable economic benefits.'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-hijaukan-green mt-1">•</span>
                <span>
                  {locale === 'id'
                    ? 'Mengajak publik untuk berpartisipasi dalam memulihkan lahan, dan aksi kolaboratif berbasis komunitas.'
                    : 'Invite the public to participate in land restoration and community-based collaborative action.'}
                </span>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
