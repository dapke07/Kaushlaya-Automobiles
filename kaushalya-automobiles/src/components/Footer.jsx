import { Phone, MessageCircle, MapPin } from "lucide-react";
import { shop, whatsappLink, callLink } from "../shopData.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import "./Footer.css";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: "मुख्यपृष्ठ", href: "#home" },
    { label: "आमच्याबद्दल", href: "#about" },
    { label: "उत्पादने", href: "#products" },
    { label: "ब्रँड्स", href: "#brands" },
    { label: "संपर्क", href: "#contact" },
  ];

  const productLinks = [
    { label: "इंजिन पार्ट्स", href: "#products" },
    { label: "ब्रेक पार्ट्स", href: "#products" },
    { label: "फिल्टर्स", href: "#products" },
    { label: "लुब्रिकंट्स", href: "#lubricants" },
    { label: "अॅक्सेसरीज", href: "#products" },
  ];

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <img
              className="navbar__mark"
              src="/images/logo.png"
              alt="Kaushalya Automobiles logo"
              width="36"
              height="36"
            />
            <span>Kaushalya Automobiles</span>
          </div>
          <p>
            Genuine spare parts, engine oils, lubricants and accessories for multiple vehicle
            brands.
          </p>
        </div>

        <div className="footer__column">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <h4>Products</h4>
          <ul>
            {productLinks.map((l, i) => (
              <li key={i}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <h4>Contact</h4>
          <ul className="footer__contact">
            <li>
              <MapPin size={16} />
              <span>📍 {shop.address}</span>
            </li>
            <li>
              <Phone size={16} />
              <a href={callLink()}>📞 {shop.phone}</a>
            </li>
            <li>
              <MessageCircle size={16} />
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                💬 WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>
            &copy; {new Date().getFullYear()} {shop.name}. {t("footer.rights")}
          </span>
          <span>{t("footer.bottomNote")}</span>
        </div>
      </div>
    </footer>
  );
}
