"use server";
import { resend } from "@/lib/resend";
import { z } from "zod";

import { contactSchema } from "@/lib/schemas";

// Schema moved to @/lib/schemas to allow usage in client components

export type ContactState = {
  success?: boolean;
  error?: string | null;
  errors?: {
    [key: string]: string[];
  };
};

export async function sendContactEmail(
  prevState: ContactState,
  formData: FormData,
) {
  // Validate fields
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company") || "Belirtilmedi",
    service: formData.get("service"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      error: "Lütfen alanları kontrol ediniz.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, company, service, message } = validatedFields.data;

  try {
    await resend.emails.send({
      from: 'Hatay Yazılım <onboarding@resend.dev>',
      to: "omeraydin1.web@gmail.com",
      replyTo: email,
      subject: `Yeni Proje Talebi: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #4f46e5; border-bottom: 1px solid #eee; padding-bottom: 10px;">Yeni İletişim Formu Mesajı</h2>
          <p><strong>Ad Soyad:</strong> ${name}</p>
          <p><strong>E-posta:</strong> ${email}</p>
          <p><strong>Şirket:</strong> ${company}</p>
          <p><strong>Hizmet Türü:</strong> ${service}</p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <h3 style="margin-top: 0;">Mesaj:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #6b7280; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
            Bu e-posta hatayyazilim.com iletişim formu aracılığıyla gönderilmiştir.
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Resend Error:", error);
    return {
      error:
        "Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
    };
  }
}
