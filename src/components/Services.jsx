import './Services.css';

const services = [
  {
    category: 'Office of multiple interest content',
    title: 'Collaborative & partnership',
  },
  {
    category: 'The hanger US Air force digital experimental',
    title: 'We talk about our weight',
  },
  {
    category: 'Delta faucet content, social, digital',
    title: 'Piloting digital confidence',
  },
];

export default function Services() {
  return (
    <section className="services">
      <div className="services__header">
        <h2 className="services__heading">
          What we <span className="marker-highlight marker-highlight--green">can</span><br />
          <span className="brush-underline">offer</span> you!
        </h2>
      </div>

      <div className="services__list">
        {services.map((s, i) => (
          <div key={i} className="services__item">
            <div className="services__category">{s.category}</div>
            <div className="services__title">
              {i === 2 ? (
                <>
                  Piloting digital <span className="services__badge-wrap">confidence
                    <img src="/photos/Rectangle 661.png" className="services__badge" alt="Confidence Badge" />
                  </span>
                </>
              ) : (
                s.title
              )}
            </div>
            <button className="services__arrow" aria-label="view service">&rarr;</button>
          </div>
        ))}
      </div>
    </section>
  );
}
