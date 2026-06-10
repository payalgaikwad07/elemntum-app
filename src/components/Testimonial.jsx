import './Testimonial.css';

export default function Testimonial() {
  return (
    <section className="testimonial">
      {/* Combined background avatars image orbiting the card */}
      <div className="testimonial__bg-container">
        <img
          src="/photos/avatar_img2.png"
          className="testimonial__bg-img"
          alt="Client avatars background"
        />
      </div>

      <div className="testimonial__center">
        <h2 className="testimonial__heading">
          What our customer<br />
          says <span className="brush-underline">About Us</span>
        </h2>
        <blockquote className="testimonial__quote">
          <span className="testimonial__quote-icon testimonial__quote-icon--left">&ldquo;</span>
          <p className="testimonial__quote-text">
            Elementum delivered the site within a timeline we had proposed. In the end, the client saw a 50% increase in traffic within days since launch. They also met logic/reason ability to use technology that the company had mixed, which have also proved to be easy to use and reliable.
          </p>
          <span className="testimonial__quote-icon testimonial__quote-icon--right">&rdquo;</span>
        </blockquote>
      </div>
    </section>
  );
}
