import style from './style.module.scss'
import BigPng from "@/components/BigPng/BigPng";

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
export default function cards({ params }) {
    const [data] = arr.filter((el) => el.id === +params.id)

    return (
        <main className={style.wrapper}>

            <BigPng id={data.id} width={'650px'} height={'570px'} />

            <div className={style.textContent}>
                <h1>{data.dish}</h1>
                <p>{data.description}</p>
                <p>Total: {data.price}</p>
            </div>

        </main>
    )
}