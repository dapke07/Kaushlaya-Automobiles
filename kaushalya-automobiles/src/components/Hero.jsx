import { ArrowRight, MessageCircle } from "lucide-react";
import { shop, whatsappLink } from "../shopData.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import "./Hero.css";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="plate hero__plate">{t("hero.plate")}</span>
          <h1 className="hero__title">
            {t("hero.title1")}
            <br />
            {t("hero.title2")}
            <br />
            {t("hero.title3")}
          </h1>
          <p className="hero__text">{t("hero.text")}</p>

          <div className="hero__tags" aria-label="Product highlights">
            <span className="hero__tag">{t("hero.tag1")}</span>
            <span className="hero__tag">{t("hero.tag2")}</span>
            <span className="hero__tag">{t("hero.tag3")}</span>
          </div>

          <div className="hero__actions">
            <a className="btn btn-primary" href="#products">
              {t("hero.explore")} <ArrowRight size={16} />
            </a>
            <a
              className="btn btn-whatsapp"
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} /> {t("hero.whatsappEnquiry")}
            </a>
          </div>

          <dl className="hero__stats">
            <div>
              <dt>{shop.experienceYears}+</dt>
              <dd>{t("hero.stat1Label")}</dd>
            </div>
            <div>
              <dt>9+</dt>
              <dd>{t("hero.stat2Label")}</dd>
            </div>
            <div>
              <dt>{shop.staffCount}</dt>
              <dd>{t("hero.stat3Label")}</dd>
            </div>
          </dl>
        </div>

        <div className="hero__visual">
          <div className="hero__photo">
            <img
              src="/images/storefront-1.jpg"
              alt="Kaushalya Automobiles shop front on Udgir-Bidar Road"
              loading="eager"
              fetchpriority="high"
            />
          </div>

          <div className="hero__summary" aria-label="Shop offerings">
            <span className="plate hero__summary-plate">{t("hero.floatingPlate")}</span>
            <p>
              <span>{t("hero.summary1")}</span>
              <span>{t("hero.summary2")}</span>
              <span>{t("hero.summary3")}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
