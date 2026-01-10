import { MessageCircle, PenTool, Code2, Rocket } from "lucide-react";
import { FadeUp } from "@/components/ui/motion-wrapper";
import { ConnectionLine } from "./process-client";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Anlama",
    description:
      "İşinizi, hedeflerinizi ve beklentilerinizi dinliyoruz. Teknik dile çevirmeden önce gerçek ihtiyacı anlıyoruz.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Planlama",
    description:
      "Netleşen ihtiyaçları bir yol haritasına dönüştürüyoruz. Ne yapılacak, ne zaman ve nasıl - her şey şeffaf.",
  },
  {
    number: "03",
    icon: Code2,
    title: "İnşa",
    description:
      "Plana sadık kalarak geliştirmeye başlıyoruz. Düzenli güncellemelerle sürecin her aşamasında yanınızdayız.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Yayın & Destek",
    description:
      "Projenizi canlıya alıyoruz. Ama işimiz burada bitmiyor - sürekli destek ve geliştirmeye devam.",
  },
];

export default function ProcessSection() {

  return (
    <section className="relative py-24 md:py-32 bg-[#030303] overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <FadeUp delay={0.1}>
            <span className="inline-block text-sm text-indigo-400 tracking-widest uppercase mb-4">
              Nasıl Çalışıyoruz?
            </span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-white to-white/80">
                Fikirden Gerçeğe
              </span>{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 to-violet-300">
                4 Adımda
              </span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Her projede aynı disiplinle çalışıyoruz. Süreç net, iletişim açık, sonuç garantili.
            </p>
          </FadeUp>
        </div>

        {/* Process Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line - Desktop */}
          <ConnectionLine />

          <div className="grid md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <FadeUp
                key={step.number}
                delay={0.1 * index + 0.4}
                className="relative text-center"
              >
                {/* Step Number & Icon */}
                <div className="relative inline-flex flex-col items-center mb-6">
                  <div className="w-[120px] h-[120px] rounded-full bg-linear-to-br from-indigo-500/10 to-violet-500/10 border border-white/[0.05] flex items-center justify-center relative">
                    {/* Inner glow */}
                    <div className="absolute inset-2 rounded-full bg-[#030303] flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-indigo-400" />
                    </div>
                  </div>
                  {/* Step number badge */}
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-linear-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-xs font-bold text-white">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-[250px] mx-auto">
                  {step.description}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
