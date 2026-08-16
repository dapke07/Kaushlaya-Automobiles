import { MapPin, User, CalendarCheck, Award } from "lucide-react";
import { shop } from "../shopData.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import useReveal from "../hooks/useReveal.js";
import "./About.css";

export default function About() {
  const { t } = useLanguage();
  const ref = useReveal();

  const facts = [
    { icon: CalendarCheck, label: t("about.established"), value: shop.establishedYear },
    { icon: User, label: t("about.owner"), value: shop.ownerName },
    { icon: Award, label: t("about.experience"), value: `${shop.experienceYears}+ ${t("about.years")}` },
    { icon: MapPin, label: t("about.location"), value: t("about.locationValue") },
  ];

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container about__inner">
        <div className="about__copy reveal">
          <span className="plate">{t("about.eyebrow")}</span>
          <h2>{t("about.title")}</h2>
          <p className="about__lead">{t("about.lead")}</p>
          <p>{t("about.body")}</p>
        </div>

        <div className="about__facts reveal">
          {facts.map((f) => (
            <div className="fact-card" key={f.label}>
              <f.icon size={20} strokeWidth={1.75} />
              <div>
                <span className="fact-card__label">{f.label}</span>
                <span className="fact-card__value">{f.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
