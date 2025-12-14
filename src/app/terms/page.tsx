"use client";

import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLocale } from "../../i18n/LocaleProvider";

export default function TermsPage() {
  const { locale } = useLocale();

  const lastUpdated = '14 Desember 2025';

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        <article className="max-w-3xl mx-auto px-4 py-16 prose prose-gray">
          <h1 className="text-3xl font-bold text-hijaukan-dark">
            {locale === 'id' ? 'SYARAT & KETENTUAN KITA HIJAUKAN' : 'KITA HIJAUKAN TERMS & CONDITIONS'}
          </h1>
          <p className="text-sm text-gray-500">{locale === 'id' ? `Terakhir diperbarui: ${lastUpdated}` : `Last updated: ${lastUpdated}`}</p>

          <h2>1. {locale === 'id' ? 'Penerimaan Syarat' : 'Acceptance of Terms'}</h2>
          <p>
            {locale === 'id'
              ? 'Dengan mengakses dan menggunakan situs KitaHijaukan, Anda menyatakan telah membaca, memahami, dan menyetujui Syarat & Ketentuan ini. Jika tidak setuju, mohon untuk tidak melanjutkan penggunaan situs.'
              : 'By accessing and using the KitaHijaukan site, you confirm that you have read, understood, and agreed to these Terms & Conditions. If you do not agree, please do not continue using the site.'}
          </p>

          <h2>2. {locale === 'id' ? 'Definisi' : 'Definitions'}</h2>
          <ul>
            <li>{locale === 'id' ? 'KitaHijaukan: Pengelola situs dan seluruh layanan yang disediakan.' : 'KitaHijaukan: Site operator and all services provided.'}</li>
            <li>{locale === 'id' ? 'Pengguna: Individu atau pihak mana pun yang mengakses situs.' : 'User: Any individual or party accessing the site.'}</li>
            <li>{locale === 'id' ? 'Layanan: Seluruh fitur seperti donasi, kampanye hijau, edukasi, program komunitas, dan aktivitas lainnya.' : 'Services: All features such as donations, green campaigns, education, community programs, and other activities.'}</li>
            <li>{locale === 'id' ? 'Konten: Semua materi berupa tulisan, gambar, video, dan elemen lain di dalam situs.' : 'Content: All materials including text, images, videos, and other elements on the site.'}</li>
          </ul>

          <h2>3. {locale === 'id' ? 'Penggunaan Situs' : 'Site Usage'}</h2>
          <p>{locale === 'id' ? 'Pengguna setuju untuk:' : 'User agrees to:'}</p>
          <ul>
            <li>{locale === 'id' ? 'Menggunakan situs hanya untuk tujuan yang sah.' : 'Use the site only for legitimate purposes.'}</li>
            <li>{locale === 'id' ? 'Tidak melakukan tindakan yang merusak sistem, mengganggu layanan, atau melanggar hak pihak lain.' : 'Not take actions that damage the system, disrupt services, or violate the rights of others.'}</li>
            <li>{locale === 'id' ? 'Bertanggung jawab atas keamanan akun (jika memiliki akun).' : 'Be responsible for account security (if having an account).'}</li>
          </ul>
          <p>{locale === 'id' ? 'KitaHijaukan berhak menghentikan atau membatasi akses pengguna yang melanggar aturan.' : 'KitaHijaukan reserves the right to terminate or restrict access for users who violate the rules.'}</p>

          <h2>4. {locale === 'id' ? 'Hak Kekayaan Intelektual' : 'Intellectual Property Rights'}</h2>
          <p>{locale === 'id' ? 'Semua konten yang tampil di situs adalah milik KitaHijaukan atau pihak yang bekerja sama.' : 'All content displayed on the site belongs to KitaHijaukan or its partners.'}</p>
          <p>{locale === 'id' ? 'Dilarang menggunakan, menyalin, mendistribusikan, atau memodifikasi konten tanpa izin tertulis.' : 'Prohibited to use, copy, distribute, or modify content without written permission.'}</p>

          <h2>5. {locale === 'id' ? 'Program, Donasi, & Kampanye' : 'Programs, Donations, & Campaigns'}</h2>
          <ul>
            <li>{locale === 'id' ? 'Setiap donasi atau kampanye mengikuti aturan yang dicantumkan pada halaman program masing-masing.' : 'Each donation or campaign follows the rules stated on each program page.'}</li>
            <li>{locale === 'id' ? 'KitaHijaukan tidak menjamin semua program mencapai target.' : 'KitaHijaukan does not guarantee all programs will reach their targets.'}</li>
            <li>{locale === 'id' ? 'Dana yang masuk akan dikelola sesuai amanat program dan dilaporkan secara berkala.' : 'Funds received will be managed according to program mandate and reported periodically.'}</li>
            <li>{locale === 'id' ? 'Risiko penyalahgunaan oleh pihak ketiga menjadi tanggung jawab penyelenggara program terkait, namun KitaHijaukan berhak melakukan pengecekan atau penghentian kampanye bila ditemukan indikasi pelanggaran.' : 'Risk of misuse by third parties is the responsibility of the related program organizer, but KitaHijaukan reserves the right to check or stop campaigns if violations are indicated.'}</li>
          </ul>

          <h2>6. {locale === 'id' ? 'Pembatasan Tanggung Jawab' : 'Limitation of Liability'}</h2>
          <p>{locale === 'id' ? 'KitaHijaukan berupaya menyediakan informasi yang akurat dan layanan yang stabil. Namun kami tidak menjamin:' : 'KitaHijaukan strives to provide accurate information and stable services. However, we do not guarantee:'}</p>
          <ul>
            <li>{locale === 'id' ? 'Seluruh informasi selalu terbaru atau bebas kesalahan;' : 'All information is always up to date or error-free;'}</li>
            <li>{locale === 'id' ? 'Layanan selalu berjalan tanpa gangguan teknis;' : 'Services always run without technical disruptions;'}</li>
            <li>{locale === 'id' ? 'Kerugian langsung/tidak langsung akibat penggunaan situs.' : 'Direct/indirect losses due to site usage.'}</li>
          </ul>
          <p>{locale === 'id' ? 'Pengguna bertanggung jawab penuh atas keputusan yang diambil berdasarkan informasi di situs.' : 'Users are fully responsible for decisions made based on information on the site.'}</p>

          <h2>7. {locale === 'id' ? 'Perubahan Syarat & Ketentuan' : 'Changes to Terms & Conditions'}</h2>
          <p>{locale === 'id' ? 'KitaHijaukan dapat memperbarui syarat ini sewaktu-waktu. Perubahan berlaku sejak dipublikasikan di situs. Pengguna dianggap menyetujui perubahan saat terus menggunakan layanan.' : 'KitaHijaukan may update these terms at any time. Changes take effect upon publication on the site. Users are deemed to accept changes by continuing to use the services.'}</p>

          <h2>8. {locale === 'id' ? 'Penghentian & Penangguhan Akun' : 'Account Suspension & Termination'}</h2>
          <p>{locale === 'id' ? 'KitaHijaukan dapat menangguhkan atau menonaktifkan akun/program jika terjadi:' : 'KitaHijaukan may suspend or deactivate accounts/programs if:'}</p>
          <ul>
            <li>{locale === 'id' ? 'Pelanggaran kebijakan,' : 'Policy violations,'}</li>
            <li>{locale === 'id' ? 'Aktivitas mencurigakan,' : 'Suspicious activities,'}</li>
            <li>{locale === 'id' ? 'Penyalahgunaan layanan.' : 'Service abuse.'}</li>
          </ul>

          <h2>9. {locale === 'id' ? 'Laporan & Pengaduan' : 'Reports & Complaints'}</h2>
          <p>{locale === 'id' ? 'Pengguna dapat menghubungi kami untuk melaporkan pelanggaran, penyalahgunaan dana, atau masalah lain. Kami akan meninjau dan menindaklanjuti laporan sesuai kebijakan internal.' : 'Users can contact us to report violations, misuse of funds, or other issues. We will review and follow up on reports according to internal policies.'}</p>

          <h2>10. {locale === 'id' ? 'Hukum yang Berlaku' : 'Applicable Law'}</h2>
          <p>{locale === 'id' ? 'Dokumen ini diatur oleh hukum Republik Indonesia. Segala sengketa akan diselesaikan melalui jalur hukum sesuai peraturan yang berlaku.' : 'This document is governed by the laws of the Republic of Indonesia. Any disputes will be resolved through legal channels according to applicable regulations.'}</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
