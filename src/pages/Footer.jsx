import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-map">
        <img src="/images/xarita.png" alt="Map" />
      </div>
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/topic.png" alt="Topik Academy" />
        </div>
        <div className="footer-menu">
          <li>
            <a href="#">Nega biz</a>
          </li>
          <li>
            <a href="#">Natijalar</a>
          </li>
          <li>
            <a href="#">Kurslar</a>
          </li>
          <li>
            <a href="#">Ko‘p beriladigan savollar</a>
          </li>
        </div>
        <div className="footer-social">
          <img src="/images/telfon.png" alt="" />
          <img src="/images/telegram.svg" alt="" />
          <img src="/images/instagram.svg" alt="" />
          <img src="/images/youtube.svg" alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Footer