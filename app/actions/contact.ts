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

export async function sendContactEmail(prevState: ContactState, formData: FormData) {
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
      from: `<${email}>`,
      to: 'omeraydin1.web@gmail.com',
      replyTo: email,
      subject: `Yeni Proje Talebi: ${name}`,
      html: `
        <div>
          <h1> Yeni Proje Talebi </h1>"
          <p><strong>Ad Soyad:</strong> ${name}</p>
          <p><strong>E-posta:</strong> ${email}</p>
          <p><strong>Şirket:</strong> ${company}</p>
          <p><strong>Hizmet Türü:</strong> ${service}</p>
          <br/>
          <h3>Mesaj:</h3>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Resend Error:", error);
    return { error: "Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin." };
  }
}
