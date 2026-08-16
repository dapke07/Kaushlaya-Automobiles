import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Navigation,
} from "lucide-react";
import { shop, whatsappLink, callLink } from "../shopData.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import useReveal from "../hooks/useReveal.js";
import "./Contact.css";

export default function Contact() {
  const { t } = useLanguage();
  const ref = useReveal();
  const directionsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    shop.address
  )}`;

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="container">
        <div className="section-head center reveal">
          <span className="plate">{t("contact.eyebrow")}</span>
          <h2>{t("contact.title")}</h2>
        </div>

        <div className="contact__grid">
          <div className="contact__card reveal">
            <h3>{shop.name}</h3>

            <ul className="contact__list">
              <li>
                <MapPin size={18} />
                <span>{shop.address}</span>
              </li>
              <li>
                <Phone size={18} />
                <span>
                  {shop.phone}
                  {shop.phoneAlt ? `, ${shop.phoneAlt}` : ""}
                </span>
              </li>
              <li>
                <MessageCircle size={18} />
                <span>
                  {t("contact.whatsappLabel")}: {shop.phone}
                </span>
              </li>
              {shop.email && (
                <li>
                  <Mail size={18} />
                  <span>{shop.email}</span>
                </li>
              )}
              <li>
                <Clock size={18} />
                <span>
                  {shop.hours} &middot; {t("contact.hours")} {shop.weeklyOff}
                </span>
              </li>
            </ul>

            <div className="contact__actions">
              <a className="btn btn-primary" href={callLink()}>
                <Phone size={16} /> {t("contact.callNow")}
              </a>
              <a
                className="btn btn-whatsapp"
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} /> {t("contact.whatsapp")}
              </a>
              <a
                className="btn btn-dark-outline"
                href={directionsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation size={16} /> {t("contact.directions")}
              </a>
            </div>
          </div>

          <div className="contact__map reveal">
            <iframe
              title="Kaushalya Automobiles location"
              src={shop.mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
