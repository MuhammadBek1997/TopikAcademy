import '../style/WhyOurAcademy.css'


const WhyOurAcademy = () => {
  return (
    <div className='WhyOurAcademy'>
      <h2>Nima uchun aynan TOPIK academy?</h2>

      <div className='sharoit-cards'>

        <div className='sharoit-cards-top'>
          <div>
            <img src="./public/images/img1.png" alt="" />
            <h3>Professional ustozlar</h3>
            <p>Sizga 4 yildan ortiq tajriba va Topik <br /> darajasi 6 bo’lgan o’qituvchilar dars <br /> beradi</p>
          </div>
          <div>
            <img src="./public/images/img2.png" alt="" />
            <h3>Bepul coworking zonalari</h3>
            <p>Erkin dars qilish, netvorking va o’z ustingizda <br /> ishlash uchun bepul coworking zonalarimiz <br /> mavjud</p>
          </div>
          <div>
            <img src="./public/images/img3.png" alt="" />
            <h3>Haftalik tadbirlar</h3>
            <p>TOPIK acdemy jamoasi o’quvchilari <br /> uchun doimiy ravishda qo’shimcha <br /> tadbirar tashkilb keladi</p>
          </div>
        </div>

        <div className='sharoit-cards-bottom'>
          <div>
            <img src="./public/images/img4.png" alt="" />
            <h3>Bepul sinov imtihonlari</h3>
            <p>Har davomida tashkillanadigan sinov <br /> imtihonlarida qatnashib o’z darajangizni <br /> bilib borasiz</p>
          </div>
          <div>
            <img src="./public/images/img5.png" alt="" />
            <h3>Yordamchi kuratorlar</h3>
            <p>Darslarni o’zlashtirishda qiyinchilik <br /> bo’lsa sizga yordam beradigan <br /> kuratoringiz bo’ladi</p>
          </div>
          <div>
            <img src="./public/images/img6.png" alt="" />
            <h3>Konsulting xizmatlar</h3>
            <p>Muvafaqqiyatli bitirgan talabalarimizga <br /> Janubiy Koreyada o’qish uchun visa <br /> olishda, 
              universitet tanlash va grand <br /> yutishda yordam beramiz</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default WhyOurAcademy