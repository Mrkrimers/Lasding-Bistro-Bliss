import Png from '@/components/Png/Png'
import style from './style.module.scss'
import Link from 'next/link'

const arr = [
    { id: 1, price: '$ 9.99', dish: 'Fried Eggs', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
    { id: 2, price: '$ 15.99', dish: 'Hawaiian Pizza', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
    { id: 3, price: '$ 7.25', dish: 'Martinez Cocktail', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
    { id: 4, price: '$ 20.99', dish: 'Butterscotch Cake', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
    { id: 5, price: '$ 5.89', dish: 'Mint Lemonade', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
    { id: 6, price: '$ 18.05', dish: 'Chocolate Icecream', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
    { id: 7, price: '$ 12.55', dish: 'Cheese Burger', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
    { id: 8, price: '$ 12.99', dish: 'Classic Waffles', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
]

export default function Menu() {

    return (
        <div className={style.wrapper}>
            <div className={style.previewText}>
                <h1>Our Menu</h1>
                <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
            </div>

            <div className={style.menuContent}>

                {arr.map((el) =>
                    <Link key={el.id} href={`/menu/${el.id}`}>
                        <div className={style.item}>

                            <Png id={el.id} width={'290px'} height={'219px'} />

                            <div className={style.textMenu}>
                                <h3>{el.price}</h3>
                                <p>{el.dish}</p>
                                <p>{el.description}</p>
                            </div>
                        </div>
                    </Link>
                )}

            </div>
        </div >
    )
} 