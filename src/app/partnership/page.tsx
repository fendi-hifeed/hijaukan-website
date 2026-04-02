"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLocale } from "../../i18n/LocaleProvider";
import { CheckCircle, Loader2 } from "lucide-react";

export default function PartnershipPage() {
  const { locale } = useLocale();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Load cached form data
  useEffect(() => {
    try {
      const cached = localStorage.getItem('hijaukan_form_data');
      if (cached) {
        const data = JSON.parse(cached);
        setFormData(prev => ({ ...prev, ...data, message: '' }));
      }
    } catch { /* ignore */ }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/partnership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      // Cache form data for next time
      try {
        localStorage.setItem('hijaukan_form_data', JSON.stringify({ name: formData.name, email: formData.email, phone: formData.phone, company: formData.company }));
      } catch { /* ignore */ }
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

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
                className="object-contain"
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
                className="object-contain"
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
                <p>Email: <a href="mailto:partnership@kitahijaukan.com" className="underline hover:text-white/80">partnership@kitahijaukan.com</a></p>
                <p>Telepon: <a href="https://wa.me/6285117626252?text=Halo%20KitaHijaukan%2C%20saya%20ingin%20bertanya%20tentang%20program%20partnership." className="underline hover:text-white/80">085117626252</a></p>
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
            <div className="bg-hijaukan-green rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 relative overflow-hidden">
              {status === 'success' && (
                <div className="absolute inset-0 bg-hijaukan-green z-10 flex flex-col items-center justify-center text-center p-6">
                  <CheckCircle size={48} className="text-white mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">{locale === 'id' ? 'Terkirim!' : 'Sent!'}</h3>
                  <p className="text-white/80 text-sm">{locale === 'id' ? 'Tim kami akan menghubungi Anda dalam 24 jam.' : 'Our team will contact you within 24 hours.'}</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">{locale === 'id' ? 'Nama' : 'Name'} *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full rounded-lg border-0 px-4 py-2.5 text-gray-800" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full rounded-lg border-0 px-4 py-2.5 text-gray-800" />
                </div>
                <div>
                  <label className="block text-sm mb-1">No. Handphone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full rounded-lg border-0 px-4 py-2.5 text-gray-800" />
                </div>
                <div>
                  <label className="block text-sm mb-1">{locale === 'id' ? 'Nama Perusahaan' : 'Company Name'}</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full rounded-lg border-0 px-4 py-2.5 text-gray-800" />
                </div>
                <div>
                  <label className="block text-sm mb-1">{locale === 'id' ? 'Sampaikan yang Anda butuhkan disini' : 'Tell us what you need'} *</label>
                  <textarea rows={3} name="message" value={formData.message} onChange={handleChange} required className="w-full rounded-lg border-0 px-4 py-2.5 text-gray-800" />
                </div>
                <button type="submit" disabled={status === 'loading'} className="w-full bg-white text-hijaukan-green font-bold py-3 rounded-xl hover:bg-hijaukan-light transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
                  {status === 'loading' ? <><Loader2 size={18} className="animate-spin" /> {locale === 'id' ? 'Mengirim...' : 'Sending...'}</> : (locale === 'id' ? 'Kirim' : 'Submit')}
                </button>
                {status === 'error' && (
                  <p className="text-red-200 text-sm text-center">{locale === 'id' ? 'Gagal mengirim. Coba lagi.' : 'Failed to send. Try again.'}</p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
