import { Droplets, MessageCircle } from "lucide-react";
import { lubricantCategories, whatsappLink, shop } from "../shopData.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import useReveal from "../hooks/useReveal.js";
import "./Lubricants.css";

export default function Lubricants() {
  const { t } = useLanguage();
  const ref = useReveal();

  return (
    <section id="lubricants" className="lube section-dark section" ref={ref}>
      <div className="container lube__inner">
        <div className="lube__copy reveal">
          <span className="plate">{t("lube.eyebrow")}</span>
          <h2>{t("lube.title")}</h2>
          <p>
            {t("lube.text1")} <strong>{t("lube.castrol")}</strong> {t("lube.text2")}
          </p>

          <ul className="lube__list">
            {lubricantCategories.map((item) => (
              <li key={item.id}>
                <Droplets size={17} />
                <div>
                  <span>{t(`lube.categories.${item.id}.name`)}</span>
                  <small>{t(`lube.categories.${item.id}.desc`)}</small>
                </div>
              </li>
            ))}
          </ul>

          <a
            className="btn btn-primary"
            href={whatsappLink(
              `Hello ${shop.name}, I would like to check availability of an engine oil / lubricant.\n\nVehicle Company:\nVehicle Model:\nOil Type Required:\n\nPlease let me know availability and price.`
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {t("lube.ask")}
          </a>
          <p className="lube__note">{t("lube.note")}</p>
        </div>

        <div className="lube__visual reveal">
          <img
            className="lube__photo"
            src="/images/oil-shelf.jpg"
            alt="Castrol engine oils on display at Kaushalya Automobiles"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
