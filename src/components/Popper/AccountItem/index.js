import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames  from "classnames/bind";
import styles from '../AccountItem/AccountItem.module.scss';

const cx=classNames.bind(styles)
function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b2f6128920dc686fa91dd2c4dcb6a92d~c5_100x100.jpeg?x-expires=1661324400&x-signature=HkkoBgjz%2BrtQC0qB7QjcxzHvxY8%3D" alt="hoa"></img>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen van a</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </p>
                <span className={cx('username')}>Nguyenvana</span>
            </div>
        </div>
     );
}

export default AccountItem;