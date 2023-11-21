import style from '@/components/Header/style.module.scss'
import Svg from '../Svg/Svg'
import Link from 'next/link'

export default function Header() {
    return (
        <header className={style.header}>

            <div className={style.hat}>
                <div className={style.contacts}>

                    <Svg id='phone' width='18px' height='18px' />
                    <p style={{ "margin-right": "15px" }}>(414) 857 - 0107</p>
                    <Svg id='mail' width='18px' height='18px' />
                    <p>yummy@bistrobliss</p>

                </div>

                <div className={style.media}>
                    <Svg id='twit' width='28px' height='28px' />
                    <Svg id='fbook' width='28px' height='28px' />
                    <Svg id='insta' width='28px' height='28px' />
                    <Svg id='git' width='28px' height='28px' />
                </div>
            </div>

            <div className={style.navigaton}>

                <div className={style.logo}>
                    <Svg id='food' width='56px' height='56px' />
                    <h1>Bistro Bliss</h1>
                </div>

                <nav className={style.nav}>
                    <Link href={'/'}> <p>Home</p> </Link>
                    <Link href={'/about'}> <p>About</p> </Link>
                    <Link href={'/menu'}> <p>Menu</p> </Link>
                </nav>

                <div className={style.button}>Book A Table</div>

            </div>

        </header >
    )
}