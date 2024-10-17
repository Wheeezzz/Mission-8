/* eslint-disable react/no-unescaped-entities */
import webLogo from "./images/logo.png";
import "../Homepage.css";

function HomepageFooter() {
  return (
    <>
      <ul className="footer">
        <li className="footerTitle">
          <img src={webLogo} alt="Web Logo" className="footerLogo" />
          <p>© 2023 Chill All Rights Reserved.</p>
        </li>
        <li className="li1f">
          <div className="genre">Genre</div>
          <p>Aksi</p>
          <p>Anak-anak</p>
          <p>Anime</p>
          <p>Britania</p>
        </li>
        <li className="li1f">
          <div className="genre2">Genre</div>
          <p>Drama</p>
          <p>Fantasi Ilmiah dan Fantasi</p>
          <p>Kejahatan</p>
          <p>KDrama</p>
        </li>
        <li className="li1f">
          <div className="genre2">Genre</div>
          <p>Komedi</p>
          <p>Petualangan</p>
          <p>Perang</p>
          <p>Romantis</p>
        </li>
        <li className="li2f">
          <div className="genre2">Genre</div>
          <p>Sains dan Alam</p>
          <p>Thriller</p>
        </li>
        <li className="li1f">
          <div className="genre">Bantuan</div>
          <p>FAQ</p>
          <p>Kontak Kami</p>
          <p>Privasi</p>
          <p>Syarat & Ketentuan</p>
        </li>
      </ul>
    </>
  );
}

export default HomepageFooter;
