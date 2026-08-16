import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle, Languages } from "lucide-react";
import { shop, whatsappLink, callLink } from "../shopData.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import "./Navbar.css";

export default function Navbar() {
  const { t, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const NAV_LINKS = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.products"), href: "#products" },
    { label: t("nav.brands"), href: "#brands" },
    { label: t("nav.why"), href: "#why-us" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={closeMenu}>
          <img
            className="navbar__mark"
            src="/images/logo.png"
            alt="Kaushalya Automobiles logo"
            width="40"
            height="40"
          />
          <span className="navbar__name">
            Kaushalya
            <small>Automobiles</small>
          </span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__cta">
          <button className="navbar__lang" onClick={toggle} type="button">
            <Languages size={15} /> {t("nav.langSwitch")}
          </button>
          <a className="btn btn-dark-outline" href={callLink()}>
            <Phone size={16} /> {t("nav.callNow")}
          </a>
          <a
            className="btn btn-whatsapp"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {t("nav.whatsapp")}
          </a>
        </div>

        <button
          className="navbar__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`navbar__mobile ${open ? "navbar__mobile--open" : ""}`}>
        <nav aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="navbar__mobile-cta">
          <button className="btn btn-outline btn-block" onClick={toggle} type="button">
            <Languages size={16} /> {t("nav.langSwitch")}
          </button>
          <a className="btn btn-outline btn-block" href={callLink()}>
            <Phone size={16} /> {t("nav.callNow")} {shop.phone}
          </a>
          <a
            className="btn btn-whatsapp btn-block"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {t("nav.whatsapp")}
          </a>
        </div>
      </div>
    </header>
  );
}
