import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { vehicleBrands, whatsappLink, shop } from "../shopData.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import useReveal from "../hooks/useReveal.js";
import "./VehicleBrands.css";

export default function VehicleBrands() {
  const { t } = useLanguage();
  const ref = useReveal();
  const [active, setActive] = useState(vehicleBrands[0].id);
  const activeBrand = vehicleBrands.find((b) => b.id === active);
  const activeName = t(`brands.names.${activeBrand.id}`);

  return (
    <section id="brands" className="brands section" ref={ref}>
      <div className="container">
        <div className="section-head center reveal">
          <span className="plate">{t("brands.eyebrow")}</span>
          <h2>{t("brands.title")}</h2>
          <p>{t("brands.text")}</p>
        </div>

        <div className="brands__grid reveal">
          {vehicleBrands.map((brand) => (
            <button
              key={brand.id}
              className={`brand-chip ${active === brand.id ? "brand-chip--active" : ""}`}
              onClick={() => setActive(brand.id)}
            >
              {t(`brands.names.${brand.id}`)}
            </button>
          ))}
        </div>

        <div className="brands__panel reveal">
          <div>
            <span className="plate brands__panel-plate">{t("brands.selected")}</span>
            <h3>{activeName}</h3>
            <p>{t("brands.panelText")(activeName)}</p>
          </div>
          <a
            className="btn btn-primary"
            href={whatsappLink(
              `Hello ${shop.name}, I am looking for spare parts for my ${activeName} vehicle.\n\nVehicle Model:\nYear:\nRequired Part:\n\nPlease let me know availability and price.`
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {t("brands.enquireFor")} {activeName}
          </a>
        </div>

        <p className="brands__disclaimer">{t("brands.disclaimer")}</p>
      </div>
    </section>
  );
}
