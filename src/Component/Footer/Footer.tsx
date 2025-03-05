import "./Footer.css";

const footerLinks = [
  { text: "Terms", href: "#" },
  { text: "Sitemap", href: "#" },
  { text: "Privacy", href: "#" },
];

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <p>© 2025 Airbnb, Inc.</p>
          <ol className="footer-links">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ol>
        </div>
        <div className="footer-right">
          <div className="language-currency">
            <a href="#" className="language">
              <i className="fa fa-globe"></i> English (US)
            </a>
            <a href="#" className="currency">
              $ USD
            </a>
          </div>
          <div className="social-icons">
            <a href="#" className="icon-link">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="icon-link">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" className="icon-link">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
