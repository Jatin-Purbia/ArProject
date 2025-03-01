import './App.css';
import tshirt from './assets/tshirt.png';
import hoodie from './assets/hoodie.png';
import oversizedTees from './assets/oversized_tees.png';


function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">ShopEase</h1>
          <nav className="nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="content">
        <section id="home" className="hero">
          <div className="hero-content">
            <h2 className="hero-title">Step into the Future of Fashion</h2>
            <p className="hero-subtitle">
              Experience the thrill of virtual try-on with ShopEase.
            </p>
            <a
              href="https://lens.snap.com/experience/ea149bcb-7dab-4e61-8b69-40d66f1660e9"
              target="_blank"
              className="lens-link"
            >
              Try It Now!
            </a>
          </div>
        </section>

        <section id="products" className="products">
          <div className="products-content">
            <h2 className="section-title">Explore Our Latest Styles</h2>
            <div className="product-grid">
              <div className="product-card">
              <img src={tshirt} alt="Urban Explorer Jacket" className="product-image" />                <h3 className="product-name">Urban Explorer Jacket</h3>
                <p className="product-price">$129.99</p>
                <button className="add-to-cart">Add to Cart</button>
                <a
                  href="https://lens.snap.com/experience/ea149bcb-7dab-4e61-8b69-40d66f1660e9"
                  target="_blank"
                  className="ar-button"
                >
                  <span role="img" aria-label="camera">
                    📸
                  </span>
                </a>
              </div>
              <div className="product-card">
                <img src={hoodie} alt="Essential Comfort Tee" className="product-image" />
                <h3 className="product-name">Essential Comfort Tee</h3>
                <p className="product-price">$39.99</p>
                <button className="add-to-cart">Add to Cart</button>
                <a
                  href="https://lens.snap.com/experience/ea149bcb-7dab-4e61-8b69-40d66f1660e9"
                  target="_blank"
                  className="ar-button"
                >
                  <span role="img" aria-label="camera">
                    📸
                  </span>
                </a>
              </div>
              <div className="product-card">
                <img src={oversizedTees} alt="Velocity Running Shoes" className="product-image" />
                <h3 className="product-name">Velocity Running Shoes</h3>
                <p className="product-price">$89.99</p>
                <button className="add-to-cart">Add to Cart</button>
                <a
                  href="https://lens.snap.com/experience/ea149bcb-7dab-4e61-8b69-40d66f1660e9"
                  target="_blank"
                  className="ar-button"
                >
                  <span role="img" aria-label="camera">
                    📸
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="about-content">
            <h2 className="section-title">About ShopEase</h2>
            <p>
              We're passionate about bringing the best in virtual try-on technology
              to your fingertips. Our goal is to make online shopping seamless and
              enjoyable.
            </p>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-content">
            <h2 className="section-title">Get in Touch</h2>
            <p>Email: support@shopease.com</p>
            <p>Phone: +1 (800) SHOP-EASE</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 ShopEase - Your Fashion Future</p>
      </footer>
    </div>
  );
}

export default App;