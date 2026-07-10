"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/data";
import Reveal from "./Reveal";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (heroSlides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-slides">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.src}
            className={`hero-slide${index === currentSlide ? " active" : ""}`}
            style={{ backgroundImage: `url('${slide.src}')` }}
            role="img"
            aria-label={slide.alt}
          />
        ))}
      </div>
      <div className="hero-overlay" />
      <Reveal className="hero-content container">
        <p className="hero-eyebrow">Greenwood, South Carolina</p>
        <h1 className="hero-title">
          An Enchanting Place
          <br />
          for Events
        </h1>
        <p className="hero-subtitle">
          Our barn event venue is available for weddings, parties, corporate events and other
          gatherings.
        </p>
        <div className="hero-actions">
          <Link href="#contact" className="btn btn-primary">
            Book a Tour
          </Link>
          <Link href="#venue" className="btn btn-outline">
            Explore the Venue
          </Link>
        </div>
      </Reveal>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
