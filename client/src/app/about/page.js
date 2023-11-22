import style from './style.module.scss'
import Img from '@/components/Img/Img';
import Svg from '@/components/Svg/Svg';

const arrHelp = [
    {
        id: 'phone',
        p: '(414) 857 - 0107'
    },
    {
        id: 'mail',
        p: 'happytummy@restaurant.com'
    },
    {
        id: 'point',
        p: '837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles'
    }
]

const helper = [
    {
        h1: '3',
        p: 'Locations'
    },
    {
        h1: '1995',
        p: 'Founded'
    },
    {
        h1: '65+',
        p: 'Staff Members'
    },
    {
        h1: '100%',
        p: 'Satisfied Customers'
    }
]

export default function About() {
    return (
        <>
            <section className={style.preview}>

                <Img id={'9'} width={'600px'} height={'600px'} />

                <div className={style.textContent}>
                    <h1>We provide healthy food for your family.</h1>
                    <p>
                        Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city`s rich culinary culture, we aim to honor our local roots while infusing a global palate.
                    </p>

                    <p>
                        At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
                    </p>
                </div>

                <div className={style.contacts}>
                    <h1>Come and visit us</h1>

                    <div className={style.wrapperIcon}>

                        {arrHelp.map((el, i) =>
                            <div key={i} className={style.textContacts}>
                                <Svg id={el.id} width={'24px'} height={'24px'} />
                                <p>{el.p}</p>
                            </div>
                        )}

                    </div>

                </div>

            </section>

            <section className={style.statistic}>

                <div className={style.wrapperText}>

                    <h1>A little information for our valuable guest</h1>
                    <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>

                    <div className={style.wrapperPoint}>

                        {helper.map((el, i) =>
                            <div key={i} className={style.points}>
                                <h1>{el.h1}</h1>
                                <p>{el.p}</p>
                            </div>
                        )}

                    </div>

                </div>

                <Img id={'10'} width={'500px'} height={'650px'} />

            </section>
        </>
    )
}