import Lottie from "lottie-react";
import "./OfferPage.css";
function OfferPage({animation, h3,h4,p }) {
  return (
    <div className="OfferPage">
      <Lottie  className="thinking-animation" animationData={animation}/>
      <div className="thinking-info">
        <h3>{h3}</h3>
        <h4>{h4}</h4>
        <p className="thinking-para">{p}</p>
      </div>
    </div>
  );
}

export default OfferPage;
