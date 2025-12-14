"use client";

import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FAQSection from "../../components/FAQSection";

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
