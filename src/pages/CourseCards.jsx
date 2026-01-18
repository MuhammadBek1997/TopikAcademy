import '../style/CourseCards.css'


const CourseCards = () => {
  return (
    <div className='courseCards'>

      <h2>
        O’zingizga mos kursga ro’yxatdan o’ting
      </h2>

      <div className='course-cards'>



        <div className='intensiv-card'>
         <img src="./public/images/tom2.png" alt="" />
         <div className='intensiv-card-top'>
          <h3>Intiensive</h3>
          <button>Davomiyligi: 5 oy</button>
         </div>
         <p>Koreys tilini chuqur <br /> o’zlashtirmoqchi bo’lganlar uchun <br /> haftada 6 kun 1.5 soatdan <br /> intensive kurs.</p>
         <div className='intensiv-card-bottom'>
          <button>Ro’yxatdan o’tish</button>
          <h5>970.000 so’m /oy</h5>
         </div>
        </div>

        <div className='odatiy-card'>
         <img src="./public/images/tom3.png" alt="" />
         <div className='odatiy-card-top'>
          <h3>Odatiy</h3>
          <button>Davomiyligi: 5 oy</button>
         </div>
         <p>Haftada 3 kun 1.5 soatdan <br /> iborat odatiy Koreys tili <br /> darslari.</p>
         <div className='odatiy-card-bottom'>
          <button>Ro’yxatdan o’tish</button>
          <h5>560.000 so’m /oy</h5>
         </div>
        </div>

        <div className='individual-card'>
          <img src="./public/images/tom4.png" alt="" />
          <div className='individual-card-top'>
            <h3>Individual</h3>
            <button>Davomiyligi: 5 oy</button>
          </div>
          <p>O’qituvchidan individual dars <br /> olmoqchi bo’lganlar uchun haftada <br /> 3 kun 1.5 soatdan darslar. <br />
           Moslashuvchan grafik va individual <br /> yondashuv.</p>
          <div className='individual-card-bottom'>
            <button>Ro’yxatdan o’tish</button>
            <h5>1.800.000 so’m /oy</h5>
          </div>
        </div>


      </div>

    </div>
  )
}

export default CourseCards
