import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "KVKK Aydınlatma Metni | Kişisel Verilerin Korunması",
    description: "Hatay Yazılım KVKK aydınlatma metni. Kişisel verilerinizin işlenme amaçları, haklarınız ve veri güvenliği politikamız hakkında bilgi.",
    keywords: [
        "KVKK",
        "Kişisel Verilerin Korunması",
        "Aydınlatma Metni",
        "Veri Güvenliği",
        "Gizlilik"
    ],
    alternates: {
        canonical: '/kvkk',
    },
    icons: {
        icon: '/icon.png',
        shortcut: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },

};


export default function KvkkPage() {
    const kvkkSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "KVKK Aydınlatma Metni",
        "description": "Hatay Yazılım Kişisel Verilerin Korunması Kanunu (KVKK) aydınlatma metni",
        "url": "https://hatayyazilim.com/kvkk",
        "inLanguage": "tr-TR",
        "isPartOf": {
            "@type": "WebSite",
            "name": "Hatay Yazılım",
            "url": "https://hatayyazilim.com"
        },
        "about": {
            "@type": "Thing",
            "name": "Kişisel Verilerin Korunması Kanunu"
        }
    };
    return (
        <>
            <Script
                id="kvkk-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(kvkkSchema) }}
            />
            <main className="bg-[#030303] min-h-screen py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto space-y-12">
                        {/* Header */}
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">KVKK Aydınlatma Metni</h1>
                            <p className="text-lg text-white/60 leading-relaxed">
                                Hatay Yazılım olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında, kişisel verilerinizin güvenliğine önem veriyoruz.
                            </p>
                            <p className="text-lg text-white/60 leading-relaxed mt-4">
                                Bu metin, kişisel verilerinizin hangi amaçlarla işlendiği, nasıl korunduğu ve haklarınız hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.
                            </p>
                        </div>

                        {/* Content Sections */}
                        <div className="space-y-10 text-white/80">
                            <section>
                                <h2 className="text-xl font-semibold text-white mb-4">İşlenen Kişisel Veriler</h2>
                                <p className="mb-4 text-white/60">İletişim formları ve diğer etkileşimler aracılığıyla aşağıdaki kişisel veriler işlenebilir:</p>
                                <ul className="list-disc pl-5 space-y-2 text-white/60">
                                    <li>Ad ve soyad</li>
                                    <li>E-posta adresi</li>
                                    <li>Telefon numarası</li>
                                    <li>Şirket bilgisi (opsiyonel)</li>
                                    <li>Mesaj içeriği</li>
                                    <li>IP ve teknik erişim bilgileri</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-white mb-4">Kişisel Verilerin İşlenme Amaçları</h2>
                                <p className="mb-4 text-white/60">Toplanan kişisel verileriniz;</p>
                                <ul className="list-disc pl-5 space-y-2 text-white/60">
                                    <li>İletişim taleplerinizi yanıtlamak</li>
                                    <li>Hizmetlerimiz hakkında bilgi vermek</li>
                                    <li>Proje ve teklif süreçlerini yürütmek</li>
                                    <li>Yasal yükümlülüklerimizi yerine getirmek</li>
                                </ul>
                                <p className="mt-4 text-white/60">amaçlarıyla işlenmektedir.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-white mb-4">Kişisel Verilerin Aktarılması</h2>
                                <p className="mb-4 text-white/60">Kişisel verileriniz:</p>
                                <ul className="list-disc pl-5 space-y-2 text-white/60">
                                    <li>Üçüncü kişilerle satılmaz</li>
                                    <li>Açık rızanız olmadan paylaşılmaz</li>
                                    <li>Yalnızca yasal zorunluluklar halinde ilgili kurumlarla paylaşılabilir.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-white mb-4">Veri Saklama Süresi</h2>
                                <p className="text-white/60 leading-relaxed">
                                    Kişisel verileriniz, işlenme amacının gerektirdiği süre boyunca saklanır ve yasal süreler sonunda güvenli şekilde silinir veya anonim hale getirilir.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-white mb-4">KVKK Kapsamındaki Haklarınız</h2>
                                <p className="mb-4 text-white/60">KVKK’nın 11. maddesi kapsamında;</p>
                                <ul className="list-disc pl-5 space-y-2 text-white/60">
                                    <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                                    <li>İşlenmişse bilgi talep etme</li>
                                    <li>Düzeltilmesini veya silinmesini isteme</li>
                                    <li>İşlemeye itiraz etme</li>
                                </ul>
                                <p className="mt-4 text-white/60">haklarına sahipsiniz.</p>
                                <p className="mt-4 text-white/60">Bu haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.</p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
