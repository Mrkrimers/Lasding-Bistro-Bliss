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
        case '5':
            return (
                <div className={style.five} style={{ width: width, height: height }}></div>
            );
        case '6':
            return (
                <div className={style.six} style={{ width: width, height: height }}></div>
            );
        case '7':
            return (
                <div className={style.seven} style={{ width: width, height: height }}></div>
            );
        case '8':
            return (
                <div className={style.eight} style={{ width: width, height: height }}></div>
            );
        case '9':
            return (
                <div className={style.nine} style={{ width: width, height: height }}></div>
            );
        case '10':
            return (
                <div className={style.ten} style={{ width: width, height: height }}></div>
            );

        default:
            return;
    }
}