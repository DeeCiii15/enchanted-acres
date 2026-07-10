import Link from "next/link";
import { contactInfo } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <Reveal className="contact-info">
            <span className="section-label">Get in Touch</span>
            <h2>Begin Your Enchanted Story</h2>
            <p>
              Ready to see Enchanted Acres in person? Request a tour and discover why couples
              choose our barn for their most cherished celebrations.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Address</span>
                <address>
                  {contactInfo.address[0]}
                  <br />
                  {contactInfo.address[1]}
                </address>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone</span>
                <p>
                  {contactInfo.phones.map((phone) => (
                    <span key={phone.href}>
                      <Link href={phone.href}>{phone.label}</Link>
                      <br />
                    </span>
                  ))}
                </p>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <p>
                  <Link href={contactInfo.email.href}>{contactInfo.email.label}</Link>
                </p>
              </div>
              <div className="contact-item">
                <span className="contact-label">Follow Us</span>
                <div className="social-links">
                  {contactInfo.social.map((link) => (
                    <Link key={link.href} href={link.href} target="_blank" rel="noopener">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="contact-form">
            <h3>Request a Tour</h3>
            <p className="form-note">
              This demo links to the live tour request page. Fill out the form below to get
              started.
            </p>
            <form action={contactInfo.formAction} method="get">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Jane & John Smith" required />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="hello@example.com" required />
              </div>
              <div className="form-row">
                <label htmlFor="date">Preferred Event Date</label>
                <input type="date" id="date" name="date" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Tell us about your event</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="We're planning a wedding for 120 guests..."
                />
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                Submit Tour Request
              </button>
            </form>
          </Reveal>
        </div>

        <Reveal className="map-wrap">
          <iframe
            title="Enchanted Acres location map"
            src={contactInfo.mapEmbed}
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
