"use client";

import { useActionState, useEffect, startTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { NativeSelect } from "@/components/ui/native-select";
import { Send, ArrowRight, Loader2 } from "lucide-react";
import { sendContactEmail, ContactState } from "@/app/actions/contact";
import { contactSchema } from "@/lib/schemas";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const initialState: ContactState = {
    success: false,
    error: null,
    errors: {}
};

type FormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const [state, action, isPending] = useActionState(sendContactEmail, initialState);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting: isFormSubmitting },
        reset
    } = useForm<FormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            service: "",
            message: ""
        }
    });

    const onSubmit = (data: FormData) => {
        // Convert JSON data to FormData for the server action
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            if (value) formData.append(key, value);
        });

        // Trigger the server action
        startTransition(() => {
            action(formData);
        });
    };

    useEffect(() => {
        if (state.success) {
            toast.success("Mesajınız başarıyla gönderildi", {
                description: "En kısa sürede size döneceğiz.",
            });
            reset();
        }
        if (state.error) {
            toast.error("Mesaj gönderilirken bir hata oluştu", {
                description: state.error,
            });
            console.log(state.error);
        }
    }, [state, reset]);

    const isBusy = isPending || isFormSubmitting;

    return (
        <div className="w-full ">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-2">Projenizden Bahsedin</h3>
                <p className="text-white/60 mb-8 text-sm">
                    Formu doldurun, projenizi detaylandıralım.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-white/80">Ad Soyad</Label>
                            <Input
                                id="name"
                                placeholder="Adınız Soyadınız"
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-indigo-500/50"
                                {...register("name")}
                            />
                            {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
                            {state.errors?.name && <p className="text-red-400 text-xs">{state.errors.name[0]}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-white/80">E-posta</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="ornek@sirket.com"
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-indigo-500/50"
                                {...register("email")}
                            />
                            {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
                            {state.errors?.email && <p className="text-red-400 text-xs">{state.errors.email[0]}</p>}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="company" className="text-white/80">Şirket (Opsiyonel)</Label>
                            <Input
                                id="company"
                                placeholder="Şirket Adı"
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-indigo-500/50"
                                {...register("company")}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="service" className="text-white/80">Hizmet Türü</Label>
                            <NativeSelect
                                id="service"
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-indigo-500/50 [&>option]:text-black"
                                {...register("service")}
                            >
                                <option value="" disabled>Seçiniz</option>
                                <option value="web">Web Yazılım / Site</option>
                                <option value="mobile">Mobil Uygulama</option>
                                <option value="seo">SEO & Pazarlama</option>
                                <option value="corporate">Kurumsal Kimlik</option>
                                <option value="other">Diğer</option>
                            </NativeSelect>
                            {errors.service && <p className="text-red-400 text-xs">{errors.service.message}</p>}
                            {state.errors?.service && <p className="text-red-400 text-xs">{state.errors.service[0]}</p>}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message" className="text-white/80">Mesajınız</Label>
                        <Textarea
                            id="message"
                            placeholder="Projenizden kısaca bahsedin..."
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-indigo-500/50 min-h-[120px]"
                            {...register("message")}
                        />
                        {errors.message && <p className="text-red-400 text-xs">{errors.message.message}</p>}
                        {state.errors?.message && <p className="text-red-400 text-xs">{state.errors.message[0]}</p>}
                    </div>

                    <Button
                        type="submit"
                        disabled={isBusy}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 text-lg font-medium transition-all"
                    >
                        {isBusy ? (
                            <span className="flex items-center gap-2">
                                <Loader2 className="w-4 h-4 animate-spin" /> Gönderiliyor...
                            </span>
                        ) : (
                            <span className="flex items-center gap-2">
                                Gönder ve Başlayalım <Send className="w-4 h-4" />
                            </span>
                        )}
                    </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                    <p className="text-white/40 text-sm mb-4">Form doldurmak istemiyor musun?</p>
                    <a href="mailto:omeraydin1.web@gmail.com" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                        Bize direkt mail atın <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}
