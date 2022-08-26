import styles from '../Header/Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleQuestion, faCircleXmark, faCloudUpload, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faMagnifyingGlass, faMessage, faSignOut, faSpinner, faUser} from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; 
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../Popper/AccountItem';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';

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
    const [searchResult,setSearchResult]=useState([])
    const currentUser = true;
    useEffect(()=>{
        setTimeout(() => {
            setSearchResult([])
        } ,0);
    },[])

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
            <HeadlessTippy
                interactive
                visible={searchResult.length >0}
                render={attrs =>(
                    <div className={cx('search-result')} tabIndex="-1" {...attrs} >
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            <AccountItem/>
                            <AccountItem/>
                            <AccountItem/>
                            <AccountItem/>
                        </PopperWrapper>
                        </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false}></input>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                </div>
            </HeadlessTippy>
            
            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy delay={200} content="Upload video" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCloudUpload} />
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
                        <img className={cx('user-avatar')} alt='nguyen van a' src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b2f6128920dc686fa91dd2c4dcb6a92d~c5_100x100.jpeg?x-expires=1661677200&x-signature=KWoqpABDkvObsdW0opjb5EFpos4%3D'/>
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