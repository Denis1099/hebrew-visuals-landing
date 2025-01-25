import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/message/X2HGLP3OBEWEF1"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 p-3 rounded-full shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </a>
  );
};

export default WhatsAppButton;