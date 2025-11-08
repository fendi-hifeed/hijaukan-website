'use client';

import React from 'react';
import { useLocale } from '../i18n/LocaleProvider';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  avatar: string;
}

const TestimonialStrip: React.FC = () => {
  const { locale } = useLocale();

  const testimonials: Record<'en' | 'id', Testimonial[]> = {
    id: [
      {
        id: '1',
        name: 'Pak Sutrisno',
        role: 'Petani',
        location: 'Gunungkidul, Yogyakarta',
        quote: 'Program HIJAUkan telah membantu lahan saya yang kritis. Sekarang lebih hijau dan produktif. Terima kasih kepada semua donatur!',
        avatar: '👨‍🌾'
      },
      {
        id: '2',
        name: 'Ibu Siti',
        role: 'Ketua Kelompok Tani',
        location: 'Purworejo, Jawa Tengah',
        quote: 'Kami sangat terbantu dengan pendampingan dan bibit pohon. Komunitas kami sekarang punya harapan baru untuk lahan yang lebih sehat.',
        avatar: '👩‍🌾'
      },
      {
        id: '3',
        name: 'Ahmad Fauzi',
        role: 'Relawan Lingkungan',
        location: 'Bandung, Jawa Barat',
        quote: 'Senang bisa menjadi bagian dari gerakan ini. Setiap pohon yang ditanam adalah investasi untuk masa depan anak cucu kita.',
        avatar: '🌱'
      }
    ],
    en: [
      {
        id: '1',
        name: 'Mr. Sutrisno',
        role: 'Farmer',
        location: 'Gunungkidul, Yogyakarta',
        quote: 'The HIJAUkan program has helped my critical land. Now it\'s greener and more productive. Thank you to all donors!',
        avatar: '👨‍🌾'
      },
      {
        id: '2',
        name: 'Mrs. Siti',
        role: 'Farmer Group Leader',
        location: 'Purworejo, Central Java',
        quote: 'We are very helped by the mentoring and tree seedlings. Our community now has new hope for healthier land.',
        avatar: '👩‍🌾'
      },
      {
        id: '3',
        name: 'Ahmad Fauzi',
        role: 'Environmental Volunteer',
        location: 'Bandung, West Java',
        quote: 'Happy to be part of this movement. Every tree planted is an investment for the future of our children and grandchildren.',
        avatar: '🌱'
      }
    ]
  };

  const currentTestimonials = testimonials[locale];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-hijaukan-dark mb-4">
            {locale === 'id' ? 'Suara dari Lapangan' : 'Voices from the Field'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === 'id' 
              ? 'Kisah nyata dari petani dan komunitas yang merasakan dampak program restorasi lahan' 
              : 'Real stories from farmers and communities experiencing the impact of land restoration programs'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {currentTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-hijaukan-light/20 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-hijaukan-light"
            >
              <div className="flex items-center mb-4">
                <div className="text-5xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h3 className="font-bold text-hijaukan-dark text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">📍 {testimonial.location}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic border-l-4 border-hijaukan-green pl-4">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            {locale === 'id' 
              ? '✨ Bergabunglah dengan ratusan petani dan komunitas yang sudah merasakan manfaatnya' 
              : '✨ Join hundreds of farmers and communities who have experienced the benefits'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialStrip;
