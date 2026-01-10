"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Script from "next/script";

const faqs = [
    {
        question: "Web sitesi yaptırmak ne kadar sürer?",
        answer: "Projenin kapsamına göre değişiklik gösterir. Basit bir kurumsal site genellikle 2-4 hafta sürerken, özel yazılım gerektiren kapsamlı e-ticaret siteleri veya web uygulamaları 8-12 hafta veya daha uzun sürebilir.",
    },
    {
        question: "SEO uyumlu web sitesi ne anlama gelir?",
        answer: "Arama motoru optimizasyonu (SEO), web sitenizin Google gibi arama motorlarında daha üst sıralarda görünmesini sağlayan teknik ve içerik düzenlemeleridir. Kod yapısı, site hızı, mobil uyumluluk ve anahtar kelime stratejisi buna dahildir.",
    },
    {
        question: "Mobil uygulama mı yoksa responsive web sitesi mi?",
        answer: "Bu tamamen hedef kitlenize ve amacınıza bağlıdır. Eğer sürekli kullanıcı etkileşimi, bildirim gönderme ve offline çalışma gerekliyse mobil uygulama; daha geniş kitleye hızlı ulaşmak ve düşük maliyet öncelikse responsive web sitesi tercih edilmelidir.",
    },
    {
        question: "Web sitemi kendim yönetebilir miyim?",
        answer: "Evet, geliştirdiğimiz tüm web sitelerinde kullanıcı dostu bir yönetim paneli (CMS) bulunmaktadır. Kod bilgisine ihtiyaç duymadan içeriklerinizi, görsellerinizi ve ürünlerinizi kolayca güncelleyebilirsiniz.",
    },
    {
        question: "Bakım ve destek hizmeti veriyor musunuz?",
        answer: "Proje tesliminden sonra teknik destek ve bakım hizmeti sunuyoruz. Yazılım güncellemeleri, güvenlik kontrolleri ve yedekleme işlemleri düzenli olarak tarafımızca takip edilmektedir.",
    },
];

export default function FaqSection() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
            },
        })),
    };

    return (
        <section className="py-24 bg-[#030303]">
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Sıkça Sorulan <span className="text-indigo-500">Sorular</span>
                        </h2>
                        <p className="text-white/60 text-lg">
                            Süreçlerimiz ve hizmetlerimiz hakkında merak ettikleriniz.
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border-b border-white/5 px-2 bg-white/2 hover:bg-white/4 transition-colors rounded-xl overflow-hidden mb-4"
                            >
                                <AccordionTrigger className="text-left text-white/80 hover:text-white hover:no-underline py-6 data-[state=open]:text-indigo-400 transition-colors">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-white/60 text-base leading-relaxed pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
