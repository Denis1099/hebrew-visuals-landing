const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/message/X2HGLP3OBEWEF1"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 transition-transform hover:scale-110"
    >
      <img
        src="/whatsapp-icon.webp"
        alt="WhatsApp Contact"
        width={60}
        height={60}
        className="w-[60px] h-[60px]"
      />
    </a>
  );
};

export default WhatsAppButton;