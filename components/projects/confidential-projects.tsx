"use client";
import { motion } from "framer-motion";
import { Shield, Lock } from "lucide-react";

export default function ConfidentialProjects() {
    return (
        <section className="py-20 bg-[#030303]">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/[0.05] p-8 md:p-12 text-center"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
                        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
                    </div>

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.05] mb-6">
                            <Lock className="w-5 h-5 text-white/60" />
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Gizlilik Odaklı Projeler
                        </h2>

                        <p className="text-white/50 leading-relaxed mb-8">
                            Portfolyomuzda yer alan işlerin yanı sıra, gizlilik sözleşmesi (NDA) kapsamında
                            geliştirdiğimiz <span className="text-white/70 font-medium">10+ kurumsal sistem ve özel yazılım projesi</span> bulunmaktadır.
                            Müşterilerimizin ticari sırlarına ve veri güvenliğine maksimum hassasiyet gösteriyoruz.
                        </p>

                        <div className="inline-flex items-center gap-2 text-indigo-400 text-sm font-medium px-4 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                            <Shield className="w-4 h-4" />
                            <span>Güven ve Gizlilik Önceliğimizdir</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
