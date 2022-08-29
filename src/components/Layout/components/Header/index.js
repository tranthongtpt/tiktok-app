import styles from '../Header/Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleQuestion, faCloudUpload, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faMessage, faPaperPlane, faSignOut, faUser} from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';
import Image from '../../../Image';
import Search from '../Search';

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}/>,
        title: 'English',
        children:{
            title:'Language',
            data:[
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'vietnamese'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: 'Feedback and help',
        to:'/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title: 'Keyboard shortcuts',
    }
]

function Header() {
    
    const currentUser = true;

    //handle logic
    const handleMenuchange =(menuItem) =>{
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}/>,
            title: 'view profile',
            to:'/@tttt'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins}/>,
            title: 'get coin',
            to:'/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear}/>,
            title: 'setting',
            to:'/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut}/>,
            title: 'log out',
            to:'/logout',
            separate: true
        },
    ]
    

    return  <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <a href="/">
                    <img src={images.logo} alt="tiktok"/>
                </a>
            </div>
            
            <Search/>
            
            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy delay={200} content="Upload video" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCloudUpload} />
                            </button>
                        </Tippy>
                        <Tippy delay={200} content="Send message" placement='bottom'>
                           <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faPaperPlane} />
                           </button>
                        </Tippy>
                        <Tippy delay={200} content="Send message" placement='bottom'>
                           <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faMessage} />
                                <span className={cx('badge')}>12</span>
                           </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button text>Login</Button>
                        <Button primary>Sign</Button>
                        
                    </>
                )}

                <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuchange}>
                    {currentUser ? (
                        <Image 
                        className={cx('user-avatar')} 
                        src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b2f6128920dc686fa91dd2c4dcb6a92d~c5_100x100.jpeg?x-expires=1661677200&x-signature=KWoqpABDkvObsdW0opjb5EFpos4%3D'
                        alt='nguyen van a' 
                        fallback="https://yt3.ggpht.com/yti/AJo0G0mlpEmAse85wbdBzSm9GMJJjAREd87xZUW5ALIfqg=s88-c-k-c0x00ffffff-no-rj-mo"
                        />
                    ) : (
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical}/>
                        </button> 
                    )}
                </Menu>
            </div>
        </div>
    </header>
}

export default Header;