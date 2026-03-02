"use client";

import React from 'react';
import Link from 'next/link';
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useLocale } from "../../../i18n/LocaleProvider";

export default function JurangjeroReportPage() {
    const { locale } = useLocale();

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50 pt-24 pb-16">

                {/* HERO SECTION */}
                <section className="relative w-full max-w-6xl mx-auto px-4 mb-16">
                    <div className="bg-gradient-to-br from-hijaukan-dark to-hijaukan-green text-white rounded-3xl p-8 md:p-12 overflow-hidden shadow-xl relative">
                        {/* Decals */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-hijaukan-light/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

                        <div className="relative z-10 max-w-3xl">
                            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                                🌳 {locale === 'id' ? 'Laporan Proyek' : 'Project Update'}
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                {locale === 'id' ? 'Proyeksi Sekuestrasi Karbon: Jurangjero' : 'Carbon Sequestration Projections: Jurangjero'}
                            </h1>
                            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                                {locale === 'id'
                                    ? 'Kami telah merampungkan analisis cadangan karbon Above Ground (ABG) untuk inisiatif penanaman KitaHijaukan x Jogja Kelana pada 14 Feb 2026. Berikut adalah rincian proyeksi dampak yang dihasilkan selama siklus hidup 30 tahun.'
                                    : "We’ve finalized the Above Ground (ABG) carbon stock analysis for the KitaHijaukan x Jogja Kelana planting initiative event on 14 Feb 26. Here is the breakdown of our projected impact over the 30-year lifecycle."}
                            </p>
                        </div>
                    </div>
                </section>

                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* MAIN CONTENT (LEFT COLUMN) */}
                    <div className="lg:col-span-2 space-y-10">

                        {/* SECTION: Total Carbon Stock */}
                        <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-full bg-hijaukan-green/10 flex items-center justify-center text-hijaukan-green text-2xl">
                                    📍
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">
                                    {locale === 'id' ? 'Total Cadangan Karbon (tC)' : 'Total Carbon Stock (tC)'}
                                </h2>
                            </div>
                            <p className="text-gray-600 mb-8">
                                {locale === 'id'
                                    ? 'Biomassa diperkirakan akan meningkat secara signifikan seiring berjalannya proyek:'
                                    : 'The biomass is expected to scale significantly as the project matures:'}
                            </p>

                            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                                {(() => {
                                    const currentYear = new Date().getFullYear();
                                    const startYear = 2026;
                                    const yearDiff = Math.max(0, currentYear - startYear);

                                    const timeline = [
                                        { label: "Year 0", value: "0.0003 tC", min: 0, max: 0 },
                                        { label: "Years 1–5", value: "0.209 tC", min: 1, max: 5 },
                                        { label: "Years 6–10", value: "0.504 tC", min: 6, max: 10 },
                                        { label: "Years 11–20", value: "0.958 tC", min: 11, max: 20 },
                                        { label: "Years 20–30", value: "2.067 tC 🚀", min: 21, max: 30, isHighlight: true },
                                    ];

                                    return timeline.map((item, index) => {
                                        let isCurrent = yearDiff >= item.min && yearDiff <= item.max;
                                        // Highlight the last item if we are beyond year 30
                                        if (index === timeline.length - 1 && yearDiff > item.max) {
                                            isCurrent = true;
                                        }

                                        const displayLabel = isCurrent ? `${item.label} (${locale === 'id' ? 'Saat ini' : 'Current'})` : item.label;

                                        return (
                                            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white ${isCurrent && !item.isHighlight ? 'bg-hijaukan-dark ring-4 ring-hijaukan-dark/20' : 'bg-hijaukan-green'} text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-500`}>
                                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                                </div>
                                                <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border ${item.isHighlight ? 'border-hijaukan-green bg-hijaukan-green/5 ring-2 ring-hijaukan-green' : (isCurrent ? 'border-hijaukan-dark bg-gray-50 ring-1 ring-hijaukan-dark/30 shadow-md' : 'border-gray-100 shadow-sm')} transition duration-300 hover:shadow-md`}>
                                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                                                        <span className={`font-semibold ${isCurrent && !item.isHighlight ? 'text-hijaukan-dark' : 'text-gray-700'}`}>{displayLabel}</span>
                                                        <span className={`font-bold mt-1 md:mt-0 ${item.isHighlight ? 'text-hijaukan-green text-lg' : 'text-gray-900'}`}>{item.value}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    });
                                })()}
                            </div>
                        </section>

                        {/* SECTION: Total CO2 Sequestration */}
                        <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 text-2xl">
                                    🌍
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">
                                    {locale === 'id' ? 'Total Penyerapan CO2 (tCO2e)' : 'Total CO2 Sequestration (tCO2e)'}
                                </h2>
                            </div>
                            <p className="text-gray-600 mb-6">
                                {locale === 'id'
                                    ? 'Menggunakan faktor konversi standar 44/12, total karbon di atmosfer yang diserap adalah:'
                                    : 'Using the standard 44/12 conversion factor, the total atmospheric carbon removed is:'}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
                                    <p className="text-sm font-medium text-gray-500 mb-2">Current</p>
                                    <p className="text-2xl font-bold text-gray-800">0.001</p>
                                    <p className="text-xs text-gray-400 mt-1">tCO2e</p>
                                </div>
                                <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
                                    <p className="text-sm font-medium text-gray-500 mb-2">By Year 10</p>
                                    <p className="text-3xl font-bold text-hijaukan-dark">1.848</p>
                                    <p className="text-xs text-gray-400 mt-1">tCO2e</p>
                                </div>
                                <div className="bg-hijaukan-green/10 rounded-2xl p-6 text-center border border-hijaukan-green/20">
                                    <p className="text-sm font-semibold text-hijaukan-green mb-2">By Year 30 (Project Maturity)</p>
                                    <p className="text-4xl font-black text-hijaukan-green">7.579</p>
                                    <p className="text-xs text-hijaukan-green/80 mt-1">tCO2e</p>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* SIDEBAR (RIGHT COLUMN) */}
                    <div className="space-y-8">

                        {/* Real World Equivalents */}
                        <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="text-2xl">💡</div>
                                    <h3 className="text-xl font-bold text-gray-800">
                                        {locale === 'id' ? 'Ekuivalen di Dunia Nyata' : 'Real-World Equivalents'}
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600 mb-6">
                                    {locale === 'id'
                                        ? 'Untuk memberikan gambaran jelas, 7.579 ton dampak CO2 ini setara dengan:'
                                        : 'To put our 7.579 tons of CO2 impact into perspective, this is equivalent to:'}
                                </p>

                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-xl shrink-0">🚗</div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 text-sm">{locale === 'id' ? 'Mengemudi Kendaraan' : 'Driving'}</h4>
                                            <p className="text-sm text-gray-600 mt-1">
                                                {locale === 'id' ? '18.947 mil (sekitar 30.492 km) menggunakan mobil penumpang bensin rata-rata.' : '18,947 miles (approx. 30,492 km) in an average gasoline passenger vehicle.'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center text-xl shrink-0">💡</div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 text-sm">{locale === 'id' ? 'Pencahayaan' : 'Lighting'}</h4>
                                            <p className="text-sm text-gray-600 mt-1">
                                                {locale === 'id' ? 'Menyalakan 155 bohlam LED (10W) terus-menerus selama 10 tahun.' : 'Running 155 LED bulbs (10W) continuously for 10 years.'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-xl shrink-0">📱</div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 text-sm">{locale === 'id' ? 'Ponsel Pintar' : 'Smartphones'}</h4>
                                            <p className="text-sm text-gray-600 mt-1">
                                                {locale === 'id' ? 'Mengisi daya smartphone 921.823 kali dari 0% hingga 100%.' : 'Charging a smartphone 921,823 times from 0% to 100%.'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Disclaimer */}
                        <section className="bg-orange-50 rounded-3xl p-6 border border-orange-100">
                            <div className="flex items-center gap-2 mb-4 text-orange-600">
                                <div className="text-xl">⚠️</div>
                                <h3 className="font-bold">{locale === 'id' ? 'Penafian Penting' : 'Important Disclaimer'}</h3>
                            </div>
                            <div className="space-y-3 text-sm text-orange-800/80">
                                <p>
                                    <strong className="text-orange-900">Scenario:</strong> {locale === 'id' ? 'Angka-angka ini mewakili Skenario Optimis, dengan asumsi kondisi pertumbuhan ideal, tingkat kelangsungan hidup yang tinggi, dan akumulasi biomassa maksimum.' : 'These figures represent an Optimistic Scenario, assuming ideal growth conditions, high survival rates, and maximum biomass accumulation.'}
                                </p>
                                <p>
                                    <strong className="text-orange-900">Data Source:</strong> {locale === 'id' ? 'Ini adalah perkiraan kasar berdasarkan data sekunder yang tersedia dan model pertumbuhan umum. Penyerapan sebenarnya dapat bervariasi bergantung pada curah hujan, iklim mikro, kondisi tanah spesifik lokasi, dan protokol pemeliharaan.' : 'This is a rough estimate based on available secondary data and generalized growth models. Actual sequestration may vary based on site-specific soil conditions, local climate, and maintenance protocols.'}
                                </p>
                            </div>
                        </section>

                        {/* References */}
                        <section className="bg-gray-50 rounded-3xl p-6 border border-gray-200 text-xs text-gray-500">
                            <h3 className="font-bold text-gray-700 mb-3 text-sm">References:</h3>
                            <ul className="space-y-3 pl-4 list-disc marker:text-gray-300">
                                <li>Merrill, M. D., et al. (2024). Federal lands greenhouse gas emissions and sequestration: Estimates for 2005–22. USGS Scientific Investigations Report.</li>
                                <li>Smolen, K. A., et al. (2024). Shifting gears to green: A pilot study on decarbonizing patient transport. The Journal of Climate Change and Health.</li>
                                <li>Gbadamosi, S. L., & Nwulu, N. I. (2025). Carbon footprint assessment of smart building technologies: Lighting and HVAC. Sustainable Energy Technologies.</li>
                                <li>Qu, S., et al. (2024). Life cycle assessment of consumer electronics: From smartphones to smart homes. Journal of Cleaner Production.</li>
                            </ul>
                        </section>

                    </div>
                </div>

                {/* Explore More Programs CTA */}
                <div className="max-w-4xl mx-auto mt-16 px-4 text-center">
                    <Link
                        href="/individual"
                        className="inline-flex items-center gap-2 bg-white text-hijaukan-dark border-2 border-hijaukan-green px-8 py-4 rounded-full font-bold hover:bg-hijaukan-green hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        {locale === 'id' ? 'Eksplorasi Program Kita Hijaukan' : 'Explore Kita Hijaukan Programs'}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                </div>

            </main>
            <Footer />
        </>
    );
}
