import style from '../Img/style.module.scss'

export default function Img({ id, width, height }) {
    switch (id) {
        case '1':
            return (
                <div className={style.one} style={{ width: width, height: height }}></div>
            );
        case '2':
            return (
                <div className={style.two} style={{ width: width, height: height }}></div>
            );
        case '3':
            return (
                <div className={style.three} style={{ width: width, height: height }}></div>
            );
        case '4':
            return (
                <div className={style.four} style={{ width: width, height: height }}></div>
            );

        default:
            return;
    }
}