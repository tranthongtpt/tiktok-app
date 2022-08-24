import styles from '../Header/Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleXmark, faMagnifyingGlass, faSign, faSignIn, faSpinner} from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../Popper/AccountItem';
import Button from '../../../Button';



const cx = classNames.bind(styles)

function Header() {
    const [searchResult,setSearchResult]=useState([])

    useEffect(()=>{
        setSearchResult([]
            ,0)
    },[])
    return  <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <a href="#">
                    <img src={images.logo} alt="tiktok"/>
                </a>
            </div>
            <Tippy
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
            </Tippy>
            <div className={cx('actions')}>
                <Button text>Login</Button>
                <Button primary>Sign</Button>
                
            </div>
        </div>
    </header>
}

export default Header;