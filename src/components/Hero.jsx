import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__blob hero__blob--pink" />
      <div className="hero__blob hero__blob--green" />
      
      {/* Absolute positioned loops and shapes */}
      <img src="/photos/Vector 2510.png" className="hero__loop hero__loop--red" alt="" />
      <img src="/photos/Vector 2511.png" className="hero__loop hero__loop--black" alt="" />
      <img src="/photos/shape_1.png" className="hero__purple-shape" alt="" />

      <div className="hero__content">
        <h1 className="hero__title">
          The <span className="brush-underline">thinkers</span> and<br />
          doers were <span className="marker-highlight marker-highlight--pink">changing</span><br />
          the <span className="marker-highlight marker-highlight--green">status</span> Quo with
        </h1>
        <p className="hero__sub">
          {/* We are a team of strategists, designers communicators, researchers. Togsether,<br className="desktop-only" /> */}
          We are a team of strategists, designers communicators, researchers. Togsether <br />
          we believe that progress only highapens when you refuse to play things safe.
        </p>
      </div>

      <div className="hero__people-img">
        <img src="/photos/avatar_img.png" alt="Our team" />
      </div>
    </section>
  );
}
