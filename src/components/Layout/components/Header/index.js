import styles from '../Header/Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function Header() {
    return  <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <a href="#">
                    <img src="https://img.icons8.com/bubbles/100/000000/tiktok.png"/>
                </a>
            </div>
        </div>
    </header>
}

export default Header;