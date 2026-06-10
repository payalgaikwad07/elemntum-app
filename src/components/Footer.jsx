import './Footer.css';

const cols = [
  {
    title: 'Company',
    links: ['Home', 'Studio', 'Services', 'Blog'],
  },
  {
    title: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'License', 'Accessibility'],
  },
  {
    title: 'Follow Us',
    links: ['Instagram', 'LinkedIn', 'YouTube', 'Twitter'],
  },
  {
    title: 'Terms & Policies',
    isContact: true,
    address: '1698a Fturce on. STE 20 Chicago, IL 63807',
    phone: '(123) 456789000',
    email: 'info@elementum.com',
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        {cols.map((col, i) => (
          <div key={i} className="footer__col">
            <h4 className="footer__title">{col.title}</h4>
            {col.isContact ? (
              <div className="footer__contact">
                <p>{col.address}</p>
                <p>{col.phone}</p>
                <p>{col.email}</p>
              </div>
            ) : (
              <ul className="footer__links">
                {col.links.map(l => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="footer__bottom">
        <p>©2021 Elementum. All rights reserved.</p>
      </div>
    </footer>
  );
}
