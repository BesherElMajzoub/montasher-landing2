/*
  Floating WhatsApp Button Component
  - Fixed position in bottom-right corner
  - Luxury neomorphic design with smooth animations
*/

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "966500000000"; // Format: country code + number without +
    const message = encodeURIComponent("مرحباً، أريد استشارة مجانية حول خدمات التسويق الرقمي");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 z-50 w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group hover:scale-110 animate-bounce-subtle"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="h-8 w-8 group-hover:scale-110 transition-transform" />
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" />
    </button>
  );
}
