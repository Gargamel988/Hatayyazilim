"use client";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Check, MessageCircle } from "lucide-react";
import { notFound } from "next/navigation";

// Hizmet detayları
const hizmetDetaylari = {
    "web-yazilim": {
        baslik: "Web Yazılım Geliştirme",
        description: "Modern, hızlı ve ölçeklenebilir web uygulamaları geliştiriyoruz.",
        nedir: "İşinizi dijital dünyada temsil eden, müşterilerinizle etkileşim kurmanızı sağlayan ve süreçlerinizi otomatize eden web sistemleri geliştiriyoruz. Sadece görsel değil, işlevsel çözümler.",
        problemler: [
            "Web siteniz yavaş yükleniyor ve müşteri kaybediyorsunuz",
            "Mobilde düzgün görünmüyor, kullanıcı deneyimi kötü",
            "Yönetim paneliniz yok, içerik güncellemek zor",
            "Eski teknoloji, güvenlik açıkları",
            "Rakipleriniz dijitalde öne geçiyor",
        ],
        surec: [
            { adim: "Analiz", detay: "İhtiyaçlarınızı ve hedeflerinizi anlıyoruz" },
            { adim: "Tasarım", detay: "Kullanıcı deneyimi odaklı tasarım" },
            { adim: "Geliştirme", detay: "Modern teknolojilerle kodlama" },
            { adim: "Test", detay: "Kapsamlı test ve optimizasyon" },
            { adim: "Yayın", detay: "Canlıya alma ve destek" },
        ],
        kimlerIcin: [
            "Kurumsal web sitesi ihtiyacı olan firmalar",
            "E-ticaret yapmak isteyen işletmeler",
            "Yönetim paneli / dashboard ihtiyacı olanlar",
            "API ve entegrasyon gerektiren projeler",
        ],
        nedenBiz: [
            "Uzun vadeli düşünüyoruz, yapıp kaçmıyoruz",
            "Performans ve SEO öncelikli geliştirme",
            "Ölçeklenebilir mimari tasarımı",
            "Sürekli destek ve bakım",
        ],
        fiyat: "Projeye göre değişir",
        sure: "4-12 hafta",
        color: "indigo",
    },
    "mobil-uygulama": {
        baslik: "Mobil Uygulama Geliştirme",
        description: "iOS ve Android için performanslı, kullanıcı dostu mobil uygulamalar.",
        nedir: "Müşterilerinizin cebinde yer alan, marka sadakatini güçlendiren ve iş süreçlerinizi mobilde yönetmenizi sağlayan native ve çapraz platform uygulamalar geliştiriyoruz.",
        problemler: [
            "Müşterilerinize mobilde ulaşamıyorsunuz",
            "Web siteniz mobilde yeterli deneyimi sunmuyor",
            "Rakiplerinizin uygulaması var, sizin yok",
            "İş süreçlerini sahadan yönetemiyorsunuz",
            "Müşteri bildirimleri gönderemiyorsunuz",
        ],
        surec: [
            { adim: "Keşif", detay: "Kullanıcı ihtiyaçları ve pazar analizi" },
            { adim: "UX/UI", detay: "Mobil odaklı kullanıcı deneyimi tasarımı" },
            { adim: "Geliştirme", detay: "React Native ile çapraz platform" },
            { adim: "Test", detay: "iOS ve Android test süreçleri" },
            { adim: "Yayın", detay: "App Store ve Play Store yayını" },
        ],
        kimlerIcin: [
            "Müşteriye yönelik uygulama isteyen markalar",
            "Saha ekibi yönetimi gereken firmalar",
            "E-ticaret mobil uygulaması isteyenler",
            "Sadakat programı kurmak isteyenler",
        ],
        nedenBiz: [
            "Çapraz platform ile düşük maliyet",
            "Native performans, hızlı uygulamalar",
            "App Store optimizasyonu dahil",
            "Yayın sonrası destek ve güncelleme",
        ],
        fiyat: "Projeye göre değişir",
        sure: "8-16 hafta",
        color: "violet",
    },
    "seo-danismanlik": {
        baslik: "SEO & Dijital Danışmanlık",
        description: "Google'da görünür olun, organik trafik alın, sürdürülebilir büyüyün.",
        nedir: "Arama motorlarında üst sıralara çıkmanızı, doğru kitleye ulaşmanızı ve dijital varlığınızı güçlendirmenizi sağlayan stratejik danışmanlık hizmeti.",
        problemler: [
            "Google'da görünmüyorsunuz",
            "Reklama bağımlı trafik, organik yok",
            "Rakipler sizden önde çıkıyor",
            "Web siteniz var ama ziyaretçi almıyor",
            "Dijital stratejiniz yok",
        ],
        surec: [
            { adim: "Audit", detay: "Mevcut durum ve rakip analizi" },
            { adim: "Strateji", detay: "Anahtar kelime ve içerik planı" },
            { adim: "Teknik SEO", detay: "Site hızı, yapı optimizasyonu" },
            { adim: "İçerik", detay: "SEO uyumlu içerik üretimi" },
            { adim: "Takip", detay: "Aylık raporlama ve iyileştirme" },
        ],
        kimlerIcin: [
            "Organik trafik isteyen web siteleri",
            "Yerel SEO ihtiyacı olan işletmeler",
            "E-ticaret siteleri",
            "Blog ve içerik siteleri",
        ],
        nedenBiz: [
            "Teknik + içerik SEO birlikte",
            "Şeffaf raporlama",
            "Uzun vadeli, sürdürülebilir strateji",
            "Sonuç odaklı çalışma",
        ],
        fiyat: "Aylık paketler",
        sure: "Min. 3 ay",
        color: "purple",
    },
};

