import '../style/OurAcademy.css'

const OurAcademy = () => {
  return (
    <>
      <section className='OurAcademy'>

        <div className='OurAcademy-cont'>
          <h2>
            TOPIK academy aniq siz uchun agar siz:
          </h2>
        </div>

        <div className='Language'>

          <div className='Language-cont'>
            <button>
              <img src="/images/coment.png" alt="" />
            </button>
            <p> <span className='color'>Qisqa</span> muddat ichida Koreys  tilida gapirishni istaysiz</p>
          </div>

          <div className='Language-cont'>
            <button>
              <img src="/images/raceta.png" alt="" />
            </button>
            <p> Koreys tili o’rganib o’z <span className='color'>karyerangizni</span>qurmoqchisiz</p>
          </div>

          <div className='Language-cont'>
            <button>
              <img src="/images/money.png" alt="" />
            </button>
            <p> Topik sertifikatini olib Koreyaning nufuzli universitetlariga <span className='color'>GRANT</span> yutmoqchisiz</p>
          </div>
          <div className='Language-cont'>
            <button>
              <img src="/images/travel.png" alt="" />
            </button>
            <p> Janubiy Koreya davlatida <span className='color'>o’qish</span>  va <span className='color'>ishlash</span> uchun ketmoqchisiz</p>
          </div>

          <div className='Language-cont'>
            <button>
              <img src="/images/nayza.png" alt="" />
            </button>
            <p> Koreys tilini o’rta darajda bilasiz va darajangizni<span className='color'> oshirmoqchisiz</span> </p>
          </div>

          <div className='Language-cont'>
            <button>
              <img src="/images/key.png" alt="" />
            </button>
            <p> Ko’p yillardan buyon o’qib ham <span className='color'>natijaga</span> chiqa olmayapsiz</p>
          </div>

        </div>

        <div className='yes'>
          <button>
            Ha, bu men
          </button>
        </div>
      </section>
    </>
  )
}

export default OurAcademy