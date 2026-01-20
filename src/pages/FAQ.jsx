import '../style/FAQ.css'

const FAQ = () => {
  return (
    <div className='faq'>
      <div className='faq-questions'>
        <h2>
          Ko’p beriladigan savollar
        </h2>
        <div className='questions'>
          <h3>O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?   <button>+</button></h3>
          <h3>O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?   <button>+</button></h3>
          <h3>O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?   <button>+</button></h3>
          <h3>O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?   <button>+</button></h3>
        </div>
      </div>

      <div className='faq-contact'>


        <div className='faq-help-text'>
          <h2>
            Savollaringiz qoldimi?
          </h2>
          <p>
            Ma’lumotlaringizni qoldiring siz bilan bog’lanib barcha savollaringizga javob beramiz.
          </p>
        </div>



        <div className='faq-help-inputs'>

          <input type="text" placeholder="Ismingiz" />
          <input type="text" placeholder="Telefon raqamingiz" />
          <button>
            Ariza qoldirish
          </button>
        </div>

      </div>

    </div>
  )
}

export default FAQ