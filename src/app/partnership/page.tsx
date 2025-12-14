"use client";

import React from 'react';
import Image from 'next/image';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLocale } from "../../i18n/LocaleProvider";

export default function PartnershipPage() {
  const { locale } = useLocale();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        {/* Title */}
        <section className="py-12 px-4 bg-gradient-to-br from-hijaukan-green to-hijaukan-dark text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Partnership Program</h1>
          </div>
        </section>

        {/* SustainaTree */}
        <section id="sustainatree" className="py-16 px-4 scroll-mt-24">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-hijaukan-green">SustainaTree</h2>
              <p className="text-gray-700 leading-relaxed">
                {locale === 'id'
                  ? 'SustainaTree adalah Program kolaboratif dan partisipatif dengan korporasi untuk melakukan penanaman pohon yang berkelanjutan, transparan dan mudah'
                  : 'SustainaTree is a collaborative and participatory program with corporations for sustainable, transparent, and easy tree planting'}
              </p>
              <div className="bg-hijaukan-dark text-white inline-block px-4 py-2 rounded-lg font-semibold">
                We are support all your needs
              </div>
              <ul className="space-y-2 text-hijaukan-green">
                <li className="flex items-start gap-2"><span>•</span>Tree seedlings</li>
                <li className="flex items-start gap-2"><span>•</span>Ceremony events</li>
                <li className="flex items-start gap-2"><span>•</span>Detailed planting</li>
                <li className="flex items-start gap-2"><span>•</span>Tree monitoring & report</li>
                <li className="flex items-start gap-2"><span>•</span>Carbon Footprint Calculation & Consultation</li>
              </ul>
            </div>
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/E_WEB_11.png"
                alt="SustainaTree"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* CommuniTree Program */}
        <section id="communitree" className="py-16 px-4 bg-gray-50 scroll-mt-24">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl font-bold text-hijaukan-green">CommuniTree Program</h2>
              <p className="text-hijaukan-green font-semibold">
                {locale === 'id'
                  ? 'Saatnya Kamu Turun Tangan untuk Bumi'
                  : 'Time for You to Take Action for Earth'}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {locale === 'id'
                  ? 'Bergabunglah dalam CommuniTree Program, ruang bagi kamu yang ingin membuat perubahan nyata. Di sini, kamu bukan hanya belajar tentang keberlanjutan—kamu menjadi bagian dari solusi.'
                  : 'Join the CommuniTree Program, a space for those who want to make real change. Here, you don\'t just learn about sustainability—you become part of the solution.'}
              </p>
            </div>
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
              <Image
                src="/E_WEB_12.png"
                alt="CommuniTree"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Collaboration CTA */}
        <section className="py-16 px-4 bg-hijaukan-dark text-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Let&apos;s Collaborate</h2>
              <div className="space-y-2 text-sm">
                <p>Email: langkahrestorasibumi@gmail.com</p>
                <p>Telepon: 081809786141</p>
                <p>Alamat:</p>
                <p>Plaza Aminta lantai 5/505, Jl TB Simatupang kav. 10, Pondok Pinang, Kebayoran Lama, Jakarta Selatan. DKI Jakarta</p>
              </div>
              <p className="text-white/80 text-sm">
                {locale === 'id'
                  ? 'Email, telepon, atau isi formulir untuk mengetahui bagaimana KitaHijaukan dapat mendukung perjalanan keberlanjutan Anda.'
                  : 'Email, call, or fill in the form to learn how KitaHijaukan can support your sustainability journey.'}
              </p>
              <p className="text-white/60 text-xs">
                {locale === 'id'
                  ? '*Setelah mengisi formulir, tim kami akan menghubungi Anda dalam waktu 24 jam.'
                  : '*After filling the form, our team will contact you within 24 hours.'}
              </p>
            </div>
            <div className="bg-hijaukan-green rounded-2xl p-6 space-y-4">
              <div>
                <label className="block text-sm mb-1">{locale === 'id' ? 'Nama' : 'Name'}</label>
                <input type="text" className="w-full rounded-lg border-0 px-4 py-2 text-gray-800" />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input type="email" className="w-full rounded-lg border-0 px-4 py-2 text-gray-800" />
              </div>
              <div>
                <label className="block text-sm mb-1">No. Handphone</label>
                <input type="tel" className="w-full rounded-lg border-0 px-4 py-2 text-gray-800" />
              </div>
              <div>
                <label className="block text-sm mb-1">{locale === 'id' ? 'Nama Perusahaan' : 'Company Name'}</label>
                <input type="text" className="w-full rounded-lg border-0 px-4 py-2 text-gray-800" />
              </div>
              <div>
                <label className="block text-sm mb-1">{locale === 'id' ? 'Sampaikan yang Anda butuhkan disini' : 'Tell us what you need'}</label>
                <textarea rows={3} className="w-full rounded-lg border-0 px-4 py-2 text-gray-800" />
              </div>
              <button className="w-full bg-white text-hijaukan-green font-bold py-3 rounded-xl hover:bg-hijaukan-light transition-colors">
                {locale === 'id' ? 'Kirim' : 'Submit'}
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
