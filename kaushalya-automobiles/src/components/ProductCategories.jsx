import {
  Cog,
  Disc3,
  Filter,
  CircleDot,
  Zap,
  CircleDashed,
  GitBranch,
  Droplets,
  SprayCan,
  PanelTop,
  ArrowUpRight,
} from "lucide-react";
import { productCategories, whatsappLink, shop } from "../shopData.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import useReveal from "../hooks/useReveal.js";
import "./ProductCategories.css";

const ICONS = {
  engine: Cog,
  brake: Disc3,
  filter: Filter,
  clutch: CircleDot,
  electrical: Zap,
  bearing: CircleDashed,
  belt: GitBranch,
  oil: Droplets,
  wiper: SprayCan,
  body: PanelTop,
};

export default function ProductCategories() {
  const { t } = useLanguage();
  const ref = useReveal();

  const featured = [
    "engine",
    "brake",
    "filters",
    "electrical",
    "lubricants",
    "wipers",
  ];

  return (
    <section id="products" className="products section section-off" ref={ref}>
      <div className="container">
        <div className="section-head center reveal">
          <span className="plate">{t("products.eyebrow")}</span>
          <h2>{t("products.title")}</h2>
          <p>{t("products.text")}</p>
        </div>

        <div className="products__featured reveal">
          {featured.map((catId) => {
            const category = productCategories.find((cat) => cat.id === catId);
            if (!category) return null;

            const Icon = ICONS[category.icon] || Cog;
            const name = t(`products.categories.${category.id}.name`);

            return (
              <div className="product-feature" key={category.id}>
                <div className="product-feature__icon">
                  <Icon size={18} strokeWidth={1.8} />
                </div>
                <span>{name}</span>
              </div>
            );
          })}
        </div>

        <div className="products__grid">
          {productCategories.map((cat, i) => {
            const Icon = ICONS[cat.icon] || Cog;
            const name = t(`products.categories.${cat.id}.name`);
            const desc = t(`products.categories.${cat.id}.desc`);
            return (
              <div
                className="product-card reveal"
                key={cat.id}
                style={{ transitionDelay: `${(i % 3) * 70}ms` }}
              >
                <div className="product-card__icon">
                  <Icon size={26} strokeWidth={1.6} />
                </div>
                <h3>{name}</h3>
                <p>{desc}</p>
                <a
                  className="product-card__link"
                  href={whatsappLink(
                    `Hello ${shop.name}, I would like to enquire about ${name}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("products.enquire")} <ArrowUpRight size={15} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
