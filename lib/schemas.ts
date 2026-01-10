import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "İsim gereklidir").max(100, "İsim çok uzun"),
  email: z.string().email("Geçersiz e-posta adresi"),
  company: z.string().optional(),
  service: z.string().min(1, "Hizmet seçimi gereklidir"),
  message: z.string().min(10, "Mesajınız çok kısa"),
});
