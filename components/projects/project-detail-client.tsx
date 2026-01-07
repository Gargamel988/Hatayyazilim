"use client";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Check, Layers, Zap, TrendingUp } from "lucide-react";
import { notFound } from "next/navigation";
import { ServicesCTASection } from "@/components/services";

// Proje Verileri
const projectData = {
    "hatay-lojistik": {
        title: "Global Lojistik Yönetimi",
        client: "Hatay Lojistik A.Ş.",
        category: "Web Yazılım & Otomasyon",
        summary: "Uluslararası taşımacılık operasyonlarını tek merkezden yöneten, anlık araç takibi ve yük plânlaması sunan bulut tabanlı yönetim sistemi.",
        problem: {
            title: "Karmaşık ve Dağınık Operasyonlar",
            description: "Operasyonlar Excel dosyaları ve telefon trafiğiyle yönetiliyordu. Araçların konumu anlık takip edilemiyor, müşterilere geç bilgi veriliyordu. Veri kaybı ve operasyonel hatalar maliyetleri artırıyordu.",
        },
        solution: {
            title: "Merkezi Dijital Yönetim Sistemi",
            description: "Tüm süreci uçtan uca dijitalleştiren özel bir ERP sistemi geliştirdik. Araç takip cihazlarıyla entegre çalışan, müşteri portalı olan ve otomatik faturalama yapabilen modüler bir yapı kurduk.",
            features: [
                "Canlı Araç Takibi (GPS Entegrasyonu)",
                "Müşteri Bilgilendirme Portalı",
                "Otomatik Teklif ve Faturalama",
                "Sürücü Mobil Uygulaması",
            ],
        },
        result: {
            title: "Hız ve Verimlilik Artışı",
            metrics: [
                { label: "Operasyon Hızı", value: "%40 Artış" },
                { label: "Hata Oranı", value: "%95 Düşüş" },
                { label: "Müşteri Memnuniyeti", value: "4.8/5" },
            ],
            description: "Sistemin devreye girmesiyle operasyonel iş yükü yarı yarıya azaldı. Müşteriler yüklerini cep telefonundan takip edebilir hale geldi, bu da çağrı merkezi yükünü %70 azalttı.",
        },
        techStack: ["Next.js", "Node.js", "PostgreSQL", "Docker", "AWS"],
        color: "indigo",
    },
    "lezzet-sepeti": {
        title: "Lezzet Sepeti Mobil App",
        client: "Lezzet Sepeti",
        category: "Mobil Uygulama",
        summary: "Yerel restoranların siparişlerini yönetebildiği, kurye takibi yapılabilen ve son kullanıcıya hızlı sipariş deneyimi sunan mobil ekosistem.",
        problem: {
            title: "Pazaryeri Komisyonları ve Sadakat Sorunu",
            description: "Restoranlar yüksek komisyon oranlarından şikayetçiydi. Kendi müşterilerine doğrudan ulaşamıyor ve sadakat oluşturamıyorlardı. Sipariş takibi manuel yapıldığı için teslimatlar gecikiyordu.",
        },
        solution: {
            title: "Kurye ve Sipariş Takip Ekosistemi",
            description: "Restoran, Kurye ve Müşteri olmak üzere 3 farklı uygulama içeren bir ekosistem kurduk. Akıllı rota optimizasyonu ile kurye verimliliğini artırdık.",
            features: [
                "Canlı Sipariş Takibi",
                "Akıllı Rota Optimizasyonu",
                "Sadakat Puan Sistemi",
                "Push Bildirim Yönetimi",
            ],
        },
        result: {
            title: "Daha Düşük Maliyet, Daha Hızlı Teslimat",
            metrics: [
                { label: "Sipariş Hızı", value: "25dk Ort." },
                { label: "Restoran Kârı", value: "%15 Artış" },
                { label: "Kullanıcı Sayısı", value: "50K+" },
            ],
            description: "Restoranlar komisyonsuz satış kanalı kazandı. Kurye rota optimizasyonu sayesinde aynı sürede %30 daha fazla paket teslimatı sağlandı.",
        },
        techStack: ["React Native", "Firebase", "Google Maps API", "NestJS"],
        color: "violet",
    },
    "yapi-market": {
        title: "Yapı Market E-Ticaret",
        client: "Yapı Market Ltd.",
        category: "E-Ticaret & Entegrasyon",
        summary: "50.000+ ürünlü yapı market zinciri için, hem B2B bayilere hem de B2C son kullanıcıya hizmet veren entegre e-ticaret platformu.",
        problem: {
            title: "Stok Uyuşmazlığı ve Hantal Yapı",
            description: "Fiziksel mağazalar ile online stoklar eşleşmiyordu. Bayiler siparişleri faks veya telefonla geçiyordu. Ürün yönetimi çok zaman alıyordu.",
        },
        solution: {
            title: "Tam Entegre Omnichannel Yapı",
            description: "ERP sistemiyle (Logo/Mikro) tam entegre çalışan, stokları anlık güncelleyen bir e-ticaret altyapısı kurduk. Bayiler için özel fiyatlı giriş paneli geliştirdik.",
            features: [
                "ERP Stok/Fiyat Entegrasyonu",
                "B2B Bayi Portalı",
                "Gelişmiş Filtreleme Arama",
                "Paryaryeri Entegrasyonları",
            ],
        },
        result: {
            title: "Otomatikleşen Satış Süreci",
            metrics: [
                { label: "Online Ciro", value: "%200 Artış" },
                { label: "Operasyon Süresi", value: "%60 Tasarruf" },
                { label: "Ürün Çeşidi", value: "50.000+" },
            ],
            description: "Stok hataları sıfıra indi. Bayiler siparişlerini sistem üzerinden vermeye başladı, satış ekibi tahsilat yerine müşteri geliştirmeye odaklandı.",
        },
        techStack: ["Next.js", "Elasticsearch", "Redis", ".NET Core"],
        color: "emerald", // Using custom color handling for this one
    },
    "hukuk-otomasyon": {
        title: "Hukuk Bürosu Otomasyonu",
        client: "Demir Hukuk",
        category: "Kurumsal & CRM",
        summary: "Dava, müvekkil ve evrak takibini dijitalleştiren, hukuki süreçleri hızlandıran özel CRM ve otomasyon yazılımı.",
        problem: {
            title: "Takibi Zor Dosya Yığınları",
            description: "Binlerce fiziksel dosya arasında kaybolan evraklar, kaçırılan duruşma tarihleri ve müvekkil bilgilendirme eksikliği iş verimini düşürüyordu.",
        },
        solution: {
            title: "Dijital Hukuk Asistanı",
            description: "UYAP entegrasyonlu, duruşma hatırlatıcılı ve otomatik evrak şablonları sunan kapsamlı bir hukuk otomasyonu geliştirdik.",
            features: [
                "UYAP Entegrasyonu",
                "Otomatik Duruşma Hatırlatma",
                "Müvekkil Cari Takibi",
                "Evrak Şablon Kütüphanesi",
            ],
        },
        result: {
            title: "Kağıtsız ve Hatasız Süreç",
            metrics: [
                { label: "Zaman Tasarrufu", value: "%70" },
                { label: "Dosya Erişimi", value: "3 Saniye" },
                { label: "Hata Oranı", value: "%0" },
            ],
            description: "Tüm dava dosyaları dijitalleşti. Avukatlar ofise gitmeden tüm süreçleri yönetebilir hale geldi.",
        },
        techStack: ["React", ".NET Core", "SQL Server", "Azure"],
        color: "indigo",
    },
    "otel-rezervasyon": {
        title: "Otel Rezervasyon Sistemi",
        client: "Grand Hotel",
        category: "Web Yazılım",
        summary: "Çok dilli, kanal yöneticisi entegreli ve komisyonsuz doğrudan rezervasyon motoru.",
        problem: {
            title: "Yüksek Komisyon Giderleri",
            description: "Otel, rezervasyonlarının %90'ını Booking/Expedia gibi kanallardan alıyor ve yüksek komisyon ödüyordu. Kendi siteleri üzerinden satış yapamıyorlardı.",
        },
        solution: {
            title: "Doğrudan Rezervasyon Motoru",
            description: "Kullanıcı dostu, mobil uyumlu ve güvenli ödeme altyapısına sahip bir rezervasyon motoru kurduk. Google Hotel Ads entegrasyonu sağladık.",
            features: [
                "Channel Manager Entegrasyonu",
                "Çoklu Dil ve Para Birimi",
                "Sanal POS Entegrasyonu",
                "Dinamik Fiyatlama",
            ],
        },
        result: {
            title: "Artan Kârlılık",
            metrics: [
                { label: "Doğrudan Rez.", value: "%300 Artış" },
                { label: "Komisyon Tasarrufu", value: "%20" },
                { label: "Doluluk Oranı", value: "%95" },
            ],
            description: "Otelin kendi sitesinden aldığı rezervasyonlar 3 katına çıktı. Komisyon giderleri ciddi oranda azaldı.",
        },
        techStack: ["Next.js", "Node.js", "MongoDB", "Redis"],
        color: "violet",
    },
    "fitness-app": {
        title: "Fitness & Sağlık App",
        client: "Active Life",
        category: "Mobil Uygulama",
        summary: "Kişiselleştirilmiş antrenman programları sunan, video içerikli üyelik bazlı mobil uygulama.",
        problem: {
            title: "Sınırlı Eğitmen Kapasitesi",
            description: "Spor salonundaki eğitmenler aynı anda sınırlı sayıda üyeyle ilgilenebiliyor, uzaktan eğitim taleplerine yanıt veremiyorlardı.",
        },
        solution: {
            title: "Cepteki Kişisel Antrenör",
            description: "Yapay zeka destekli program hazırlama, video kütüphanesi ve gelişim takip özellikleri olan bir mobil uygulama geliştirdik.",
            features: [
                "Video Antrenman Kütüphanesi",
                "AI Program Oluşturucu",
                "Beslenme Takibi",
                "Topluluk Özellikleri",
            ],
        },
        result: {
            title: "Sınırsız Ölçeklenme",
            metrics: [
                { label: "Aktif Üye", value: "10K+" },
                { label: "Üye Sadakati", value: "%85" },
                { label: "Global Erişim", value: "15 Ülke" },
            ],
            description: "Spor salonu fiziksel sınırlarını aştı. Dünyanın her yerinden üyeye hizmet verir hale geldi.",
        },
        techStack: ["Flutter", "Firebase", "Stripe API"],
        color: "emerald",
    }
};

