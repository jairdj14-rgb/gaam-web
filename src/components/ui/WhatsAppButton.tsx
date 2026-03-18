import { contact } from "@/config/contact";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href={contact.whatsappLink}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 bg-white/10 backdrop-blur-xl border border-white/20 
      p-4 rounded-full shadow-lg hover:scale-110 smooth flex items-center justify-center"
    >
      <FaWhatsapp className="text-white text-xl" />
    </a>
  );
}
