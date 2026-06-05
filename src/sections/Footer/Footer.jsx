import "./Footer.css";

function Footer() {
  return (
    <footer className="section-footer">
      <div className="footer-container">
        <p>&copy; 2026 ShopNest. All rights reserved.</p>
        <p>
          Developed by{" "}
          <a
            href="https://github.com/wakabibrian"
            target="_blank"
            className="copyright-name"
          >
            Wakabi Brian
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
