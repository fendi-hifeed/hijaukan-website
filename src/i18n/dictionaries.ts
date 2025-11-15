export type Locale = 'en' | 'id';

export interface NavDict {
	challenges: string;
	solution: string;
	programs?: string;
	benefits: string;
	palatability: string;
	timeline: string;
	careers: string;
	donateCta?: string;
	language: string;
}

export interface TimelineStep {
	phase: string;
	title: string;
	description: string;
	duration: string;
}

export interface FooterDict {
	about: string;
	addressTitle: string;
	company: string;
	address: string;
	email: string;
	copyright: string;
	solutionsMenu: string;
	feedTech: string;
	costReduction: string;
	carbonImpact: string;
	successStories: string;
	supportMenu: string;
	privacyPolicy: string;
	termsOfService: string;
	contact: string;
	partnersTitle?: string;
	partnersDesc?: string;
}

export interface DonasiDict {
	heroTitle: string;
	heroSubtitle: string;
	heroDescription: string;
	heroCtaText: string;
	
	// Problems
	problem1Title: string;
	problem1Desc: string;
	problem2Title: string;
	problem2Desc: string;
	problem3Title: string;
	problem3Desc: string;
	problemSectionTitle: string;
	
	// Solution
	solutionSectionTitle: string;
	solutionSectionSubtitle: string;
	solutionCallToAction: string;
	approach1Title: string;
	approach1Desc: string;
	approach2Title: string;
	approach2Desc: string;
	approach3Title: string;
	approach3Desc: string;

	// Timeline
	timelineTitle: string;
	timelineSubtitle: string;
	timelineCta: string;
	timelineSteps: TimelineStep[];
	
	// Impact Details
	impactTitle: string;
	impactSubtitle: string;
	oneTreeCost: string;
	oneTreeTitle: string;
	oneTreeDesc: string;
	oneTreeImpact1: string;
	oneTreeImpact2: string;
	oneTreeImpact3: string;
	oneTreeImpact4: string;
	fiveTreesCost: string;
	fiveTreesTitle: string;
	fiveTreesDesc: string;
	fiveTreesImpact1: string;
	fiveTreesImpact2: string;
	fiveTreesImpact3: string;
	fiveTreesImpact4: string;
	customCost: string;
	customTitle: string;
	customDesc: string;
	customImpact1: string;
	customImpact2: string;
	customImpact3: string;
	customImpact4: string;
	popularBadge: string;
	selectPackageBtn: string;
	highlight1Title: string;
	highlight1Desc: string;
	highlight2Title: string;
	highlight2Desc: string;
	highlight3Title: string;
	highlight3Desc: string;
	highlight4Title: string;
	highlight4Desc: string;
	urgencyTitle: string;
	urgencyDesc: string;
	urgencyCta: string;
	
	// Planting Locations
	locationsTitle: string;
	locationsDesc: string;
	
	// Kitabisa
	kitabisaTitle: string;
	kitabisaSubtitle: string;
	kitabisaTrust1: string;
	kitabisaTrust1Desc: string;
	kitabisaTrust2: string;
	kitabisaTrust2Desc: string;
	kitabisaTrust3: string;
	kitabisaTrust3Desc: string;
	kitabisaHashtag: string;
	kitabisaHashtagDesc: string;
	kitabisaDirectText: string;
	kitabisaDirectBtn: string;
	kitabisaSocial1Title: string;
	kitabisaSocial1Desc: string;
	kitabisaSocial2Title: string;
	kitabisaSocial2Desc: string;
	kitabisaFinalTitle: string;
	kitabisaFinalDesc: string;
}

export interface Dictionary {
	nav: NavDict;
	footer: FooterDict;
	donasi: DonasiDict;
}

