
export interface BlogPost {
    id: number;
    slug: string;
    title: string;
    summary: string;
    content: string;    
    category: string;
    categoryId: string;
    date: string;
    readTime: string;
    image: string;
    featured: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: 1,
        slug: "kurumsal-web-sitesi-dikkat-edilmesi-gerekenler",
        title: "Kurumsal Web Sitesi Yaptırırken Nelere Dikkat Edilmeli?",
        summary: "Web siteniz dijital kartvizitinizden fazlasıdır. Doğru teknoloji, SEO altyapısı ve kullanıcı deneyimi (UX) markanızı nasıl yukarı taşır? Hız, mobil uyumluluk ve güvenlik konuları bir opsiyon değil, zorunluluktur.",
        content: `
            <p>Günümüz dijital dünyasında, bir işletmenin web sitesi sadece bir bilgilendirme sayfası değil, aynı zamanda en güçlü pazarlama aracıdır. Kurumsal bir web sitesi yaptırırken dikkat edilmesi gereken temel unsurlar, markanızın çevrimiçi başarısını doğrudan etkiler.</p>

            <h3>1. Kullanıcı Deneyimi (UX) ve Tasarım</h3>
            <p>Ziyaretçileriniz sitenize girdiği ilk 3 saniyede karar verirler. Profesyonel, temiz ve marka kimliğinizi yansıtan bir tasarım, güven oluşturmanın ilk adımıdır. Mobil uyumluluk (responsive tasarım) ise artık bir tercih değil, zorunluluktur.</p>

            <h3>2. Hız ve Performans</h3>
            <p>Yavaş açılan bir web sitesi, potansiyel müşterilerinizi kaybetmenize neden olur. Google, sayfa hızını sıralama faktörü olarak kullanır. Next.js gibi modern teknolojilerle inşaa edilen siteler, rakiplerine göre çok daha hızlıdır.</p>

            <h3>3. SEO Altyapısı</h3>
            <p>Web sitenizin güzel görünmesi yetmez, bulunabilir olması gerekir. Teknik SEO altyapısı sağlam, temiz kodlanmış ve doğru meta etiketleri kullanan bir site, arama motorlarında daha hızlı yükselir.</p>

            <h3>4. Güvenlik ve SSL</h3>
            <p>Müşteri verilerinin güvenliği her şeyden önemlidir. SSL sertifikası ve güncel yazılım altyapısı, hem kullanıcılarınızın hem de markanızın itibarını korur.</p>

            <p>Sonuç olarak, kurumsal web siteniz bir masraf değil, uzun vadeli bir yatırımdır. Doğru adımlarla tasarlandığında, işinizi büyütmenizdeki en büyük destekçiniz olacaktır.</p>
        `,
        category: "Web Yazılım",
        categoryId: "web",
        date: "12 Ocak 2024",
        readTime: "6 dk",
        image: "from-blue-500/20 to-cyan-500/20",
        featured: true,
    },
    {
        id: 2,
        slug: "mobil-uygulama-vs-web-uygulama",
        title: "Mobil Uygulama mı, Web Uygulama mı?",
        summary: "Projeniz için hangisi doğru? Native mobil uygulamalar performans sunarken, Web uygulamaları (PWA) daha geniş erişim sağlar. Kullanıcı alışkanlıklarına göre seçim yapılmalıdır.",
        content: `
            <p>Dijital bir ürün geliştirmeye karar verdiğinizde karşınıza çıkan ilk sorulardan biri şudur: "Mobil uygulama mı yapmalıyız, yoksa web uygulaması mı?" Bu sorunun tek bir doğru cevabı yoktur; projenizin ihtiyaçlarına, hedef kitlenize ve bütçenize göre değişir.</p>

            <h3>Mobil Uygulamalar (Native)</h3>
            <p>Mobil uygulamalar, cihazın donanım özelliklerini (kamera, GPS, bildirimler) en verimli şekilde kullanır. App Store ve Play Store'da yer almak marka prestiji sağlar.</p>
            <ul>
                <li><strong>Avantajları:</strong> Yüksek performans, çevrimdışı çalışma, push bildirimleri.</li>
                <li><strong>Dezavantajları:</strong> Yüksek geliştirme maliyeti, market onay süreçleri, kullanıcıların indirme zorunluluğu.</li>
            </ul>

            <h3>Web Uygulamaları (Web App & PWA)</h3>
            <p>Herhangi bir indirme işlemi gerektirmeyen, tarayıcı üzerinden erişilen yazılımlardır. PWA (Progressive Web App) teknolojisi ile mobil uygulama deneyimine çok yakın bir performans sunabilirler.</p>
            <ul>
                <li><strong>Avantajları:</strong> Daha düşük maliyet, anında erişim, tüm cihazlarda çalışma, kolay güncelleme.</li>
                <li><strong>Dezavantajları:</strong> Bazı donanım özelliklerine sınırlı erişim.</li>
            </ul>

            <p>Özetle; eğer kullanıcılarınızın günlük olarak sıkça kullanacağı, donanım özelliklerine ihtiyaç duyan bir projeniz varsa Mobil Uygulamayı; daha geniş kitlelere hızlıca ulaşmak, içerik sunmak veya iş süreçlerini yönetmek istiyorsanız Web Uygulamasını tercih etmelisiniz.</p>
        `,
        category: "Rehberler",
        categoryId: "guide",
        date: "05 Ocak 2024",
        readTime: "8 dk",
        image: "from-orange-500/20 to-red-500/20",
        featured: false,
    },
    {
        id: 3,
        slug: "olceklenebilir-yazilim-nedir",
        title: "Ölçeklenebilir Yazılım Nedir? Neden Önemlidir?",
        summary: "İşiniz büyüdüğünde yazılımınız tıkanıyor mu? Mikroservis mimarisi ve bulut teknolojileri ile milyonlarca kullanıcıya hizmet veren, geleceğe hazır sistemler kuruyoruz.",
        content: `
            <p>Ölçeklenebilirlik, bir yazılım sisteminin artan iş yükünü performanstan ödün vermeden karşılayabilme kapasitesidir. Girişimler ve büyüyen işletmeler için yazılımın ölçeklenebilir olması hayati önem taşır.</p>
            
            <h3>Dikey vs. Yatay Ölçekleme</h3>
            <p>İki tür ölçekleme vardır:
            <br/><strong>Dikey (Vertical):</strong> Mevcut sunucunun gücünü (RAM, CPU) artırmak.
            <br/><strong>Yatay (Horizontal):</strong> Sisteme yeni sunucular ekleyerek yükü dağıtmak.</p>

            <h3>Neden Önemlidir?</h3>
            <ol>
                <li><strong>Kullanıcı Artışı:</strong> Kampanya dönemlerinde veya ani trafik artışlarında siteniz çökmez.</li>
                <li><strong>Maliyet Verimliliği:</strong> Bulut teknolojileri sayesinde sadece kullandığınız kaynak kadar ödeme yaparsınız.</li>
                <li><strong>Geleceğe Hazırlık:</strong> İşiniz büyüdüğünde yazılımı baştan yazmak zorunda kalmazsınız.</li>
            </ol>

            <p>Hatay Yazılım olarak, projelerinizi bugünün ihtiyaçlarına göre değil, yarının büyüme hedeflerine göre tasarlıyoruz.</p>
        `,
        category: "Kurumsal",
        categoryId: "case-study",
        date: "28 Aralık 2023",
        readTime: "5 dk",
        image: "from-indigo-500/20 to-purple-500/20",
        featured: false,
    },
    {
        id: 4,
        slug: "seo-neden-uzun-vadeli-yatirimdir",
        title: "SEO Neden Kısa Vadeli Bir Çözüm Değildir?",
        summary: "Google sıralamalarında kalıcı olmak anlık bir iş değil, bir süreçtir. Teknik SEO, kaliteli içerik ve düzenli optimizasyon ile organik trafiğinizi nasıl artıracağınızı anlatıyoruz.",
        content: `
            <p>SEO (Arama Motoru Optimizasyonu), dijital pazarlamanın maraton koşusudur. Reklamların aksine, SEO çalışmaları yapıldığı anda sonuç vermez, ancak etkisi kalıcı ve uzun vadeli olur.</p>

            <h3>SEO Süreç İster</h3>
            <p>Google botlarının sitenizi taraması, anlaması ve güvenmesi zaman alır. Yeni bir sitenin rekabetçi kelimelerde ilk sayfaya gelmesi 6-12 ay sürebilir.</p>

            <h3>İçerik Krallığı</h3>
            <p>Sürekli güncel, özgün ve kullanıcıya değer katan içerikler üretmek SEO'nun bel kemiğidir. Kopya içerikler veya anahtar kelime yığınları artık işe yaramamaktadır.</p>

            <h3>Teknik Güncellemeler</h3>
            <p>Arama motoru algoritmaları sürekli değişir. Sitenizin teknik altyapısının bu değişimlere ayak uydurması gerekir.</p>

            <p>SEO'ya yapılan yatırım, zamanla reklam maliyetlerinizi düşürür ve size 7/24 ücretsiz, organik müşteri trafiği sağlar.</p>
        `,
        category: "SEO & Dijital Büyüme",
        categoryId: "seo",
        date: "15 Aralık 2023",
        readTime: "7 dk",
        image: "from-green-500/20 to-emerald-500/20",
        featured: false,
    },
];
