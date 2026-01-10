"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
    return (
        <div className="space-y-12 ">
            {/* Contact Details */}
            <div className="grid gap-6">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors">
                    <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                        <Mail className="w-5 h-5 text-indigo-400" />
                        İletişim Kanalı
                    </h3>
                    <div className="space-y-4">
                        <a href="mailto:omeraydin1.web@gmail.com" className="block text-white/80 hover:text-white transition-colors">
                            omeraydin1.web@gmail.com
                        </a>
                        <p className="text-sm text-white/40">
                            Kısa bir mail atarak da süreci başlatabilirsiniz.
                        </p>
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors">
                    <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-indigo-400" />
                        Lokasyon & Saatler
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-white/80">Hatay, Türkiye</span>
                        </div>
                        <div className="flex items-start gap-3 text-sm text-white/60">
                            <Clock className="w-4 h-4 mt-0.5" />
                            <span>Pzt - Cum: 09:00 - 18:00</span>
                        </div>
                        <p className="text-xs text-white/40 mt-2">
                            * Hem ofis içi hem de uzaktan çalışmaya uygunuz.
                        </p>
                    </div>
                </div>
            </div>

            {/* What Happens Next - Process */}
            <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/10 to-transparent" />

                <h3 className="text-lg font-medium text-white mb-8 pl-12 relative">
                    <span className="absolute left-[11px] top-1.5 w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.5)]" />
                    Sonraki Adımlar
                </h3>

                <div className="space-y-8 pl-12">
                    <div className="relative">
                        <span className="absolute -left-[37px] top-1.5 w-2 h-2 rounded-full bg-white/20" />
                        <h4 className="text-white font-medium mb-1">1. İnceleme</h4>
                        <p className="text-sm text-white/60">
                            Gönderdiğiniz formu veya maili ekibimiz inceler (Maks. 24 saat).
                        </p>
                    </div>

                    <div className="relative">
                        <span className="absolute -left-[37px] top-1.5 w-2 h-2 rounded-full bg-white/20" />
                        <h4 className="text-white font-medium mb-1">2. Dönüş</h4>
                        <p className="text-sm text-white/60">
                            Size uygun bir toplantı saati veya proje detayları için dönüş yaparız.
                        </p>
                    </div>

                    <div className="relative">
                        <span className="absolute -left-[37px] top-1.5 w-2 h-2 rounded-full bg-white/20" />
                        <h4 className="text-white font-medium mb-1">3. Başlangıç</h4>
                        <p className="text-sm text-white/60">
                            İhtiyaçlarınızı netleştirip rotanızı çizeriz.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