export const dictionaries: Record<Locale, Dictionary> = {
	en: {
		nav: {
				challenges: 'Land Challenges',
				solution: 'Our Solution',
				programs: 'Programs',
				benefits: 'Restoration Benefits',
				palatability: 'Planting Locations',
			timeline: 'Project Timeline',
			careers: 'Careers',
			donateCta: 'Donate Now',
			language: 'Language',
		},
		footer: {
			about: 'Pioneering land restoration initiatives with communities and partners.',
			addressTitle: 'Organization',
			company: 'Yayasan Langkah Restorasi Bumi',
			address: 'Indonesia',
			email: '',
			copyright: 'All rights reserved.',
			solutionsMenu: 'Programs',
			feedTech: 'Restoration Program',
			costReduction: 'Restoration Benefits',
			carbonImpact: 'Restoration Impact',
			successStories: 'Project Timeline',
			supportMenu: 'Support',
			privacyPolicy: 'Privacy Policy',
			termsOfService: 'Terms of Service',
			contact: 'Contact',
			partnersTitle: 'Partners',
			partnersDesc: 'Trusted partners and supporters',
		},
		donasi: {
			heroTitle: 'KitaHIJAUkan Indonesia: Restore Land, Guard Climate',
			heroSubtitle: 'Critical land keeps expanding—so must our response.',
			heroDescription: 'Degraded soil means floods, crop loss, and stalled climate goals. Your donation revives the land and the farmers caring for it.',
			heroCtaText: 'Start Contributing Now',
			
			problemSectionTitle: 'Save Critical Lands Now',
			problem1Title: 'Water Absorption Collapse',
			problem1Desc: 'Damaged soil cannot hold rain, so floods arrive faster and droughts drag longer.',
			problem2Title: 'Carbon Sink Vanishes',
			problem2Desc: 'Without trees, the land stops absorbing carbon and heat lingers in our air.',
			problem3Title: 'Food Supply Disruption',
			problem3Desc: 'Missing soil nutrients shrink harvests and push food prices higher.',
			
			solutionSectionTitle: 'KitaHIJAUkan Indonesia Program',
			solutionSectionSubtitle: 'Simple path: map, plant, care, and share the progress.',
			solutionCallToAction: "Let's together we can KitaHIJAUkan Indonesia",
			approach1Title: 'Collaboration with Farmers & Communities',
			approach1Desc: 'Local farmers lead each plot so the benefits stay with the village.',
			approach2Title: 'Structured & Measured Planting',
			approach2Desc: 'Trees grow on mapped acres with one-year care already funded.',
			approach3Title: 'Monitoring & Full Transparency',
			approach3Desc: 'Every phase is documented and shared openly on Instagram @kitahijaukan.',
			
			timelineTitle: 'Project Journey',
			timelineSubtitle: 'Track how your rupiah moves from mapping to public reporting.',
			timelineCta: 'Support the next phase',
			timelineSteps: [
				{ phase: '01', title: 'Map & agree', description: 'Survey critical plots, sign farmer consent, and log baselines.', duration: 'Week 1' },
				{ phase: '02', title: 'Nursery & prep', description: 'Grow seedlings, fix soil structure, and stage tools on-site.', duration: 'Week 2-4' },
				{ phase: '03', title: 'Plant & care', description: 'Plant mixed species, water weekly, and record growth with locals.', duration: 'Month 2-4' },
				{ phase: '04', title: 'Report & loop', description: 'Publish progress, invite visits, and roll learnings into the next batch.', duration: 'Month 5+' },
			],
			
			impactTitle: 'Your Contribution Details',
			impactSubtitle: 'Each package funds planting plus farmer labor on the ground',
			oneTreeCost: 'IDR 50,000',
			oneTreeTitle: 'One Tree of Hope',
			oneTreeDesc: '1 Tree + 1 Year Care',
			oneTreeImpact1: 'Funds 1 complete tree',
			oneTreeImpact2: 'Intensive 12-month care',
			oneTreeImpact3: 'Digital contribution certificate',
			oneTreeImpact4: 'Progress updates via Instagram',
			fiveTreesCost: 'IDR 250,000',
			fiveTreesTitle: 'Five Carbon-Absorbing Trees',
			fiveTreesDesc: '5 Trees + 1 Year Care',
			fiveTreesImpact1: 'Funds 5 complete trees',
			fiveTreesImpact2: 'Greater environmental impact',
			fiveTreesImpact3: 'Significant CO₂ absorption contribution',
			fiveTreesImpact4: 'Special restoration impact report',
			customCost: 'Flexible',
			customTitle: 'Your Goodness Footprint',
			customDesc: 'Amount According to Your Ability',
			customImpact1: 'Contribution according to ability',
			customImpact2: 'Every rupiah really matters',
			customImpact3: 'Full transparency of fund use',
			customImpact4: 'Part of national movement',
			popularBadge: '⭐ Most Popular',
			selectPackageBtn: 'Choose This Package',
			highlight1Title: '1 Tree = IDR 50,000',
			highlight1Desc: 'Covers seedlings, planting, and 12 months of care at the site.',
			highlight2Title: 'Methane & CO₂ Absorber',
			highlight2Desc: 'Each tree pulls greenhouse gases from the air to cool the area.',
			highlight3Title: 'Regular Updates',
			highlight3Desc: 'Progress is shared openly on Instagram @kitahijaukan.',
			highlight4Title: 'Target 1,000 Hectares',
			highlight4Desc: 'Help us reopen 1,000 hectares of healthy cover this year.',
			urgencyTitle: 'Act before another rainy season erodes the land.',
			urgencyDesc: 'Today’s support keeps soil alive for tomorrow’s harvest.',
			urgencyCta: '🔥 Start Donating Now',
			
			locationsTitle: 'Planting Locations',
			locationsDesc: 'Current focus: Lampung and Sumatra plots mapped with partner communities.',
			
			kitabisaTitle: 'Donate Through Kitabisa',
			kitabisaSubtitle: 'Channel your contribution through a trusted platform',
			kitabisaTrust1: 'Safe & Trusted',
			kitabisaTrust1Desc: "Indonesia's trusted donation platform",
			kitabisaTrust2: 'Various Methods',
			kitabisaTrust2Desc: 'Bank transfer, e-wallet, credit card',
			kitabisaTrust3: 'Transparent',
			kitabisaTrust3Desc: 'Track every rupiah you donate',
			kitabisaHashtag: '#KitaHIJAUkanIndonesia #RestorasiLahan',
			kitabisaHashtagDesc: 'Every contribution means for a greener Indonesia',
			kitabisaDirectText: 'Or visit the campaign page directly:',
			kitabisaDirectBtn: 'Open on Kitabisa.com →',
			kitabisaSocial1Title: '📱 Follow Our Progress',
			kitabisaSocial1Desc: 'Get regular updates on every planting and land development at:',
			kitabisaSocial2Title: '💬 Have Questions?',
			kitabisaSocial2Desc: 'Our team is ready to help you:',
			kitabisaFinalTitle: "LET'S KitaHIJAUkan Indonesia NOW!",
			kitabisaFinalDesc: 'Together we can make a real difference for future generations',
		},
	},
	id: {
			nav: {
				challenges: 'Tantangan Lahan',
				solution: 'Solusi Kami',
				programs: 'Program',
				benefits: 'Manfaat Restorasi',
				palatability: 'Lokasi Penanaman',
			timeline: 'Timeline Proyek',
			careers: 'Karir',
			donateCta: 'Donasi Sekarang',
			language: 'Bahasa',
		},
		footer: {
			about: 'Pelopor gerakan restorasi lahan bersama komunitas dan mitra.',
			addressTitle: 'Organisasi',
			company: 'Yayasan Langkah Restorasi Bumi',
			address: 'Indonesia',
			email: '',
			copyright: 'Hak cipta dilindungi.',
			solutionsMenu: 'Program',
			feedTech: 'Program Restorasi',
			costReduction: 'Manfaat Restorasi',
			carbonImpact: 'Dampak Restorasi',
			successStories: 'Timeline Proyek',
			supportMenu: 'Dukungan',
			privacyPolicy: 'Kebijakan Privasi',
			termsOfService: 'Syarat Layanan',
			contact: 'Kontak',
			partnersTitle: 'Mitra',
			partnersDesc: 'Mitra dan pendukung terpercaya',
		},
		donasi: {
			heroTitle: 'KitaHIJAUkan Indonesia: Pulihkan Lahan, Jaga Iklim',
			heroSubtitle: 'Lahan kritis makin meluas—aksi kita harus ikut membesar.',
			heroDescription: 'Tanah rusak berarti banjir, gagal panen, dan target iklim mandek. Donasimu menghidupkan lagi lahan dan petaninya.',
			heroCtaText: 'Mulai Berkontribusi Sekarang',
			
			problemSectionTitle: 'Selamatkan Lahan Kritis Sekarang',
			problem1Title: 'Serapan air runtuh',
			problem1Desc: 'Tanah rusak tak bisa menahan hujan, banjir datang cepat dan kemarau makin panjang.',
			problem2Title: 'Penyerap karbon hilang',
			problem2Desc: 'Tanpa tutupan pohon, tanah berhenti menyerap karbon dan panas terjebak.',
			problem3Title: 'Rantai pangan terganggu',
			problem3Desc: 'Nutrisi hilang, panen turun, dan harga pangan ikut melonjak.',
			
			solutionSectionTitle: 'Program KitaHIJAUkan Indonesia',
			solutionSectionSubtitle: 'Alurnya jelas: petakan, tanam, rawat, laporkan.',
			solutionCallToAction: 'Ayo bersama kita bisa KitaHIJAUkan Indonesia',
			approach1Title: 'Kolaborasi dengan Petani & Komunitas',
			approach1Desc: 'Petani lokal memimpin tiap petak agar manfaat tinggal di kampung.',
			approach2Title: 'Penanaman Terstruktur & Terukur',
			approach2Desc: 'Pohon ditanam di lahan terpetakan dengan paket rawat satu tahun.',
			approach3Title: 'Monitoring & Transparansi Penuh',
			approach3Desc: 'Setiap tahap terdokumentasi dan dibagikan di Instagram @kitahijaukan.',
			
			timelineTitle: 'Timeline Proyek',
			timelineSubtitle: 'Lihat perjalanan donasimu dari pemetaan hingga laporan publik.',
			timelineCta: 'Dukung fase berikutnya',
			timelineSteps: [
				{ phase: '01', title: 'Pemetaan & persetujuan', description: 'Survey lahan kritis, tandatangani persetujuan petani, catat baseline sederhana.', duration: 'Minggu 1' },
				{ phase: '02', title: 'Pembibitan & persiapan', description: 'Tumbuhkan bibit, perbaiki struktur tanah, siapkan alat dekat lokasi.', duration: 'Minggu 2-4' },
				{ phase: '03', title: 'Tanam & rawat', description: 'Tanam campuran spesies, siram mingguan, dan catat tumbuh bersama tim lokal.', duration: 'Bulan 2-4' },
				{ phase: '04', title: 'Lapor & ulangi', description: 'Rilis progres, buka kunjungan, dan pakai data untuk batch selanjutnya.', duration: 'Bulan 5+' },
			],
			
			impactTitle: 'Detail Kontribusi Kamu',
			impactSubtitle: 'Setiap paket membiayai penanaman plus tenaga petani di lapangan',
			oneTreeCost: 'Rp 50.000',
			oneTreeTitle: 'Satu Pohon Harapan',
			oneTreeDesc: '1 Pohon + Perawatan 1 Tahun',
			oneTreeImpact1: 'Membiayai 1 pohon lengkap',
			oneTreeImpact2: 'Perawatan intensif 12 bulan',
			oneTreeImpact3: 'Sertifikat digital kontribusi',
			oneTreeImpact4: 'Update progress via Instagram',
			fiveTreesCost: 'Rp 250.000',
			fiveTreesTitle: 'Lima Pohon Penyerap Karbon',
			fiveTreesDesc: '5 Pohon + Perawatan 1 Tahun',
			fiveTreesImpact1: 'Membiayai 5 pohon lengkap',
			fiveTreesImpact2: 'Dampak lebih besar untuk lingkungan',
			fiveTreesImpact3: 'Kontribusi signifikan penyerapan CO₂',
			fiveTreesImpact4: 'Laporan khusus dampak restorasi',
			customCost: 'Bebas',
			customTitle: 'Jejak Kebaikan Kamu',
			customDesc: 'Nominal Sesuai Kemampuan',
			customImpact1: 'Kontribusi sesuai kemampuan',
			customImpact2: 'Setiap rupiah sangat berarti',
			customImpact3: 'Transparansi penuh penggunaan dana',
			customImpact4: 'Bagian dari gerakan nasional',
			popularBadge: '⭐ Paling Populer',
			selectPackageBtn: 'Pilih Paket Ini',
			highlight1Title: '1 Pohon = Rp 50.000',
			highlight1Desc: 'Sudah termasuk biaya bibit, tanam, dan perawatan 12 bulan.',
			highlight2Title: 'Penyerap Metana & CO₂',
			highlight2Desc: 'Setiap pohon menyerap gas rumah kaca dan mendinginkan area sekitar.',
			highlight3Title: 'Update Berkala',
			highlight3Desc: 'Update dibagikan rutin di Instagram @kitahijaukan.',
			highlight4Title: 'Target 1.000 Hektar',
			highlight4Desc: 'Bantu wujudkan kembali 1.000 hektar tutupan hijau.',
			urgencyTitle: 'Jangan tunggu musim hujan berikutnya.',
			urgencyDesc: 'Dukungan hari ini menjaga tanah untuk panen besok.',
			urgencyCta: '🔥 Mulai Donasi Sekarang',
			
			locationsTitle: 'Lokasi Penanaman',
			locationsDesc: 'Fokus awal di Lampung dan Sumatra hasil pemetaan bersama komunitas mitra.',
			
			kitabisaTitle: 'Donasi Melalui Kitabisa',
			kitabisaSubtitle: 'Salurkan kontribusi kamu melalui platform terpercaya',
			kitabisaTrust1: 'Aman & Terpercaya',
			kitabisaTrust1Desc: 'Platform donasi terpercaya di Indonesia',
			kitabisaTrust2: 'Beragam Metode',
			kitabisaTrust2Desc: 'Transfer bank, e-wallet, kartu kredit',
			kitabisaTrust3: 'Transparan',
			kitabisaTrust3Desc: 'Lacak setiap rupiah yang kamu donasikan',
			kitabisaHashtag: '#KitaHIJAUkanIndonesia #RestorasiLahan',
			kitabisaHashtagDesc: 'Setiap kontribusi kamu berarti untuk Indonesia yang lebih hijau',
			kitabisaDirectText: 'Atau kunjungi langsung halaman kampanye:',
			kitabisaDirectBtn: 'Buka di Kitabisa.com →',
			kitabisaSocial1Title: '📱 Follow Progress Kami',
			kitabisaSocial1Desc: 'Dapatkan update berkala setiap penanaman dan perkembangan lahan di:',
			kitabisaSocial2Title: '💬 Ada Pertanyaan?',
			kitabisaSocial2Desc: 'Tim kami siap membantu kamu:',
			kitabisaFinalTitle: 'AYO KitaHIJAUkan Indonesia SEKARANG!',
			kitabisaFinalDesc: 'Bersama kita bisa membuat perbedaan nyata untuk generasi mendatang',
		},
	},
};

