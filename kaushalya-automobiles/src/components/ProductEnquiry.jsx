import { useState } from "react";
import { MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { whatsappLink, shop } from "../shopData.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import useReveal from "../hooks/useReveal.js";
import "./ProductEnquiry.css";

const EMPTY_FORM = {
  name: "",
  mobile: "",
  vehicleCompany: "",
  vehicleModel: "",
  year: "",
  part: "",
  message: "",
};

export default function ProductEnquiry() {
  const { t } = useLanguage();
  const ref = useReveal();
  const [form, setForm] = useState(EMPTY_FORM);
  const [sent, setSent] = useState(false);

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const buildMessage = () =>
    `Hello ${shop.name}, I am looking for a spare part.\n\n` +
    `Name: ${form.name}\n` +
    `Mobile: ${form.mobile}\n` +
    `Vehicle Company: ${form.vehicleCompany}\n` +
    `Vehicle Model: ${form.vehicleModel}\n` +
    `Manufacturing Year: ${form.year}\n` +
    `Required Part: ${form.part}\n` +
    (form.message ? `Message: ${form.message}\n` : "") +
    `\nPlease let me know its availability and price.`;

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(whatsappLink(buildMessage()), "_blank", "noopener,noreferrer");
    setSent(true);
    setForm(EMPTY_FORM);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="enquiry" className="enquiry section" ref={ref}>
      <div className="container enquiry__inner">
        <div className="enquiry__intro reveal">
          <span className="plate">{t("enquiry.eyebrow")}</span>
          <h2>{t("enquiry.title")}</h2>
          <p>{t("enquiry.text")}</p>
          <a
            className="btn btn-whatsapp"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {t("enquiry.whatsappBtn")}
          </a>
        </div>

        <form className="enquiry__form reveal" onSubmit={handleSubmit}>
          <div className="enquiry__row">
            <label>
              {t("enquiry.name")}
              <input
                required
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={update("name")}
                placeholder={t("enquiry.namePh")}
              />
            </label>
            <label>
              {t("enquiry.mobile")}
              <input
                required
                type="tel"
                inputMode="numeric"
                pattern="[0-9]{10}"
                maxLength={10}
                autoComplete="tel"
                value={form.mobile}
                onChange={update("mobile")}
                placeholder={t("enquiry.mobilePh")}
              />
            </label>
          </div>

          <div className="enquiry__row">
            <label>
              {t("enquiry.company")}
              <input
                required
                type="text"
                value={form.vehicleCompany}
                onChange={update("vehicleCompany")}
                placeholder={t("enquiry.companyPh")}
              />
            </label>
            <label>
              {t("enquiry.model")}
              <input
                required
                type="text"
                value={form.vehicleModel}
                onChange={update("vehicleModel")}
                placeholder={t("enquiry.modelPh")}
              />
            </label>
          </div>

          <div className="enquiry__row">
            <label>
              {t("enquiry.year")}
              <input
                required
                type="text"
                value={form.year}
                onChange={update("year")}
                placeholder={t("enquiry.yearPh")}
              />
            </label>
            <label>
              {t("enquiry.part")}
              <input
                required
                type="text"
                value={form.part}
                onChange={update("part")}
                placeholder={t("enquiry.partPh")}
              />
            </label>
          </div>

          <label>
            {t("enquiry.message")}
            <textarea
              rows={3}
              value={form.message}
              onChange={update("message")}
              placeholder={t("enquiry.messagePh")}
            />
          </label>

          <button type="submit" className="btn btn-primary btn-block">
            <Send size={16} /> {t("enquiry.send")}
          </button>

          {sent && (
            <p className="enquiry__success">
              <CheckCircle2 size={16} /> {t("enquiry.success")}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
