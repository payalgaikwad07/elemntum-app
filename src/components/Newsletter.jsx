import './Newsletter.css';

export default function Newsletter() {
  return (
    <section className="newsletter">
      {/* Red double squiggle line centered above heading */}
      <img src="/photos/newsletter_squiggle.png" className="newsletter__squiggle" alt="" />
      
      {/* Purple half circle shape on the right edge */}
      <img src="/photos/shape_2.png" className="newsletter__purple-shape" alt="" />

      <div className="newsletter__content">
        <h2 className="newsletter__heading">
          Subscribe to<br />our newsletter
        </h2>
        <p className="newsletter__sub">
          to make your stay special and even more memorable.
        </p>

        <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
          <button type="submit" className="newsletter__btn">Subscribe Now</button>
        </form>
      </div>
    </section>
  );
}