const colorMap = {
    indigo: {
        gradient: "from-indigo-500 to-violet-500",
        bg: "from-indigo-500/20 to-indigo-500/10",
        text: "text-indigo-400",
        border: "border-indigo-500/30",
    },
    violet: {
        gradient: "from-violet-500 to-purple-500",
        bg: "from-violet-500/20 to-violet-500/10",
        text: "text-violet-400",
        border: "border-violet-500/30",
    },
    purple: {
        gradient: "from-purple-500 to-pink-500",
        bg: "from-purple-500/20 to-purple-500/10",
        text: "text-purple-400",
        border: "border-purple-500/30",
    },
};

export default function HizmetDetayClient({ slug }: { slug: string }) {
    const hizmet = hizmetDetaylari[slug as keyof typeof hizmetDetaylari];

    if (!hizmet) {
        notFound();
    }

    const colors = colorMap[hizmet.color as keyof typeof colorMap];

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
            {/* Hero */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r ${colors.bg} rounded-full blur-[120px] opacity-50`} />
                </div>

                <div className="relative z-10 container mx-auto px-4 md:px-6">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        className="max-w-3xl mx-auto"
                    >
                        {/* Back link */}
                        <motion.div custom={0} variants={fadeUpVariants}>
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span>Tüm Hizmetler</span>
                            </Link>
                        </motion.div>

                        <motion.h1
                            custom={1}
                            variants={fadeUpVariants}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                        >
                            {hizmet.baslik}
                        </motion.h1>

                        <motion.p
                            custom={2}
                            variants={fadeUpVariants}
                            className="text-xl text-white/50 leading-relaxed"
                        >
                            {hizmet.description}
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* 1️⃣ Hizmet Nedir */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <motion.h2 custom={0} variants={fadeUpVariants} className="text-2xl font-bold text-white mb-4">
                            Bu Hizmet Nedir?
                        </motion.h2>
                        <motion.p custom={1} variants={fadeUpVariants} className="text-white/50 leading-relaxed">
                            {hizmet.nedir}
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* 2️⃣ Hangi Problemleri Çözer */}
            <section className="py-16 md:py-20 border-t border-white/[0.05]">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <motion.h2 custom={0} variants={fadeUpVariants} className="text-2xl font-bold text-white mb-6">
                            Hangi Problemleri Çözer?
                        </motion.h2>
                        <motion.ul custom={1} variants={fadeUpVariants} className="space-y-3">
                            {hizmet.problemler.map((problem, i) => (
                                <li key={i} className="flex items-start gap-3 text-white/60">
                                    <span className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('text', 'bg')} mt-2.5 flex-shrink-0`} />
                                    {problem}
                                </li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>
            </section>

            {/* 3️⃣ Nasıl Çalışıyoruz */}
            <section className="py-16 md:py-20 border-t border-white/[0.05]">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.h2 custom={0} variants={fadeUpVariants} className="text-2xl font-bold text-white mb-8">
                            Nasıl Çalışıyoruz?
                        </motion.h2>
                        <motion.div custom={1} variants={fadeUpVariants} className="grid md:grid-cols-5 gap-4">
                            {hizmet.surec.map((adim, i) => (
                                <div key={i} className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                                    <div className={`w-10 h-10 mx-auto rounded-full bg-gradient-to-br ${colors.bg} flex items-center justify-center ${colors.text} font-bold mb-3`}>
                                        {i + 1}
                                    </div>
                                    <h4 className="font-semibold text-white mb-1">{adim.adim}</h4>
                                    <p className="text-white/40 text-sm">{adim.detay}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 4️⃣ Kimler İçin Uygun */}
            <section className="py-16 md:py-20 border-t border-white/[0.05]">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <motion.h2 custom={0} variants={fadeUpVariants} className="text-2xl font-bold text-white mb-6">
                            Kimler İçin Uygun?
                        </motion.h2>
                        <motion.ul custom={1} variants={fadeUpVariants} className="space-y-3">
                            {hizmet.kimlerIcin.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-white/60">
                                    <Check className={`w-5 h-5 ${colors.text} mt-0.5 flex-shrink-0`} />
                                    {item}
                                </li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>
            </section>

            {/* 5️⃣ Neden Hatay Yazılım */}
            <section className="py-16 md:py-20 border-t border-white/[0.05]">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <motion.h2 custom={0} variants={fadeUpVariants} className="text-2xl font-bold text-white mb-6">
                            Neden Hatay Yazılım?
                        </motion.h2>
                        <motion.div custom={1} variants={fadeUpVariants} className="grid sm:grid-cols-2 gap-4">
                            {hizmet.nedenBiz.map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                                    <Check className={`w-5 h-5 ${colors.text} mt-0.5 flex-shrink-0`} />
                                    <span className="text-white/60">{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 6️⃣ CTA */}
            <section className="py-20 md:py-28 border-t border-white/[0.05]">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <motion.div
                            custom={0}
                            variants={fadeUpVariants}
                            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.bg} border border-white/[0.05] mb-6`}
                        >
                            <MessageCircle className={`w-7 h-7 ${colors.text}`} />
                        </motion.div>

                        <motion.h2 custom={1} variants={fadeUpVariants} className="text-3xl font-bold text-white mb-4">
                            Bu Hizmet Size Uygun mu?
                        </motion.h2>

                        <motion.p custom={2} variants={fadeUpVariants} className="text-white/50 mb-8">
                            Projenizi değerlendirelim, ihtiyaçlarınıza en uygun çözümü birlikte belirleyelim.
                        </motion.p>

                        <motion.div custom={3} variants={fadeUpVariants}>
                            <Button
                                asChild
                                size="lg"
                                className={`bg-gradient-to-r ${colors.gradient} text-white px-8 py-7 text-lg rounded-xl shadow-lg group`}
                            >
                                <Link href="/iletisim">
                                    Ücretsiz Görüşme Talep Et
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
