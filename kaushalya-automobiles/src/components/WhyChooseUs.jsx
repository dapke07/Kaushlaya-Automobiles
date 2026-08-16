import {
  ShieldCheck,
  Layers,
  BookOpenCheck,
  Tag,
  Handshake,
  MessageCircleMore,
} from "lucide-react";
import { whyChooseUs } from "../shopData.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import useReveal from "../hooks/useReveal.js";
import "./WhyChooseUs.css";

const ICONS = {
  quality: ShieldCheck,
  brands: Layers,
  knowledge: BookOpenCheck,
  price: Tag,
  service: Handshake,
  enquiry: MessageCircleMore,
};

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const ref = useReveal();

  return (
    <section id="why-us" className="why section section-off" ref={ref}>
      <div className="container">
        <div className="section-head center reveal">
          <span className="plate">{t("why.eyebrow")}</span>
          <h2>{t("why.title")}</h2>
        </div>

        <div className="why__grid">
          {whyChooseUs.map((item, i) => {
            const Icon = ICONS[item.icon] || ShieldCheck;
            return (
              <div
                className="why-card reveal"
                key={item.icon}
                style={{ transitionDelay: `${(i % 3) * 70}ms` }}
              >
                <Icon size={24} strokeWidth={1.6} />
                <h3>{t(`why.items.${item.icon}.title`)}</h3>
                <p>{t(`why.items.${item.icon}.desc`)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
