import Image from "next/image";
import { galleryImages } from "@/lib/data";
import Reveal from "./Reveal";

export default function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-label">Gallery</span>
          <h2>Moments Worth Remembering</h2>
          <p>
            Real celebrations at Enchanted Acres — lush greenery, warm barn light, and joy in every
            frame.
          </p>
        </Reveal>
      </div>
      <Reveal className="gallery-grid">
        {galleryImages.map((image) => (
          <figure key={image.src} className={`gallery-item ${image.className}`.trim()}>
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 25vw" loading="lazy" />
          </figure>
        ))}
      </Reveal>
    </section>
  );
}
