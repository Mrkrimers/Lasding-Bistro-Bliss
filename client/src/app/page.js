import Header from '@/components/Header/Header'
import style from './page.module.scss'
import Footer from '@/components/Footer/Footer'
import Svg from '@/components/Svg/Svg'
import Img from '@/components/Img/Img'

const menu = [{ p: 'Breakfast', id: 'icon-coffe', serviceP: 'Caterings', img: '5' },
{ p: 'Main Dishes', id: 'icon-dish', serviceP: 'Birthdays', img: '6' },
{ p: 'Drinks', id: 'icon-juice', serviceP: 'Weddings', img: '7' },
{ p: 'Desserts', id: 'icon-coffe', serviceP: 'Events', img: '8' }]

export default function Home() {
  return (
    <>
      <Header />

      <section className={style.preview}>

        <div className={style.wrapper}>

          <h1>Best food for your taste</h1>
          <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
          <div className={style.btnWrapper}>
            <div className={style.btnBook}>Book A Table</div>
            <div className={style.btnExplore}>Explore Menu</div>
          </div>

        </div>

      </section>

      <section className={style.menu}>

        <h2>Browse Our Menu</h2>

        <div className={style.wrapperFlex}>

          {menu.map((el, i) =>
            <div key={i} className={style.border}>
              <Svg id={el.id} />
              <h4>{el.p}</h4>
              <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
              <div className={style.btnExplore}>Explore Menu</div>
            </div>)
          }

        </div>

      </section>

      <section className={style.services}>

        <h2>We also offer unique services for your events</h2>

        <div className={style.wrapperFlex} >

          {menu.map((el, i) =>
            <div key={i} className={style.border}>
              <Img id={el.img} width='280px' height='320px' />
              <h4>{el.serviceP}</h4>
              <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
            </div>
          )}

        </div>

      </section>

      <Footer />
    </>
  )
}
