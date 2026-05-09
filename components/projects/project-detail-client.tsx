"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Check, Layers, Zap, TrendingUp, Globe, Download, Smartphone } from "lucide-react";
import { notFound } from "next/navigation";
import { ServicesCTASection } from "@/components/services";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

interface Project {
    title: string;
    client: string;
    category: string;
    summary: string;
    problem: {
        title: string;
        description: string;
    };
    solution: {
        title: string;
        description: string;
        features: string[];
    };
    result: {
        title: string;
        metrics: { label: string; value: string }[];
        description: string;
    };
    techStack: string[];
    color: string;
    links?: {
        live?: string;
        playStore?: string;
        apk?: string;
    };
}

// Proje Verileri
const projectData: Record<string, Project> = {
    "chefoodai": {
        title: "ChefoodAI",
        client: "ChefoodAI",
        category: "Web Uygulaması",
        summary: "Elinizdeki malzemeleri yapay zeka ile analiz edip, size en uygun lezzetli tarifleri sunan akıllı mutfak asistanı.",
        problem: {
            title: "Ne Pişirsem Derdi ve Gıda İsrafı",
            description: "Evdeki malzemelerle ne yapılacağını bilememe stresi ve kullanılmayan gıdaların bozulup çöpe gitmesi. Standart tarif sitelerinde sadece isme göre arama yapılabilmesi kısıtlayıcıydı.",
        },
        solution: {
            title: "Yapay Zeka Şefiniz Mutfakta",
            description: "Gelişmiş görüntü işleme ve doğal dil işleme modelleriyle, ister buzdolabının fotoğrafını çekin ister malzemeleri yazın, size özel reçeteler üreten bir platform geliştirdik.",
            features: [
                "Görsel Malzeme Tanıma (Vision AI)",
                "Kişiselleştirilmiş Tarif Motoru",
                "Besin Değeri Hesaplama",
                "Akıllı Alışveriş Listesi",
            ],
        },
        result: {
            title: "Daha Az İsraf, Daha Çok Lezzet",
            metrics: [
                { label: "Atık Azaltımı", value: "%40" },
                { label: "Aktif Kullanıcı", value: "25K+" },
                { label: "Tarif Üretimi", value: "1M+" },
            ],
            description: "Kullanıcılar eldeki malzemeleri değerlendirerek mutfak bütçesinden tasarruf sağladı ve yemek planlama sürelerini minimuma indirdi.",
        },
        techStack: ["Next.js", "Vercel AI SDK", "TailwindCSS", "Supabase", "TypeScript"],
        color: "indigo",
        links: {
            live: "https://chefoodai.com",
        }
    },
    "beatnova": {
        title: "BeatNova",
        client: "BeatNova",
        category: "Mobil Müzik Uygulaması",
        summary: "Yapay zeka destekli müzik önerileri sunan, reklamsız ve detaylı dinleme istatistiklerine sahip yeni nesil müzik platformu.",
        problem: {
            title: "Reklam Kirliliği ve Yetersiz Öneriler",
            description: "Mevcut ücretsiz müzik uygulamalarında kullanıcı deneyimini bozan sık reklam gösterimleri ve kullanıcının zevkine tam uymayan standart algoritma önerileri.",
        },
        solution: {
            title: "Kesintisiz ve Akıllı Müzik Deneyimi",
            description: "Tamamen reklamsız bir altyapı ile kesintisiz müzik keyfi sunarken, yapay zeka algoritmalarımız kullanıcının dinleme alışkanlıklarını analiz ederek nokta atışı önerilerde bulunuyor.",
            features: [
                "AI Destekli Öneri Sistemi",
                "Detaylı Dinleme İstatistikleri",
                "Reklamsız Akış",
                "Kişiselleştirilmiş Playlistler",
            ],
        },
        result: {
            title: "Yüksek Kullanıcı Bağlılığı",
            metrics: [
                { label: "Aktif Süre", value: "45dk/gün" },
                { label: "Kullanıcı", value: "100K+" },
                { label: "Memnuniyet", value: "4.9/5" },
            ],
            description: "Kullanıcılar reklamsız deneyim sayesinde uygulamada %40 daha fazla vakit geçiriyor. AI önerileri sayesinde keşif oranı 3 katına çıktı.",
        },
        techStack: ["React Native", "Node.js", "Vercel AI SDK", "Supabase"],
        color: "violet",
        links: {
            playStore: "https://play.google.com/store/apps/details?id=com.gargamel9288.beatnova",
            apk: "https://github.com/Gargamel988/BeatNova/releases/download/v1.0.0/BeatNova.v1.0.0.apk"
        }
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
        links: {
            live: "https://yapi-market-demo.hatayyazilim.com",
        }
    },
    "guzellik-salonu": {
        title: "Salon Heaven",
        client: "Salon Heaven",
        category: "Web Yazılım & Randevu",
        summary: "Modern tasarım estetiğiyle salonun marka değerini yükselten, 7/24 online randevu ve personel yönetim sistemi.",
        problem: {
            title: "Randevu Karmaşası",
            description: "Ajanda ve telefon üzerinden yürütülen randevu süreçlerinde yaşanan çakışmalar, unutulan randevular ve mesai saatleri dışında müşterilerin ulaşamaması büyük bir sorun teşkil ediyordu.",
        },
        solution: {
            title: "Dijital Salon Yönetimi",
            description: "Şık bir web arayüzü ile hizmetleri vitrinleyen, müşterilerin istedikleri personel ve saate saniyeler içinde randevu alabildiği entegre bir sistem geliştirdik.",
            features: [
                "Online Randevu Modülü",
                "Personel ve Hizmet Yönetimi",
                "Dinamik Galeri Yönetimi",
            ],
        },
        result: {
            title: "Profesyonel Hizmet Deneyimi",
            metrics: [
                { label: "Doluluk", value: "%95" },
                { label: "Tel Trafiği", value: "%80 Azalış" },
                { label: "Yeni Müşteri", value: "+200/ay" },
            ],
            description: "Telefon trafiği neredeyse bitti. Müşteriler randevularını kendileri yönetmeye başladı, bu da personelin işine odaklanmasını sağladı.",
        },
        techStack: ["Next.js", "Prisma", "Supabase", "Shadcn/ui", "TailwindCSS", "TypeScript"],
        color: "violet",
        links: {
            live: "https://salonheaven.com",
        }
    },
    "finans-app": {
        title: "MoneyMapAi",
        client: "FinTech Solutions",
        category: "Mobil Uygulama",
        summary: "Gelir ve giderlerinizi yapay zeka yardımıyla detaylı analiz eden ve kolayca takip etmenizi sağlayan akıllı finans asistanı.",
        problem: {
            title: "Karmaşık Bütçe Takibi",
            description: "Manuel gelir-gider takibi yapmak zor ve zaman alıcı. Harcamaların nereye gittiğini analiz etmek ve tasarruf stratejileri oluşturmak disiplin gerektiriyor.",
        },
        solution: {
            title: "Yapay Zeka Destekli Cüzdan",
            description: "Fiş tarama ve harcama alışkanlıklarını analiz eden yapay zeka modülleriyle finansal yönetimi otomize ettik.",
            features: [
                "AI Fiş & Fatura Tarama",
                "Akıllı Bütçe Önerileri",
                "Otomatik Kategorizasyon",
                "Gelir-Gider Analizi",
            ],
        },
        result: {
            title: "Finansal Özgürlük",
            metrics: [
                { label: "İndirme", value: "5K+" },
                { label: "Tasarruf", value: "%35 Artış" },
                { label: "Memnuniyet", value: "4.9/5" },
            ],
            description: "Kullanıcılar gereksiz harcamalarını %35 oranında azalttı. Uygulama, finansal hedeflere ulaşmada kişisel bir danışman gibi çalışıyor.",
        },
        techStack: ["React Native", "Subabase", "Vercel Ai SDK", "Expo"],
        color: "emerald",
        links: {
            playStore: "https://play.google.com/store/apps/details?id=com.moneymapai",
            apk: "https://github.com/Gargamel988/MoneyMapAi/releases/download/v1.0.11/MomeyMapAi.v1.0.11.apk"
        }
    },
    "lexicon": {
        title: "LEXİCON",
        client: "Hatay Yazılım Studio",
        category: "Mobil Oyun & Rekabet",
        summary: "7 farklı oyun modu, gerçek zamanlı çok oyunculu rekabet ve dinamik kelime algoritmalarıyla kelime avı deneyimini yeniden tanımlayan premium mobil oyun.",
        problem: {
            title: "Tekdüze ve Statik Oyun Deneyimi",
            description: "Pazardaki kelime oyunlarının çoğu sınırlı modlar ve statik kelime listeleri sunarak oyuncuları kısa sürede sıkıyordu. Ayrıca sosyal rekabet ve kişiselleştirme unsurları oldukça zayıftı.",
        },
        solution: {
            title: "Hibrit Oyun Ekosistemi",
            description: "Klasik, Hayatta Kalma, Tırmanış, Zamana Karşı ve Kör mod gibi 7 farklı oynanış tarzını tek bir çatıda topladık. Skia ve Reanimated kullanarak akıcı, hareketli ve modern bir UI/UX deneyimi sunduk.",
            features: [
                "7 Farklı Oyun Modu (Multiplayer Dahil)",
                "Dinamik İpucu ve Yardım Sistemi",
                "Kozmetik Mağazası & Envanter Yönetimi",
                "Skia Destekli Hareketli İsim Etiketleri",
                "Global & Mod Bazlı Liderlik Tabloları",
                "Gelişmiş Başarım ve XP Sistemi",
            ],
        },
        result: {
            title: "Global Rekabet ve Başarı",
            metrics: [
                { label: "Oyun Modu", value: "7+" },
                { label: "Etkileşim", value: "%65 Artış" },
                { label: "Kullanıcı", value: "25K+" },
            ],
            description: "Dinamik modlar sayesinde kullanıcıların oyunda kalma süresi %65 arttı. Multiplayer moduyla birlikte binlerce oyuncu gerçek zamanlı rekabetin içine dahil oldu.",
        },
        techStack: ["React Native", "Expo", "Skia", "Reanimated", "Lottie", "Supabase", "SQLite"],
        color: "indigo",
        links: {
            playStore: "https://play.google.com/store/apps/details?id=com.hatayyazilim.lexicon",
            apk: "https://github.com/Gargamel988/LEXICON/releases/download/v1.0.0/Lexicon.v1.0.0.apk"
        }
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
    const [isDownloadOpen, setIsDownloadOpen] = useState(false);
    const downloadRef = useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (downloadRef.current && !downloadRef.current.contains(event.target as Node)) {
                setIsDownloadOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

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
                            className="text-xl text-white/50 leading-relaxed max-w-2xl mb-10"
                        >
                            {project.summary}
                        </motion.p>

                        {/* Project Links */}
                        <motion.div
                            custom={4}
                            variants={fadeUpVariants}
                            className="flex flex-wrap gap-4"
                        >
                            {project.links?.live && (
                                <Link
                                    href={project.links.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
                                >
                                    <Globe className="w-4 h-4" />
                                    <span>Web Sitesini Gör</span>
                                </Link>
                            )}

                            {(project.links?.playStore || project.links?.apk) && (
                                <div className="relative" ref={downloadRef}>
                                    <button
                                        onClick={() => {
                                            if (project.links?.playStore && !project.links?.apk) {
                                                window.open(project.links.playStore, "_blank");
                                            } else if (!project.links?.playStore && project.links?.apk) {
                                                window.open(project.links.apk, "_blank");
                                            } else {
                                                setIsDownloadOpen(!isDownloadOpen);
                                            }
                                        }}
                                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${colors.gradient} text-white font-semibold hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-${project.color}-500/25 cursor-pointer`}
                                    >
                                        <Download className="w-4 h-4" />
                                        <span>Uygulamayı İndir</span>
                                    </button>

                                    {/* Selection Menu */}
                                    <AnimatePresence>
                                        {isDownloadOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                className="absolute left-0 bottom-full mb-3 w-64 p-2 rounded-2xl bg-[#121212] border border-white/10 shadow-2xl z-50 overflow-hidden"
                                            >
                                                {project.links?.playStore && (
                                                    <a
                                                        href={project.links.playStore}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.05] transition-colors group"
                                                    >
                                                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                                                            <Smartphone className="w-5 h-5" />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-bold text-white">Google Play Store</div>
                                                            <div className="text-[10px] text-white/40 uppercase tracking-wider">Tavsiye Edilen</div>
                                                        </div>
                                                    </a>
                                                )}
                                                {project.links?.apk && (
                                                    <a
                                                        href={project.links.apk}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        download
                                                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.05] transition-colors group mt-1"
                                                    >
                                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                                            <Download className="w-5 h-5" />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-bold text-white">Doğrudan İndir</div>
                                                            <div className="text-[10px] text-white/40 uppercase tracking-wider">Alternatif </div>
                                                        </div>
                                                    </a>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )}
                        </motion.div>
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
