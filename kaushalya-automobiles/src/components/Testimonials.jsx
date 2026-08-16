import { Quote, Star } from "lucide-react";
import { testimonials } from "../shopData.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import useReveal from "../hooks/useReveal.js";
import "./Testimonials.css";

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  const { t } = useLanguage();
  const ref = useReveal();

  return (
    <section className="testimonials section section-off" ref={ref}>
      <div className="container">
        <div className="section-head center reveal">
          <span className="plate">{t("testimonials.eyebrow")}</span>
          <h2>{t("testimonials.title")}</h2>
          <p>{t("testimonials.text")}</p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((rev, i) => (
            <blockquote
              className="t-card reveal"
              key={rev.id}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="t-card__top">
                <Quote size={20} className="t-card__quote" />
                <div className="t-card__stars" aria-label={`${rev.rating} out of 5 stars`}>
                  {Array.from({ length: rev.rating }).map((_, s) => (
                    <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>
              <p>{t(`testimonials.items.${rev.id}`)}</p>
              <footer className="t-card__author">
                <span className="t-card__avatar" aria-hidden="true">
                  {initials(rev.name)}
                </span>
                <cite>{rev.name}</cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
