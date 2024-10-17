import headerImage from "./images/header.png";
import "../Homepage.css";

function HeaderHomepage() {
  return (
    <>
      <img src={headerImage} alt="Header Image" className="headerImage" />
      <div className="headerContent">
        <p className="headerTitle">Duty After School</p>
        <div className="headerSubtitle">
            <p className="p1">Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,</p>
            <p className="p2">Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa</p>
            <p className="p3">sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.</p>
        </div>
        <div className="headerButton">
            <button className="button1">Mulai</button> 
            <button className="button2">Selengkapnya</button>
            <button className="ageButton">18+</button></div>
      </div>
    </>
  );
}

export default HeaderHomepage;
