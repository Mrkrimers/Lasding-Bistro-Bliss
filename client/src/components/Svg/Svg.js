import style from '../Svg/style.module.scss'

export default function Svg({ id, width, height }) {
    switch (id) {
        case 'twit':
            return (
                <div className={style.twit} style={{ width: width, height: height }}></div>
            );
        case 'fbook':
            return (
                <div className={style.fbook} style={{ width: width, height: height }}></div>
            );
        case 'insta':
            return (
                <div className={style.insta} style={{ width: width, height: height }}></div>
            );
        case 'git':
            return (
                <div className={style.git} style={{ width: width, height: height }}></div>
            );
        case 'food':
            return (
                <div className={style.food} style={{ width: width, height: height }}></div>
            );
        case 'mail':
            return (
                <div className={style.mail} style={{ width: width, height: height }}></div>
            );
        case 'phone':
            return (
                <div className={style.phone} style={{ width: width, height: height }}></div>
            );
        case 'food-footer':
            return (
                <div className={style.foodFooter} style={{ width: width, height: height }}></div>
            );

        default:
            return;
    }
}