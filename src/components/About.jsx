import './About.css';

export default function About() {
  return (
    <section className="about">
      {/* Red curl winding below/between sections */}
      <img src="/photos/curl_2.png" className="about__curl-img" alt="" />

      <div className="about__left">
        <h2 className="about__heading">
          <span className="brush-underline">Tomorrow</span> should<br />
          be better than <span className="marker-highlight marker-highlight--green">today</span>
        </h2>
        <p className="about__body">
          We are a team of strategists, designers communicators, researchers.
          Togsether, we believe that progress only happens when you refuse
          to play things safe.
        </p>
        <a href="#" className="about__link">Read more &rarr;</a>
      </div>

      <div className="about__right">
        <div className="about__img-wrap">
          {/* Main circle image */}
          <img src="/photos/about_1.png" alt="Team meeting" className="about__photo" />
          
          {/* Rotated square shape peaking from behind top-right of circle */}
          <img src="/photos/Polygon 3.png" className="about__polygon-shape" alt="" />
        </div>
      </div>
    </section>
  );
}
