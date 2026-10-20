import { Link } from "react-router-dom";
function Customer() {

  return (
    <div>
    <nav className="navbar">
        <h2 className="logo">ShopEase</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/customer">Products</Link>
          <Link to="/">Login</Link>
        </div>
      </nav>
       <div className="products">
  <h1>Our Products</h1>

  <div className="product-list">
    <div className="product-card">
      <a href="/product/1">
        <img src="https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=600&auto=format&fit=crop&q=60" alt="Headphones" />
        <h3>Wireless Headphones</h3>
        <p>Price: ₹1499</p>
      </a>
    </div>

    <div className="product-card">
      <a href="/product/2">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60" alt="Shoes" />
        <h3>Shoes</h3>
        <p>Price: ₹2000</p>
      </a>
    </div>

    <div className="product-card">
      <a href="/product/3">
        <img src="https://images.unsplash.com/photo-1622560481156-01fc7e1693e6?w=600&auto=format&fit=crop&q=60" alt="Bags" />
        <h3>Bag</h3>
        <p>Price: ₹750</p>
      </a>
    </div>

    <div className="product-card">
      <a href="/product/4">
        <img src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&auto=format&fit=crop&q=60" alt="Watch" />
        <h3>Watch</h3>
        <p>Price: ₹1500</p>
      </a>
    </div>
  </div>
</div>
       
    </div>

  );

}

export default Customer;