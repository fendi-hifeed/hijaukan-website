"use client";

import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLocale } from "../../i18n/LocaleProvider";

export default function PrivacyPolicyPage() {
  const { locale } = useLocale();

  const lastUpdated = '14 Desember 2025';

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        <article className="max-w-3xl mx-auto px-4 py-16 prose prose-gray">
          <h1 className="text-3xl font-bold text-hijaukan-dark">
            {locale === 'id' ? 'KEBIJAKAN PRIVASI KITA HIJAUKAN' : 'KITA HIJAUKAN PRIVACY POLICY'}
          </h1>
          <p className="text-sm text-gray-500">{locale === 'id' ? `Terakhir diperbarui: ${lastUpdated}` : `Last updated: ${lastUpdated}`}</p>

          <p>
            {locale === 'id'
              ? 'KitaHijaukan berkomitmen melindungi privasi pengguna. Kebijakan ini menjelaskan bagaimana data dikumpulkan, digunakan, dan dijaga.'
              : 'KitaHijaukan is committed to protecting user privacy. This policy explains how data is collected, used, and maintained.'}
          </p>

          <h2>1. {locale === 'id' ? 'Informasi yang Kami Kumpulkan' : 'Information We Collect'}</h2>
          <p>{locale === 'id' ? 'Kami dapat mengumpulkan:' : 'We may collect:'}</p>
          <p><strong>a. {locale === 'id' ? 'Data yang Anda berikan' : 'Data you provide'}</strong></p>
          <ul>
            <li>{locale === 'id' ? 'Nama, email, nomor telepon, alamat (jika diperlukan untuk kegiatan lapangan).' : 'Name, email, phone number, address (if needed for field activities).'}</li>
            <li>{locale === 'id' ? 'Informasi donasi atau partisipasi program.' : 'Donation or program participation information.'}</li>
            <li>{locale === 'id' ? 'Data komunitas/organisasi jika Anda mendaftarkannya.' : 'Community/organization data if you register them.'}</li>
          </ul>
          <p><strong>b. {locale === 'id' ? 'Data otomatis' : 'Automatic data'}</strong></p>
          <ul>
            <li>{locale === 'id' ? 'Alamat IP, jenis perangkat, browser, halaman yang dikunjungi, waktu akses, dan data analitik lainnya.' : 'IP address, device type, browser, pages visited, access time, and other analytics data.'}</li>
          </ul>
          <p><strong>c. {locale === 'id' ? 'Data pihak ketiga' : 'Third-party data'}</strong></p>
          <p>{locale === 'id' ? 'Jika menggunakan layanan pembayaran, kami menerima konfirmasi pembayaran dari penyedia layanan tersebut.' : 'If using payment services, we receive payment confirmation from those service providers.'}</p>

          <h2>2. {locale === 'id' ? 'Penggunaan Informasi' : 'Use of Information'}</h2>
          <p>{locale === 'id' ? 'Data digunakan untuk:' : 'Data is used to:'}</p>
          <ul>
            <li>{locale === 'id' ? 'Mengelola akun dan partisipasi program;' : 'Manage accounts and program participation;'}</li>
            <li>{locale === 'id' ? 'Memproses donasi;' : 'Process donations;'}</li>
            <li>{locale === 'id' ? 'Mengirim laporan, update program, atau informasi penting;' : 'Send reports, program updates, or important information;'}</li>
            <li>{locale === 'id' ? 'Meningkatkan kualitas layanan dan keamanan sistem;' : 'Improve service quality and system security;'}</li>
            <li>{locale === 'id' ? 'Keperluan verifikasi atau audit program.' : 'Verification or program audit purposes.'}</li>
          </ul>
          <p>{locale === 'id' ? 'Kami tidak menjual atau menyewakan data pribadi Anda.' : 'We do not sell or rent your personal data.'}</p>

          <h2>3. {locale === 'id' ? 'Penyimpanan & Keamanan Data' : 'Data Storage & Security'}</h2>
          <p>{locale === 'id' ? 'Kami menerapkan langkah keamanan teknis dan administratif untuk melindungi data Anda.' : 'We implement technical and administrative security measures to protect your data.'}</p>
          <p>{locale === 'id' ? 'Namun, tidak ada sistem digital yang benar-benar 100% aman. Pengguna menyadari risiko keamanan yang melekat pada internet.' : 'However, no digital system is 100% secure. Users acknowledge the security risks inherent to the internet.'}</p>

          <h2>4. {locale === 'id' ? 'Berbagi Informasi kepada Pihak Ketiga' : 'Sharing Information with Third Parties'}</h2>
          <p>{locale === 'id' ? 'Informasi mungkin dibagikan jika:' : 'Information may be shared if:'}</p>
          <ul>
            <li>{locale === 'id' ? 'Diperlukan untuk menjalankan layanan (contoh: penyedia pembayaran, mitra lapangan);' : 'Required to run services (e.g., payment providers, field partners);'}</li>
            <li>{locale === 'id' ? 'Diminta oleh hukum, peraturan, atau proses hukum;' : 'Required by law, regulations, or legal process;'}</li>
            <li>{locale === 'id' ? 'Anda memberikan persetujuan.' : 'You provide consent.'}</li>
          </ul>
          <p>{locale === 'id' ? 'Kami hanya bekerja sama dengan pihak ketiga yang menjaga privasi dan keamanan data.' : 'We only work with third parties that maintain data privacy and security.'}</p>

          <h2>5. {locale === 'id' ? 'Hak Pengguna' : 'User Rights'}</h2>
          <p>{locale === 'id' ? 'Anda berhak untuk:' : 'You have the right to:'}</p>
          <ul>
            <li>{locale === 'id' ? 'Mengakses data pribadi yang kami simpan;' : 'Access personal data we store;'}</li>
            <li>{locale === 'id' ? 'Meminta perbaikan data yang salah;' : 'Request correction of incorrect data;'}</li>
            <li>{locale === 'id' ? 'Meminta penghapusan data tertentu (kecuali wajib disimpan karena regulasi);' : 'Request deletion of certain data (unless required by regulation);'}</li>
            <li>{locale === 'id' ? 'Menolak penggunaan data untuk komunikasi tertentu.' : 'Object to data use for certain communications.'}</li>
          </ul>

          <h2>6. {locale === 'id' ? 'Cookies & Teknologi Pelacakan' : 'Cookies & Tracking Technologies'}</h2>
          <p>{locale === 'id' ? 'Situs kami mungkin menggunakan cookies untuk meningkatkan pengalaman pengguna.' : 'Our site may use cookies to enhance user experience.'}</p>
          <p>{locale === 'id' ? 'Anda dapat menonaktifkan cookies lewat pengaturan browser, tetapi beberapa fitur mungkin tidak berjalan optimal.' : 'You can disable cookies through browser settings, but some features may not work optimally.'}</p>

          <h2>7. {locale === 'id' ? 'Tautan ke Situs Lain' : 'Links to Other Sites'}</h2>
          <p>{locale === 'id' ? 'Situs dapat berisi tautan ke pihak ketiga. Kami tidak bertanggung jawab atas kebijakan privasi dan konten situs pihak tersebut.' : 'The site may contain links to third parties. We are not responsible for the privacy policies and content of those sites.'}</p>

          <h2>8. {locale === 'id' ? 'Perubahan Kebijakan Privasi' : 'Changes to Privacy Policy'}</h2>
          <p>{locale === 'id' ? 'KitaHijaukan dapat memperbarui kebijakan ini sewaktu-waktu. Perubahan berlaku sejak dipublikasikan di situs.' : 'KitaHijaukan may update this policy at any time. Changes take effect upon publication on the site.'}</p>

          <h2>9. {locale === 'id' ? 'Kontak Kami' : 'Contact Us'}</h2>
          <p>{locale === 'id' ? 'Untuk pertanyaan terkait privasi, penggunaan data, atau permintaan akses/hapus data, Anda dapat menghubungi kami melalui halaman Kontak Kami di website.' : 'For questions regarding privacy, data use, or access/deletion requests, you can contact us through the Contact Us page on the website.'}</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
