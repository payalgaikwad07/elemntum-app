import './Progress.css';

export default function Progress() {
  return (
    <section className="progress">
      {/* Background curl line winding to the next section */}
      <img src="/photos/curl_1.png" className="progress__curl-img" alt="" />

      <div className="progress__left">
        <div className="progress__img-wrap">
          {/* Main circle image */}
          <img src="/photos/about_2.png" alt="People working" className="progress__photo" />
          
          {/* Triangles: top-left (behind) and bottom-right (front overlap) */}
          <img src="/photos/triangle.png" className="progress__triangle progress__triangle--1" alt="" />
          <img src="/photos/triangle.png" className="progress__triangle progress__triangle--2" alt="" />
        </div>
      </div>

      <div className="progress__right">
        <h2 className="progress__heading">
          <span className="marker-highlight marker-highlight--green">See</span> how we can<br />
          help you <span className="brush-underline">progress</span>
        </h2>
        <p className="progress__body">
          We add a layer of fearless insights and action that allows change
          makers to accelerate their progress in areas such as brand, design
          digital, comms and social research.
        </p>
        <a href="#" className="progress__link">Read more &mdash;&mdash;</a>
      </div>
    </section>
  );
}
