"use client";

import React, { useEffect, useRef } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import DonationHero from "../components/DonationHero";
import Programs from "../components/Programs";
import ProblemStatement from "../components/ProblemStatement";
import SolutionApproach from "../components/SolutionApproach";
import ImpactDetails from "../components/ImpactDetails";
import KitabisaEmbed from "../components/KitabisaEmbed";
import FloatingDonateButton from "../components/FloatingDonateButton";
import { useTranslations } from "../i18n/LocaleProvider";
import ImpactCounter from "../components/ImpactCounter";
import TestimonialStrip from "../components/TestimonialStrip";
import FAQSection from "../components/FAQSection";

const filterKitabisaErrors = (event: ErrorEvent | PromiseRejectionEvent) => {
  const message = 'reason' in event ? String(event.reason) : event.message;
  const source = 'filename' in event ? event.filename : undefined;

  if (!message) return false;

  const checks = [
    message.includes('Blocked a frame with origin "https://kitabisa.com"'),
    message.includes('window.fbq is not a function'),
    source?.includes('ads.tiktok.com'),
  ];

  const handleFilteredError = (evt: ErrorEvent | PromiseRejectionEvent) => {
    evt.preventDefault?.();
    const maybe = evt as unknown as { stopImmediatePropagation?: () => void };
    if (maybe && typeof maybe.stopImmediatePropagation === 'function') {
      maybe.stopImmediatePropagation();
    }
    return true;
  };

  if (checks.some(Boolean)) return handleFilteredError(event);

  return false;
};

export default function Home() {
  const donationSectionRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('donasi');

  useEffect(() => {
    const errorListener = (event: ErrorEvent) => {
      filterKitabisaErrors(event);
    };

    const rejectionListener = (event: PromiseRejectionEvent) => {
      filterKitabisaErrors(event);
    };

    window.addEventListener('error', errorListener, true);
    window.addEventListener('unhandledrejection', rejectionListener, true);

    return () => {
      window.removeEventListener('error', errorListener, true);
      window.removeEventListener('unhandledrejection', rejectionListener, true);
    };
  }, []);

  const scrollToDonation = () => {
    donationSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Problem data
  const problems = [
    {
      icon: "💧",
      title: t('problem1Title') as string,
      description: t('problem1Desc') as string
    },
    {
      icon: "🌫️",
      title: t('problem2Title') as string,
      description: t('problem2Desc') as string
    },
    {
      icon: "🌾",
      title: t('problem3Title') as string,
      description: t('problem3Desc') as string
    }
  ];

  // Solution approaches
  const approaches = [
    {
      step: "1",
      icon: "🤝",
      title: t('approach1Title') as string,
      description: t('approach1Desc') as string
    },
    {
      step: "2",
      icon: "🌱",
      title: t('approach2Title') as string,
      description: t('approach2Desc') as string
    },
    {
      step: "3",
      icon: "📊",
      title: t('approach3Title') as string,
      description: t('approach3Desc') as string
    }
  ];

  // Donation packages
  const donationPackages = [
    {
      id: "one-tree",
      amount: t('oneTreeCost') as string,
      title: t('oneTreeTitle') as string,
      description: t('oneTreeDesc') as string,
      impact: [
        t('oneTreeImpact1') as string,
        t('oneTreeImpact2') as string,
        t('oneTreeImpact3') as string,
        t('oneTreeImpact4') as string
      ]
    },
    {
      id: "five-trees",
      amount: t('fiveTreesCost') as string,
      title: t('fiveTreesTitle') as string,
      description: t('fiveTreesDesc') as string,
      impact: [
        t('fiveTreesImpact1') as string,
        t('fiveTreesImpact2') as string,
        t('fiveTreesImpact3') as string,
        t('fiveTreesImpact4') as string
      ],
      popular: true
    },
    {
      id: "custom",
      amount: t('customCost') as string,
      title: t('customTitle') as string,
      description: t('customDesc') as string,
      impact: [
        t('customImpact1') as string,
        t('customImpact2') as string,
        t('customImpact3') as string,
        t('customImpact4') as string
      ]
    }
  ];

  const handlePackageSelect = () => {
    scrollToDonation();
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <DonationHero
          title={t('heroTitle') as string}
          subtitle={t('heroSubtitle') as string}
          description={t('heroDescription') as string}
          ctaText={t('heroCtaText') as string}
          onCtaClick={scrollToDonation}
        />

        {/* Problem Statement */}
        <section id="challenges">
          <ProblemStatement
            title={t('problemSectionTitle') as string}
            problems={problems}
          />
        </section>

        {/* Solution Approach */}
        <section id="solution">
          <SolutionApproach
            title={t('solutionSectionTitle') as string}
            subtitle={t('solutionSectionSubtitle') as string}
            approaches={approaches}
            callToAction={t('solutionCallToAction') as string}
          />
        </section>

  {/* Programs Section (moved below Solution Approach) */}
  <Programs />

  {/* Impact Counter */}
  <ImpactCounter />

        {/* Impact Details & Packages */}
        <section id="benefits">
          <ImpactDetails
            title={t('impactTitle') as string}
            subtitle={t('impactSubtitle') as string}
            packages={donationPackages}
            onSelectPackage={handlePackageSelect}
          />
        </section>

        {/* Planting Locations (mapped from 'palatability' nav) */}
        <section id="palatability" className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-hijaukan-dark mb-4">{t('locationsTitle') as string}</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">{t('locationsDesc') as string}</p>
          </div>
        </section>

        {/* Stories Section (placeholder) */}
        <section id="stories" className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-hijaukan-dark mb-4">{t('storiesTitle') as string}</h2>
            <p className="text-gray-700 mb-6">{t('storiesDesc') as string}</p>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialStrip />

        {/* FAQ Section */}
        <FAQSection />

        {/* Kitabisa Embed */}
        <div ref={donationSectionRef} id="donation">
          <KitabisaEmbed
            campaignUrl="https://kitabisa.com/campaign/semangatrestorasihutan"
            title={t('kitabisaTitle') as string}
            subtitle={t('kitabisaSubtitle') as string}
          />
        </div>
      </main>
      <Footer />
      <FloatingDonateButton />
    </>
  );
}