import { MessageCircle, Phone } from "lucide-react";
import { whatsappLink, callLink } from "../shopData.js";
import "./FloatingButtons.css";

export default function FloatingButtons() {
  return (
    <div className="floating-buttons">
      <a
        className="floating-buttons__call"
        href={callLink()}
        aria-label="Call Kaushalya Automobiles"
      >
        <Phone size={22} />
      </a>
      <a
        className="floating-buttons__whatsapp"
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp enquiry to Kaushalya Automobiles"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
