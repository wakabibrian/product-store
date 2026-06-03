import "./Hero.css";

function Hero() {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="hero-heading">Discover Products You'll Love</h1>
          <p className="hero-description">
            Explore trending products, premium collections, and everyday
            essentials, all in one place.
          </p>
          <a href="#" className="hero-btn">
            Shop Now &darr;
          </a>
        </div>
        <div className="hero-img-box">
          <img
            src="assets/hero-image.png"
            alt="Bag, Watch and Iphone"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
