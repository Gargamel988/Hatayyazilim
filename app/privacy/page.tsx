import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gizlilik Politikası | Hatay Yazılım",
    description: "Hatay Yazılım Gizlilik Politikası ve veri kullanımı hakkında bilgiler.",
};

export default function PrivacyPage() {
    return (
        <main className="bg-[#030303] min-h-screen py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto space-y-12">
                    {/* Header */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Gizlilik Politikası</h1>
                        <p className="text-lg text-white/60 leading-relaxed">
                            Hatay Yazılım olarak, web sitemizi ziyaret eden kullanıcılarımızın gizliliğini korumayı taahhüt ederiz.
                        </p>
                        <p className="text-lg text-white/60 leading-relaxed mt-4">
                            Bu gizlilik politikası, web sitemiz üzerinden toplanan bilgilerin nasıl kullanıldığını ve korunduğunu açıklar.
                        </p>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-10 text-white/80">
                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">Toplanan Bilgiler</h2>
                            <p className="mb-4 text-white/60">Web sitemiz üzerinden;</p>
                            <ul className="list-disc pl-5 space-y-2 text-white/60">
                                <li>İletişim formları</li>
                                <li>Çerezler (cookies)</li>
                                <li>Analitik araçlar</li>
                            </ul>
                            <p className="mt-4 text-white/60">aracılığıyla bazı bilgiler toplanabilir.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">Bilgilerin Kullanımı</h2>
                            <p className="mb-4 text-white/60">Toplanan bilgiler;</p>
                            <ul className="list-disc pl-5 space-y-2 text-white/60">
                                <li>Hizmet kalitesini artırmak</li>
                                <li>Site performansını analiz etmek</li>
                                <li>Kullanıcı deneyimini iyileştirmek</li>
                                <li>İletişim taleplerine geri dönüş yapmak</li>
                            </ul>
                            <p className="mt-4 text-white/60">amacıyla kullanılır.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">Çerezler (Cookies)</h2>
                            <p className="text-white/60 leading-relaxed mb-4">
                                Web sitemizde, kullanıcı deneyimini geliştirmek amacıyla çerezler kullanılabilir.
                            </p>
                            <p className="text-white/60 leading-relaxed">
                                Tarayıcı ayarlarınızdan çerezleri dilediğiniz zaman kontrol edebilir veya devre dışı bırakabilirsiniz.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">Bilgi Güvenliği</h2>
                            <p className="mb-4 text-white/60">Kişisel bilgileriniz;</p>
                            <ul className="list-disc pl-5 space-y-2 text-white/60">
                                <li>Yetkisiz erişime karşı korunur</li>
                                <li>Güvenli altyapılar üzerinde saklanır</li>
                                <li>Gerekli teknik ve idari tedbirler alınır</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">Üçüncü Taraf Bağlantılar</h2>
                            <p className="text-white/60 leading-relaxed mb-4">
                                Web sitemiz, üçüncü taraf sitelere bağlantılar içerebilir.
                            </p>
                            <p className="text-white/60 leading-relaxed">
                                Bu sitelerin gizlilik uygulamalarından Hatay Yazılım sorumlu değildir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">Politika Güncellemeleri</h2>
                            <p className="text-white/60 leading-relaxed mb-4">
                                Gizlilik politikamız gerektiğinde güncellenebilir.
                            </p>
                            <p className="text-white/60 leading-relaxed">
                                Güncel metin her zaman web sitemizde yayınlanır.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
