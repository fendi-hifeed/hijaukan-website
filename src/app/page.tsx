"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from "../components/Header";
import Footer from "../components/Footer";
import DonationHero from "../components/DonationHero";
import FloatingDonateButton from "../components/FloatingDonateButton";
import { useLocale } from "../i18n/LocaleProvider";

export default function Home() {
  const { locale } = useLocale();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-16">
        
        {/* SECTION 1: Care to Grow Hero with Video on Desktop */}
        <section className="relative py-16 px-4 bg-gradient-to-br from-hijaukan-light/30 via-white to-hijaukan-green/10 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-hijaukan-green/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-hijaukan-light/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          
          <div className="relative max-w-7xl mx-auto">
            {/* Grid layout: text on left, video on right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left: Care to Grow content */}
              <div className="text-center lg:text-left space-y-6">
                <div className="inline-block px-4 py-2 bg-hijaukan-green/10 rounded-full text-hijaukan-green text-sm font-medium mb-3">
                  🌱 {locale === 'id' ? 'Bersama Kita Hijaukan Indonesia' : 'Together We Green Indonesia'}
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-hijaukan-green via-hijaukan-dark to-hijaukan-green bg-clip-text text-transparent leading-tight">
                  Care to Grow
                </h1>
                <p className="text-gray-600 text-lg">
                  {locale === 'id' 
                    ? 'Wujudkan Ekosistem Berkelanjutan Sekarang!' 
                    : 'Build a Sustainable Ecosystem Now!'}
                </p>
                
                {/* 3 CTA Buttons */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
                  <Link
                    href="/partnership"
                    className="group bg-gradient-to-r from-hijaukan-green to-hijaukan-dark hover:from-hijaukan-dark hover:to-hijaukan-green text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-hijaukan-green/30 hover:-translate-y-0.5"
                  >
                    <span className="flex items-center gap-2">
                      🤝 {locale === 'id' ? 'Join Kontribusi' : 'Join Contribution'}
                    </span>
                  </Link>
                  <Link
                    href="/individual#jajan-karbon"
                    className="group bg-gradient-to-r from-hijaukan-dark to-hijaukan-green hover:from-hijaukan-green hover:to-hijaukan-dark text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-hijaukan-green/30 hover:-translate-y-0.5"
                  >
                    <span className="flex items-center gap-2">
                      ☕ Jajan Karbon
                    </span>
                  </Link>
                  <a
                    href="#"
                    className="group bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-400 text-hijaukan-dark px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/30 hover:-translate-y-0.5"
                  >
                    <span className="flex items-center gap-2">
                      📥 {locale === 'id' ? 'Unduh Deck' : 'Download Deck'}
                    </span>
                  </a>
                </div>

                {/* SDG Icons */}
                <div className="flex flex-wrap gap-2 pt-6 justify-center lg:justify-start">
                  {['/E_WEB_01.png', '/E_WEB_04.png', '/E_WEB_11.png', '/E_WEB_12.png', '/E_WEB_13.png', '/E_WEB_15.png', '/E_WEB_17.png'].map((src, i) => (
                    <div key={i} className="w-12 h-12 rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer">
                      <Image src={src} alt={`SDG ${i + 1}`} width={48} height={48} className="w-full h-full object-contain" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Video only */}
              <div className="hidden lg:block">
                <div>
                  <DonationHero />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: PROGRAM KITA HIJAUKAN */}
        <section className="py-16 px-4 bg-hijaukan-green">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              PROGRAM KITA HIJAUKAN
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Jajan Karbon */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-hijaukan-dark mb-3">Jajan Karbon</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {locale === 'id' 
                    ? 'Didedikasikan untuk membiayai satu unit bibit Indigofera dan biaya operasional target 10.000 bibit/ha'
                    : 'Dedicated to funding one Indigofera seedling unit and operational costs targeting 10,000 seedlings/ha'}
                </p>
                <Link 
                  href="/individual#jajan-karbon"
                  className="inline-block bg-hijaukan-green text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-hijaukan-dark transition-colors"
                >
                  SELENGKAPNYA
                </Link>
              </div>

              {/* Eco-Carbon Reserve */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-hijaukan-dark mb-3">Eco-Carbon Reserve</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {locale === 'id'
                    ? 'Didedikasikan untuk biaya pemeliharaan suatu lahan yang sudah ditanami bibit sebanyak 2.4 ha'
                    : 'Dedicated to maintenance costs for land already planted with seedlings covering 2.4 ha'}
                </p>
                <Link 
                  href="/individual#eco-carbon-reserve"
                  className="inline-block bg-hijaukan-green text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-hijaukan-dark transition-colors"
                >
                  SELENGKAPNYA
                </Link>
              </div>

              {/* SustainaTree */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-hijaukan-dark mb-3">SustainaTree</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {locale === 'id'
                    ? 'Program kolaboratif dan partisipatif dengan korporasi untuk melakukan penanaman pohon yang berkelanjutan, transparan dan mudah'
                    : 'Collaborative and participatory program with corporations for sustainable, transparent and easy tree planting'}
                </p>
                <Link 
                  href="/partnership#sustainatree"
                  className="inline-block bg-hijaukan-green text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-hijaukan-dark transition-colors"
                >
                  SELENGKAPNYA
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: PANTAU DAMPAK NYATA KAMI */}
        <section className="py-16 px-4 bg-hijaukan-dark">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              PANTAU DAMPAK NYATA KAMI
            </h2>
            
            {/* Illustration */}
            <div className="flex justify-center mb-8">
              <Image 
                src="/E_WEB_15.png" 
                alt="Impact illustration" 
                width={120}
                height={120}
                className="w-28 h-28 object-contain"
              />
            </div>

            {/* 3 Stats */}
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <p className="text-xs text-white/70 uppercase tracking-wide mb-2">KAMI TELAH MENANAM</p>
                <p className="text-4xl md:text-5xl font-bold text-white">1,248</p>
                <p className="text-white/80 mt-2">{locale === 'id' ? 'Untuk di jadikan Carbon Banks' : 'To become Carbon Banks'}</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <p className="text-xs text-white/70 uppercase tracking-wide mb-2">BATCH 1 RESTORASI LAHAN</p>
                <p className="text-4xl md:text-5xl font-bold text-white">7 Ha</p>
                <p className="text-white/80 mt-2">{locale === 'id' ? 'Lahan kritis di Lampung selatan' : 'Critical land in South Lampung'}</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <p className="text-xs text-white/70 uppercase tracking-wide mb-2">KAMI TELAH TANAM</p>
                <p className="text-4xl md:text-5xl font-bold text-white">3,744 T</p>
                <p className="text-white/80 mt-2">{locale === 'id' ? 'Pertahun dari Carbon Banks kami' : 'Per year from our Carbon Banks'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: DETAIL KONTRIBUSI */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-hijaukan-dark mb-3">DETAIL KONTRIBUSI</h2>
              <p className="text-gray-600">
                {locale === 'id' 
                  ? 'Jajan Karbon setara dengan Jajan Kopi! Ini dia detail kontribusimu.' 
                  : 'Jajan Karbon equals a cup of coffee! Here are your contribution details.'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-hijaukan-green text-white rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-2">1 Pohon = Rp 30.000</h3>
                <p className="text-white/90 text-sm">
                  {locale === 'id' 
                    ? '1 bibit indigofera, biaya tanam dan perawatan selama 1 tahun' 
                    : '1 Indigofera seedling, planting and care costs for 1 year'}
                </p>
              </div>
              <div className="bg-hijaukan-green text-white rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-2">{locale === 'id' ? 'Penyerap Metana & CO₂' : 'Methane & CO₂ Absorber'}</h3>
                <p className="text-white/90 text-sm">
                  {locale === 'id' 
                    ? 'Setiap hektar indigofera mampu menyerap hingga 20 ton CO₂ per tahun!' 
                    : 'Each hectare of Indigofera can absorb up to 20 tons of CO₂ per year!'}
                </p>
              </div>
              <div className="bg-hijaukan-green text-white rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-2">{locale === 'id' ? 'Memberdayakan petani lokal' : 'Empowering Local Farmers'}</h3>
                <p className="text-white/90 text-sm">
                  {locale === 'id' 
                    ? 'Untuk menanam, merawat, dan memantau pertumbuhannya.' 
                    : 'To plant, care for, and monitor growth.'}
                </p>
              </div>
              <div className="bg-hijaukan-green text-white rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-2">{locale === 'id' ? 'Target 1.000 Hektar' : '1,000 Hectares Target'}</h3>
                <p className="text-white/90 text-sm">
                  {locale === 'id' 
                    ? 'Bantu wujudkan kembali 1.000 hektar lahan hijau' 
                    : 'Help restore 1,000 hectares of green land'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Map Monitoring (lokasi aksi) */}
        <section className="py-16 px-4 bg-hijaukan-dark">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Map Monitoring (lokasi aksi)</h2>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps?q=-5.678051471710205,105.60869598388672&z=17&hl=en&output=embed"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* SECTION 6: Our Mitra */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-hijaukan-dark mb-8">Our Mitra</h2>
            <div className="flex justify-center items-center">
              <Image
                src="/hifeed-logo.png"
                alt="HiFeed Logo"
                width={150}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingDonateButton />
    </>
  );
}