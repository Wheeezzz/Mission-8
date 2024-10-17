/* eslint-disable react/no-unescaped-entities */
import cardTonton1 from "./images/card-tonton1.png";
import cardTonton2 from "./images/card-tonton2.png";
import cardTonton3 from "./images/card-tonton3.png";
import cardTonton4 from "./images/card-tonton4.png";
import "../Homepage.css";

function HomepageSection() {
  return (
    <>
      <h1>Melanjutkan Tonton Film</h1>
      <div className="homepageSectionParent">
        <ul className="homepageSection">
          <li className="li1">
            <img src={cardTonton1} alt="card1" />
            <div className="lip1">Don't Look Up</div>
            <div className="overlay1">
              <button className="lipp1">Play Movie</button>
            </div>
          </li>
          <li className="li1">
            <img src={cardTonton2} alt="card2" />
            <div className="lip2">The Batman</div>
            <div className="overlay1">
              <button className="lipp2">Play Movie</button>
            </div>
          </li>
          <li className="li1">
            <img src={cardTonton3} alt="card3" />
            <div className="lip3">Blue Lock</div>
            <div className="overlay1">
              <button className="lipp3">Play Movie</button>
            </div>
          </li>
          <li className="li1">
            <img src={cardTonton4} alt="card4" />
            <div className="lip4">A Man Called Otto</div>
            <div className="overlay1">
              <button className="lipp4">Play Movie</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HomepageSection;
