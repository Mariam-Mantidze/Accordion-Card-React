import Illustration from "/images/illustration-woman-online-mobile.svg";
import Shadow from "/images/bg-pattern-mobile.svg";
import "./imgContainer.css";

export default function Imgcontainer() {
  return (
    <div className="img-container">
      <img className="main-img" src={Illustration} alt="illustration" />
      <img className="shadow" src={Shadow} alt="shadow of the box" />
    </div>
  );
}
