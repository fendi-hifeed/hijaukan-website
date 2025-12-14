"use client";

import React, { useState } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLocale } from "../../i18n/LocaleProvider";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const { locale } = useLocale();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Terjadi kesalahan");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);

    } catch (error: Error | unknown) {
      setStatus("error");
      const errorMsg = error instanceof Error ? error.message : "Gagal mengirim pesan. Silakan coba lagi.";
      setErrorMessage(errorMsg);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <span className="text-hijaukan-green font-semibold tracking-wider uppercase text-sm">
                  {locale === 'id' ? 'Hubungi Kami' : 'Contact Us'}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                  {locale === 'id' ? 'Mari Berkolaborasi' : 'Let\'s Collaborate'}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {locale === 'id' 
                    ? 'Punya ide untuk kolaborasi atau ingin tahu lebih banyak tentang program kami? Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda.'
                    : 'Have an idea for collaboration or want to know more about our programs? Don\'t hesitate to contact us. Our team is ready to help you.'}
                </p>

                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {locale === 'id' ? 'Kantor Pusat' : 'Headquarters'}
                  </h3>
                  <p className="text-gray-600 mb-2">Plaza Aminta lantai 5/505</p>
                  <p className="text-gray-600 mb-2">Jl TB Simatupang kav. 10</p>
                  <p className="text-gray-600 mb-6">Pondok Pinang, Kebayoran Lama, Jakarta Selatan</p>

                  <div className="space-y-2">
                    <p className="text-gray-600"><span className="font-semibold text-gray-900">Email:</span> langkahrestorasibumi@gmail.com</p>
                    <p className="text-gray-600"><span className="font-semibold text-gray-900">{locale === 'id' ? 'Telepon' : 'Phone'}:</span> 081809786141</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
                {status === "success" && (
                  <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {locale === 'id' ? 'Pesan Terkirim!' : 'Message Sent!'}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {locale === 'id' 
                        ? 'Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.'
                        : 'Thank you for contacting us. Our team will respond to your message shortly.'}
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-hijaukan-green font-semibold hover:underline"
                    >
                      {locale === 'id' ? 'Kirim pesan lain' : 'Send another message'}
                    </button>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        {locale === 'id' ? 'Nama Lengkap' : 'Full Name'}
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-hijaukan-green focus:border-transparent outline-none transition-all"
                        placeholder={locale === 'id' ? 'Nama Anda' : 'Your name'}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-hijaukan-green focus:border-transparent outline-none transition-all"
                        placeholder="email@contoh.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      {locale === 'id' ? 'Subjek' : 'Subject'}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-hijaukan-green focus:border-transparent outline-none transition-all"
                      placeholder={locale === 'id' ? 'Judul Pesan' : 'Message title'}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {locale === 'id' ? 'Pesan' : 'Message'}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-hijaukan-green focus:border-transparent outline-none transition-all"
                      placeholder={locale === 'id' ? 'Tulis pesan Anda di sini...' : 'Write your message here...'}
                    ></textarea>
                  </div>

                  {status === "error" && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center gap-2 text-sm">
                      <AlertCircle size={16} />
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-hijaukan-green text-white font-semibold py-4 rounded-lg hover:bg-hijaukan-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        {locale === 'id' ? 'Mengirim...' : 'Sending...'}
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        {locale === 'id' ? 'Kirim Pesan' : 'Send Message'}
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
