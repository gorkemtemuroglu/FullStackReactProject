import "./PricingCardStyles.css";
import {Link} from "react-router-dom";

const PricingCard = () => {
  return <div className="pricing">
    <div className="card-container">
      <div className="card">
        <h3>- Basic -</h3>
        <span className="bar"></span>
        <p className="btc">$ 100</p>
        <p> 3 days</p>
        <p> 3 pages</p>
        <p> featured</p>
        <p> REPONSOİVE DESİGN</p>
        <Link to="/contact" className = "btn">
          Purchase now
        </Link>
      </div>

      <div className="card">
        <h3>- Premium -</h3>
        <span className="bar"></span>
        <p className="btc">$ 100</p>
        <p> 3 days</p>
        <p> 3 pages</p>
        <p> featured</p>
        <p> REPONSOİVE DESİGN</p>
        <Link to="/contact" className = "btn">
          Purchase now
        </Link>
      </div>

      <div className="card">
        <h3>- Business -</h3>
        <span className="bar"></span>
        <p className="btc">$ 100</p>
        <p> 3 days</p>
        <p> 3 pages</p>
        <p> featured</p>
        <p> REPONSOİVE DESİGN</p>
        <Link to="/contact" className = "btn">
          Purchase now
        </Link>
      </div>

    </div>
  </div>;
};

export default PricingCard;
