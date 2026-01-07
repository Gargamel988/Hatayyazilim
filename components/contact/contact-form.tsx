"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { NativeSelect } from "@/components/ui/native-select";
import { Send, ArrowRight } from "lucide-react";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        alert("Mesajınız alındı! En kısa sürede döneceğiz.");
    };

    return (
        <div className="w-full">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-2">Projenizden Bahsedin</h3>
                <p className="text-white/60 mb-8 text-sm">
                    Formu doldurun, projenizi detaylandıralım.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-white/80">Ad Soyad</Label>
                            <Input
                                id="name"
                                placeholder="Adınız Soyadınız"
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-indigo-500/50"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-white/80">E-posta</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="ornek@sirket.com"
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-indigo-500/50"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="company" className="text-white/80">Şirket (Opsiyonel)</Label>
                            <Input
                                id="company"
                                placeholder="Şirket Adı"
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-indigo-500/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="service" className="text-white/80">Hizmet Türü</Label>
                            <NativeSelect
                                id="service"
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-indigo-500/50 [&>option]:text-black"
                                required
                            >
                                <option value="" disabled>Seçiniz</option>
                                <option value="web">Web Yazılım / Site</option>
                                <option value="mobile">Mobil Uygulama</option>
                                <option value="seo">SEO & Pazarlama</option>
                                <option value="corporate">Kurumsal Kimlik</option>
                                <option value="other">Diğer</option>
                            </NativeSelect>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message" className="text-white/80">Mesajınız</Label>
                        <Textarea
                            id="message"
                            placeholder="Projenizden kısaca bahsedin..."
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-indigo-500/50 min-h-[120px]"
                            required
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 text-lg font-medium transition-all"
                    >
                        {isSubmitting ? "Gönderiliyor..." : (
                            <span className="flex items-center gap-2">
                                Gönder ve Başlayalım <Send className="w-4 h-4" />
                            </span>
                        )}
                    </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                    <p className="text-white/40 text-sm mb-4">Form doldurmak istemiyor musun?</p>
                    <a href="mailto:info@hatayyazilim.com" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                        Bize direkt mail atın <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}
