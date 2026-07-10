import Link from "next/link";
import { packages } from "@/lib/data";
import Reveal from "./Reveal";

export default function Packages() {
  return (
    <section className="packages section section--dark" id="packages">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-label">Wedding Packages</span>
          <h2>Find the Perfect Fit</h2>
          <p>
            Choose between DIY and Stress Free options. All packages include the barn, cabins,
            tables, and chairs.
          </p>
        </Reveal>

        <Reveal className="package-grid">
          {packages.map((pkg) => (
            <article
              key={pkg.tier}
              className={`package-card${pkg.featured ? " package-card--featured" : ""}`}
            >
              {pkg.badge && <div className="package-badge">{pkg.badge}</div>}
              <div className="package-tier">{pkg.tier}</div>
              <h3>{pkg.title}</h3>
              <div className="package-price">
                <span className="price-from">from</span>
                <span className="price-amount">{pkg.price}</span>
                <span className="price-note">{pkg.note}</span>
              </div>
              <ul className="package-features">
                {pkg.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link
                href="#contact"
                className={`btn ${pkg.ctaStyle === "primary" ? "btn-primary" : "btn-outline-light"}`}
              >
                {pkg.cta}
              </Link>
            </article>
          ))}
        </Reveal>

        <Reveal className="package-note">
          <p>
            <strong>Weekday events</strong> (Monday–Thursday, 9 AM – 9 PM) receive{" "}
            <strong>25% off</strong> wedding package pricing. Planning within two months?{" "}
            <em>Contact us for special discounted rates.</em>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
