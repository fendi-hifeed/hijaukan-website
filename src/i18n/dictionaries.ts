export type Locale = 'en' | 'id';

export interface NavDict {
	challenges: string;
	solution: string;
	benefits: string;
	palatability: string;
	stories: string;
	careers: string;
	donateCta?: string;
	language: string;
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
	
	// Stories
	storiesTitle: string;
	storiesDesc: string;
	
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
				benefits: 'Restoration Benefits',
				palatability: 'Planting Locations',
			stories: 'Stories',
			careers: 'Careers',
			donateCta: 'Donate Now',
			language: 'Language',
		},
		footer: {
			about: 'Pioneering land restoration initiatives with communities and partners.',
			addressTitle: 'Organization',
			company: 'Yayasan Langkah Restorasi Bumi',
			address: 'Indonesia',
			email: 'hello@hijaukan.co',
			copyright: 'All rights reserved.',
			solutionsMenu: 'Programs',
			feedTech: 'Restoration Program',
			costReduction: 'Restoration Benefits',
			carbonImpact: 'Restoration Impact',
			successStories: 'Field Stories',
			supportMenu: 'Support',
			privacyPolicy: 'Privacy Policy',
			termsOfService: 'Terms of Service',
			contact: 'Contact',
			partnersTitle: 'Partners',
			partnersDesc: 'Trusted partners and supporters',
		},
		donasi: {
			heroTitle: 'HIJAUkan Indonesia: Build a Sustainable Ecosystem Now!',
			heroSubtitle: 'Every Hectare of Degraded Land is a Step Backward for Indonesia',
			heroDescription: 'Land degradation threatens ecological balance and national food security. Degraded land is not only vulnerable to disasters, but also loses its capacity as a vital natural carbon sink. This is a crucial challenge we must face together.',
			heroCtaText: 'Start Contributing Now',
			
			problemSectionTitle: 'OUR LAND IS CRYING: Save Critical Land Now!',
			problem1Title: 'Loss of Water Absorption Capacity',
			problem1Desc: 'Degraded soil cannot absorb water properly, causing floods in the rainy season and drought in the dry season.',
			problem2Title: 'Declining Carbon Absorption',
			problem2Desc: 'Damaged land loses its function as a natural carbon sink, worsening climate change and air quality.',
			problem3Title: 'Food Security Threat',
			problem3Desc: 'Land degradation threatens agricultural productivity and national food security for future generations.',
			
			solutionSectionTitle: 'HIJAUkan Indonesia Program',
			solutionSectionSubtitle: 'Shift from concern to Real Action. We invite you not just to preserve, but to GREENIZE massively and structurally!',
			solutionCallToAction: "Let's together we can HIJAUkan Indonesia",
			approach1Title: 'Collaboration with Farmers & Communities',
			approach1Desc: 'We work directly with local farmers and environmental communities to ensure restoration programs run sustainably and provide direct benefits to the community.',
			approach2Title: 'Structured & Measured Planting',
			approach2Desc: 'Every tree is planted in mapped critical land locations. Intensive 1-year care program ensures high growth success rates.',
			approach3Title: 'Monitoring & Full Transparency',
			approach3Desc: 'Get regular updates via Instagram @kitahijaukan. We document every stage from barren land to green again.',
			
			impactTitle: 'Your Contribution Details',
			impactSubtitle: 'Your contribution will directly impact critical land restoration across Indonesia',
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
			popularBadge: '⭐ MOST POPULAR',
			selectPackageBtn: 'Choose This Package',
			highlight1Title: '1 Tree = IDR 50,000',
			highlight1Desc: 'Including planting costs and intensive care for 1 full year at critical land locations',
			highlight2Title: 'Methane & CO₂ Absorber',
			highlight2Desc: 'Every tree becomes a greenhouse gas absorber from the air, making our air cleaner',
			highlight3Title: 'Regular Updates',
			highlight3Desc: 'Monitor progress on Instagram @kitahijaukan',
			highlight4Title: 'Target 1,000 Hectares',
			highlight4Desc: "Let's achieve this year's land restoration target together",
			urgencyTitle: "Don't Let Our Land Suffer Longer",
			urgencyDesc: 'Every passing day is a lost opportunity to save our land',
			urgencyCta: '🔥 Start Donating Now',
			
			locationsTitle: 'Planting Locations',
			locationsDesc: 'Planting will be carried out on critical lands that have been mapped in collaboration with local farmers and communities. Priority locations include areas degraded by erosion and unsustainable agricultural practices.',
			
			storiesTitle: 'Field Stories',
			storiesDesc: 'Watch inspiring stories of farmers and communities who have successfully restored their land to productive and green again — photo documentation and field reports will be published here.',
			
			kitabisaTitle: 'Donate Through Kitabisa',
			kitabisaSubtitle: 'Channel your contribution through a trusted platform',
			kitabisaTrust1: 'Safe & Trusted',
			kitabisaTrust1Desc: "Indonesia's trusted donation platform",
			kitabisaTrust2: 'Various Methods',
			kitabisaTrust2Desc: 'Bank transfer, e-wallet, credit card',
			kitabisaTrust3: 'Transparent',
			kitabisaTrust3Desc: 'Track every rupiah you donate',
			kitabisaHashtag: '#HIJAUkanIndonesia #RestorasiLahan',
			kitabisaHashtagDesc: 'Every contribution means for a greener Indonesia',
			kitabisaDirectText: 'Or visit the campaign page directly:',
			kitabisaDirectBtn: 'Open on Kitabisa.com →',
			kitabisaSocial1Title: '📱 Follow Our Progress',
			kitabisaSocial1Desc: 'Get regular updates on every planting and land development at:',
			kitabisaSocial2Title: '💬 Have Questions?',
			kitabisaSocial2Desc: 'Our team is ready to help you:',
			kitabisaFinalTitle: "LET'S HIJAUkan Indonesia NOW!",
			kitabisaFinalDesc: 'Together we can make a real difference for future generations',
		},
	},
	id: {
			nav: {
				challenges: 'Tantangan Lahan',
				solution: 'Solusi Kami',
				benefits: 'Manfaat Restorasi',
				palatability: 'Lokasi Penanaman',
			stories: 'Kisah',
			careers: 'Karir',
			donateCta: 'Donasi Sekarang',
			language: 'Bahasa',
		},
		footer: {
			about: 'Pelopor gerakan restorasi lahan bersama komunitas dan mitra.',
			addressTitle: 'Organisasi',
			company: 'Yayasan Langkah Restorasi Bumi',
			address: 'Indonesia',
			email: 'hello@hijaukan.co',
			copyright: 'Hak cipta dilindungi.',
			solutionsMenu: 'Program',
			feedTech: 'Program Restorasi',
			costReduction: 'Manfaat Restorasi',
			carbonImpact: 'Dampak Restorasi',
			successStories: 'Kisah Lapangan',
			supportMenu: 'Dukungan',
			privacyPolicy: 'Kebijakan Privasi',
			termsOfService: 'Syarat Layanan',
			contact: 'Kontak',
			partnersTitle: 'Mitra',
			partnersDesc: 'Mitra dan pendukung terpercaya',
		},
		donasi: {
			heroTitle: 'HIJAUkan Indonesia: Wujudkan Ekosistem Berkelanjutan Sekarang!',
			heroSubtitle: 'Setiap Hektar Lahan yang Terdegradasi adalah Langkah Mundur bagi Indonesia',
			heroDescription: 'Degradasi lahan mengancam keseimbangan alam dan ketahanan pangan nasional. Lahan yang terdegradasi tidak hanya rentan terhadap bencana, tetapi juga kehilangan kemampuannya sebagai penyerap karbon alami yang vital. Ini adalah tantangan krusial yang harus kita hadapi bersama.',
			heroCtaText: 'Mulai Berkontribusi Sekarang',
			
			problemSectionTitle: 'TANAH KITA MENJERIT: Selamatkan Lahan Kritis Sekarang!',
			problem1Title: 'Kehilangan Kemampuan Menyerap Air',
			problem1Desc: 'Tanah yang terdegradasi tidak dapat menyerap air dengan baik, menyebabkan banjir di musim hujan dan kekeringan di musim kemarau.',
			problem2Title: 'Penurunan Penyerapan Karbon',
			problem2Desc: 'Lahan rusak kehilangan fungsinya sebagai penyerap karbon alami, memperburuk perubahan iklim dan kualitas udara.',
			problem3Title: 'Ancaman Ketahanan Pangan',
			problem3Desc: 'Degradasi lahan mengancam produktivitas pertanian dan ketahanan pangan nasional untuk generasi mendatang.',
			
			solutionSectionTitle: 'Program HIJAUkan Indonesia',
			solutionSectionSubtitle: 'Beralih dari kepedulian menjadi Aksi Nyata. Kami mengajak kamu untuk tidak hanya menjaga, tetapi juga MENGHIJAUKAN secara masif dan terstruktur!',
			solutionCallToAction: 'Ayo bersama kita bisa HIJAUkan Indonesia',
			approach1Title: 'Kolaborasi dengan Petani & Komunitas',
			approach1Desc: 'Kami bekerja langsung dengan petani lokal dan komunitas lingkungan untuk memastikan program restorasi berjalan berkelanjutan dan memberikan manfaat langsung kepada masyarakat.',
			approach2Title: 'Penanaman Terstruktur & Terukur',
			approach2Desc: 'Setiap pohon ditanam di lokasi lahan kritis yang telah dipetakan. Program perawatan intensif selama 1 tahun memastikan tingkat keberhasilan tumbuh yang tinggi.',
			approach3Title: 'Monitoring & Transparansi Penuh',
			approach3Desc: 'Dapatkan update berkala melalui Instagram @kitahijaukan. Kami dokumentasikan setiap tahap dari lahan gersang hingga menghijau kembali.',
			
			impactTitle: 'Detail Kontribusi Kamu',
			impactSubtitle: 'Kontribusi kamu akan langsung berdampak pada restorasi lahan kritis di seluruh Indonesia',
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
			popularBadge: '⭐ PALING POPULER',
			selectPackageBtn: 'Pilih Paket Ini',
			highlight1Title: '1 Pohon = Rp 50.000',
			highlight1Desc: 'Termasuk biaya penanaman dan perawatan intensif selama 1 tahun penuh di lokasi lahan kritis',
			highlight2Title: 'Penyerap Metana & CO₂',
			highlight2Desc: 'Setiap pohon menjadi penyerap gas rumah kaca dari udara, membuat udara kita lebih bersih',
			highlight3Title: 'Update Berkala',
			highlight3Desc: 'Pantau perkembangan di Instagram @kitahijaukan',
			highlight4Title: 'Target 1.000 Hektar',
			highlight4Desc: 'Mari capai target restorasi lahan tahun ini bersama-sama',
			urgencyTitle: 'Jangan Biarkan Lahan Kita Sakit Lebih Lama',
			urgencyDesc: 'Setiap hari yang berlalu adalah kesempatan yang hilang untuk menyelamatkan tanah kita',
			urgencyCta: '🔥 Mulai Donasi Sekarang',
			
			locationsTitle: 'Lokasi Penanaman',
			locationsDesc: 'Penanaman akan dilakukan di lahan-lahan kritis yang telah dipetakan bekerja sama dengan petani lokal dan komunitas. Lokasi prioritas termasuk daerah terdegradasi akibat erosi dan praktik pertanian tidak berkelanjutan.',
			
			storiesTitle: 'Kisah Lapangan',
			storiesDesc: 'Simak kisah inspiratif petani dan komunitas yang berhasil mengembalikan lahan mereka menjadi produktif dan hijau kembali — dokumentasi foto dan laporan medan akan dipublikasikan di sini.',
			
			kitabisaTitle: 'Donasi Melalui Kitabisa',
			kitabisaSubtitle: 'Salurkan kontribusi kamu melalui platform terpercaya',
			kitabisaTrust1: 'Aman & Terpercaya',
			kitabisaTrust1Desc: 'Platform donasi terpercaya di Indonesia',
			kitabisaTrust2: 'Beragam Metode',
			kitabisaTrust2Desc: 'Transfer bank, e-wallet, kartu kredit',
			kitabisaTrust3: 'Transparan',
			kitabisaTrust3Desc: 'Lacak setiap rupiah yang kamu donasikan',
			kitabisaHashtag: '#HIJAUkanIndonesia #RestorasiLahan',
			kitabisaHashtagDesc: 'Setiap kontribusi kamu berarti untuk Indonesia yang lebih hijau',
			kitabisaDirectText: 'Atau kunjungi langsung halaman kampanye:',
			kitabisaDirectBtn: 'Buka di Kitabisa.com →',
			kitabisaSocial1Title: '📱 Follow Progress Kami',
			kitabisaSocial1Desc: 'Dapatkan update berkala setiap penanaman dan perkembangan lahan di:',
			kitabisaSocial2Title: '💬 Ada Pertanyaan?',
			kitabisaSocial2Desc: 'Tim kami siap membantu kamu:',
			kitabisaFinalTitle: 'AYO HIJAUkan Indonesia SEKARANG!',
			kitabisaFinalDesc: 'Bersama kita bisa membuat perbedaan nyata untuk generasi mendatang',
		},
	},
};

