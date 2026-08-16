import { galleryImages } from "../shopData.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import useReveal from "../hooks/useReveal.js";
import "./Gallery.css";

export default function Gallery() {
  const { t } = useLanguage();
  const ref = useReveal();

  return (
    <section className="gallery section section-off" ref={ref}>
      <div className="container">
        <div className="section-head center reveal">
          <span className="plate">{t("gallery.eyebrow")}</span>
          <h2>{t("gallery.title")}</h2>
          <p>{t("gallery.text")}</p>
        </div>

        <div className="gallery__grid">
          {galleryImages.map((img, i) => (
            <figure
              className="gallery__item reveal"
              key={img.id}
              style={{ transitionDelay: `${(i % 3) * 70}ms` }}
            >
              <img src={img.src} alt={t(`gallery.captions.${img.id}`)} loading="lazy" />
              <figcaption>{t(`gallery.captions.${img.id}`)}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