const colorMap = {
    indigo: {
        bg: "from-indigo-500/20 to-indigo-500/5",
        text: "text-indigo-400",
        border: "border-indigo-500/30",
        gradient: "from-indigo-500 to-violet-500",
    },
    violet: {
        bg: "from-violet-500/20 to-violet-500/5",
        text: "text-violet-400",
        border: "border-violet-500/30",
        gradient: "from-violet-500 to-purple-500",
    },
    emerald: {
        bg: "from-emerald-500/20 to-emerald-500/5",
        text: "text-emerald-400",
        border: "border-emerald-500/30",
        gradient: "from-emerald-500 to-green-500",
    },
};

export default function ProjectDetailClient({ slug }: { slug: string }) {
    const project = projectData[slug as keyof typeof projectData];

    if (!project) {
        notFound();
    }

    const colors = colorMap[project.color as keyof typeof colorMap] || colorMap.indigo;

    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <main className="bg-[#030303]">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-white/[0.05]">
                <div className="absolute inset-0">
                    <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl ${colors.bg} rounded-full blur-[120px] opacity-60`} />
                </div>

                <div className="relative z-10 container mx-auto px-4 md:px-6">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        className="max-w-4xl mx-auto"
                    >
                        {/* Back Link */}
                        <motion.div custom={0} variants={fadeUpVariants}>
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span>Tüm Projeler</span>
                            </Link>
                        </motion.div>

                        {/* Client/Category */}
                        <motion.div
                            custom={1}
                            variants={fadeUpVariants}
                            className="flex items-center gap-3 mb-6 text-sm"
                        >
                            <span className={`px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-white/80`}>
                                {project.client}
                            </span>
                            <span className={`text-${project.color}-400 font-medium`}>•</span>
                            <span className="text-white/60">{project.category}</span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            custom={2}
                            variants={fadeUpVariants}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                        >
                            {project.title}
                        </motion.h1>

                        {/* Introduction */}
                        <motion.p
                            custom={3}
                            variants={fadeUpVariants}
                            className="text-xl text-white/50 leading-relaxed max-w-2xl"
                        >
                            {project.summary}
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Case Study Content */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto space-y-20">

                        {/* 1. Problem */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-[100px_1fr] gap-6"
                        >
                            <motion.div custom={0} variants={fadeUpVariants} className="flex justify-center md:justify-start">
                                <div className={`w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.05] flex items-center justify-center`}>
                                    <Zap className="w-6 h-6 text-orange-400" />
                                </div>
                            </motion.div>
                            <div className="text-center md:text-left">
                                <motion.h2 custom={1} variants={fadeUpVariants} className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-3">
                                    PROBLEM
                                </motion.h2>
                                <motion.h3 custom={2} variants={fadeUpVariants} className="text-2xl font-bold text-white mb-4">
                                    {project.problem.title}
                                </motion.h3>
                                <motion.p custom={3} variants={fadeUpVariants} className="text-white/60 leading-relaxed">
                                    {project.problem.description}
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* 2. Solution */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-[100px_1fr] gap-6"
                        >
                            <motion.div custom={0} variants={fadeUpVariants} className="flex justify-center md:justify-start">
                                <div className={`w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.05] flex items-center justify-center`}>
                                    <Layers className={`w-6 h-6 ${colors.text}`} />
                                </div>
                            </motion.div>
                            <div className="text-center md:text-left">
                                <motion.h2 custom={1} variants={fadeUpVariants} className={`text-sm font-bold ${colors.text} uppercase tracking-widest mb-3`}>
                                    ÇÖZÜM & YAKLAŞIM
                                </motion.h2>
                                <motion.h3 custom={2} variants={fadeUpVariants} className="text-2xl font-bold text-white mb-4">
                                    {project.solution.title}
                                </motion.h3>
                                <motion.p custom={3} variants={fadeUpVariants} className="text-white/60 leading-relaxed mb-6">
                                    {project.solution.description}
                                </motion.p>

                                {/* Features Grid */}
                                <motion.div custom={4} variants={fadeUpVariants} className="grid sm:grid-cols-2 gap-3">
                                    {project.solution.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                                            <Check className={`w-4 h-4 ${colors.text}`} />
                                            <span className="text-sm text-white/70">{feature}</span>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* 3. Result */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-[100px_1fr] gap-6"
                        >
                            <motion.div custom={0} variants={fadeUpVariants} className="flex justify-center md:justify-start">
                                <div className={`w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.05] flex items-center justify-center`}>
                                    <TrendingUp className="w-6 h-6 text-green-400" />
                                </div>
                            </motion.div>
                            <div className="text-center md:text-left">
                                <motion.h2 custom={1} variants={fadeUpVariants} className="text-sm font-bold text-green-400 uppercase tracking-widest mb-3">
                                    SONUÇ
                                </motion.h2>
                                <motion.h3 custom={2} variants={fadeUpVariants} className="text-2xl font-bold text-white mb-4">
                                    {project.result.title}
                                </motion.h3>
                                <motion.p custom={3} variants={fadeUpVariants} className="text-white/60 leading-relaxed mb-8">
                                    {project.result.description}
                                </motion.p>

                                {/* Metrics */}
                                <motion.div custom={4} variants={fadeUpVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {project.result.metrics.map((metric, i) => (
                                        <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] text-center">
                                            <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                                            <div className="text-xs text-white/40 uppercase tracking-wider">{metric.label}</div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Tech Stack */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="pt-10 border-t border-white/[0.05]"
                        >
                            <h4 className="text-sm font-medium text-white/40 mb-4 text-center md:text-left">KULLANILAN TEKNOLOJİLER</h4>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="px-3 py-1.5 rounded-md bg-white/[0.05] text-white/60 text-sm border border-white/[0.05]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <ServicesCTASection />
        </main>
    );
}
