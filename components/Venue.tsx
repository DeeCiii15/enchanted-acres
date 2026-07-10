import Image from "next/image";
import { amenities, features } from "@/lib/data";
import Reveal from "./Reveal";

export default function Venue() {
  return (
    <section className="venue section section--alt" id="venue">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-label">The Venue</span>
          <h2>Every Detail, Thoughtfully Designed</h2>
          <p>
            From the grand barn to intimate cabin suites, every space at Enchanted Acres is crafted
            to make your celebration unforgettable.
          </p>
        </Reveal>

        <div className="features">
          {features.map((feature) => (
            <Reveal
              key={feature.title}
              className={`feature-card${feature.reverse ? " feature-card--reverse" : ""}`}
            >
              <div className="feature-image">
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  width={600}
                  height={360}
                  loading="lazy"
                />
              </div>
              <div className="feature-body">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul className="feature-list">
                  {feature.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="amenities">
          {amenities.map((amenity) => (
            <div key={amenity.title} className="amenity">
              <div className="amenity-icon">&#9670;</div>
              <h4>{amenity.title}</h4>
              <p>{amenity.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
