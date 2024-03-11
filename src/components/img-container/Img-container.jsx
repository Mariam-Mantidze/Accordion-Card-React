import IllustrationMobile from "/images/illustration-woman-online-mobile.svg";
import ShadowMobile from "/images/bg-pattern-mobile.svg";
import "./imgContainer.css";

export default function Imgcontainer() {
  return (
    <div className="img-container">
      <img className="main-img" src={IllustrationMobile} alt="illustration" />
      <img className="shadow" src={ShadowMobile} alt="shadow of the box" />
    </div>
  );
}
