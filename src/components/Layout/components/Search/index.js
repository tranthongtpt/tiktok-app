import { useEffect, useState,useRef } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleXmark, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../Popper/AccountItem';

import classNames from 'classnames/bind';
import styles from '../Search/Search.module.scss';

const cx = classNames.bind(styles)
function Search() {
    const [searchValue,setSearchValue] = useState('');
    const [searchResult,setSearchResult]=useState([]);
    const [showResults,setShowResults] = useState(true)

    const inputRef = useRef();

    useEffect(()=>{
        fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=hoaa&type=less')
        .then(res =>res.json())
        .then(res => {
            console.log(res);
        })
    },[]);

    const handleHideResult = () =>{
        setShowResults(false)
    }
    return (         
        <HeadlessTippy
            interactive
            visible={showResults && searchResult.length >0}
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
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input 
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos" 
                    spellCheck={false} 
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResults(true)}
                />
                
                {!!searchValue && (
                    <button className={cx('clear')} 
                    onClick={() => {
                        setSearchValue('')
                        inputRef.current.focus() 
                    }}
                    >
                    <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/> */}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </button>
            </div>
        </HeadlessTippy>
     );
}

export default Search;