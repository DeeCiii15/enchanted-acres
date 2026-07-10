import { stats } from "@/lib/data";
import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section className="intro section" id="about">
      <div className="container">
        <div className="intro-grid">
          <Reveal className="intro-text">
            <span className="section-label">About Enchanted Acres</span>
            <h2>An Ideal Venue for Your Special Event</h2>
            <p className="lead">
              Enchanted Acres provides a beautiful, rustic barn atmosphere with all the modern
              conveniences to facilitate any wedding, party, corporate event or gathering.
            </p>
            <p>
              Enchanted Acres is a purpose-built barn event venue. Our massive barn is the perfect
              setting for weddings, parties, corporate events, family reunions and more — nestled
              in the rolling countryside of Greenwood, South Carolina.
            </p>
          </Reveal>
          <Reveal className="intro-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-unit">{stat.unit}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
