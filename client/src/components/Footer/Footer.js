import style from '../Footer/style.module.scss'
import Img from '../Img/Img';
import Svg from '../Svg/Svg'

const pages = ['Pages', 'Home', 'About', 'Menu', 'Pricing', 'Blog', 'Contact', 'Delivery'];
const utilityPages = ['Utility Pages', 'Start Here', 'Styleguide', 'Password Protected', '404 Not Found', 'Licenses', 'Changelog', 'View More'];

export default function Footer() {
    return (
        <footer className={style.footer}>

            <div className={style.wrapper}>

                <div className={style.logo}>
                    <div className={style.wrapperLogo}>
                        <Svg id={'food-footer'} width={'56px'} height={'56px'} />
                        <h1>Bistro Bliss</h1>
                    </div>

                    <p>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
                </div>

                <nav className={style.nav}>
                    <ul>
                        {pages.map((el, i) => <li key={i}>{el}</li>)}
                    </ul>

                    <ul>
                        {utilityPages.map((el, i) => <li key={i}>{el}</li>)}
                    </ul>
                </nav>

                <div className={style.followInsta}>

                    <div className={style.hat}>
                        <p>Follow Us On Instagram</p>
                    </div>

                    <div className={style.img}>
                        <Img id='1' width='160px' height='160px' />
                        <Img id='2' width='160px' height='160px' />
                        <Img id='3' width='160px' height='160px' />
                        <Img id='4' width='160px' height='160px' />
                    </div>

                </div>
            </div>

            <p className={style.copyRigth}>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>

        </footer>
    )
}