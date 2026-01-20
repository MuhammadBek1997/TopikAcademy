import '../style/GrantChance.css'

const GrantChance = () => {
  return (
    <>
      <section className='Garant'>

        <div className='Garant-cont'>
          <h1>
            Koreya Universitetlariga 100% gacha grant <span className='centr'>yutish imkoniyati</span>
          </h1>
        </div>
        <div className='GKS'>

          <div>
            <img src="/images/logo.png" alt="" />
          </div>



          <div className='GKS-cont'>
            <h4>
              GKS (Global Korean Scholarship) - <span className='color-cont'> $70.000 </span> lik Grant
            </h4>
            <p>
              Janubiy Koreya hukumatining stipendiya dasturi (GKS) Koreyaning Xalqaro ta'lim bo'yicha milliy instituti tomonidan <span className='color-cont-item'>xorijiy</span> talabalarning Koreyada bakalavr va magistratura bosqichida <span className='color-cont-item'>100% gacha to’liq grant</span> 
              va oylik <span className='color-cont-item'>stipendiya</span>  olish imkoniyatingiz bor
            </p>
            <div className='garant'>

              <h4>
                GKS granti sizga nima beradi
              </h4>
              <p>
                Dastur boshlanganida va tugaganida Koreyaga borish hamda Koreyadan qaytish xarajatlari qoplanadi.
                Koreyaga yetib borganda joylashib olish uchun bir martalik to'lovberiladi. Miqdori - 200 000 Koreya voni (taxminan 157 AQSh dollari).
                Til kursi va universitetning kontrak to'lovi to'liq to'lab beriladi (faqat magistr va doktorantlarga)... <span className='color-cont-item'>ko’proq</span> 
              </p>

            </div>

          </div>
        </div>
           <div className='video'>
            <img src="/images/video.png" alt="" />
          </div>

      </section>
    </>
  )
}

export default GrantChance