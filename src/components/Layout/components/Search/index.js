import { useEffect, useState,useRef } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleXmark, faMagnifyingGlass,faSpinner} from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';
import { useDebounce } from '../../../../hooks';
import classNames from 'classnames/bind';
import styles from '../Search/Search.module.scss';
import * as searchServices from '../../../../apiServices/searchServices'

const cx = classNames.bind(styles)
function Search() {
    const [searchValue,setSearchValue] = useState('');
    const [searchResult,setSearchResult]=useState([]);
    const [showResults,setShowResults] = useState(true)
    const [loading,setLoading] = useState(true)
    const debounced = useDebounce(searchValue,500)

    const inputRef = useRef();

    useEffect(()=>{

        if(!debounced) {
            setSearchResult([])
            return;
        }
        
        const fetchApi = async () =>{
            setLoading(true)

            const result = await searchServices.search(debounced)
            setSearchResult(result)
        }
        
        fetchApi()
    },[debounced]);

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
                        {searchResult.map((result) => (
                            <AccountItem key={result.index} data={result}/>
                        ))}
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
                
                {!!searchValue && !loading && (
                    <button className={cx('clear')} 
                    onClick={() => {
                        setSearchValue('')
                        setSearchResult([])
                        inputRef.current.focus() 
                    }}
                    >
                    <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </button>
            </div>
        </HeadlessTippy>
     );
}

export default Search;