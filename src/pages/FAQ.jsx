import '../style/FAQ.css'

const FAQ = () => {
  return (
    <>
      <h2 className="title">
        O‘quvchilarimizning natijalari TOPIK 6 gacha
      </h2>
      <div className="marquee">
        <div className="marquee-track">
          <img src="/images/topik.png" alt="topik" />
          <img src="/images/topik.png" alt="topik" />
          <img src="/images/topik.png" alt="topik" />
          <img src="/images/topik.png" alt="topik" />
          <img src="/images/topik.png" alt="topik" />
        </div>
      </div>
      <div className="marquee">
        <div className="marquee-track reverse">
          <img src="/images/topik.png" alt="topik" />
          <img src="/images/topik.png" alt="topik" />
          <img src="/images/topik.png" alt="topik" />
          <img src="/images/topik.png" alt="topik" />
          <img src="/images/topik.png" alt="topik" />
        </div>
      </div>
      <div className="btn-wrap">
        <button className="btn">ARIZA QOLDIRISH</button>
      </div>
    </>
  )
}

export default FAQ
