import Link from "next/link";
import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <Reveal className="cta-banner">
      <div className="container">
        <blockquote>
          <p>
            &ldquo;If the weather permits, outdoor events at our barn provide a memorable
            experience with lush greenery visible in the background of photographs.&rdquo;
          </p>
        </blockquote>
        <Link href="#contact" className="btn btn-primary">
          Schedule Your Tour
        </Link>
      </div>
    </Reveal>
  );
}
