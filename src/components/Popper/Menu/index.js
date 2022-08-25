import Tippy from '@tippyjs/react/headless';
import styles from '../Menu/Menu.module.scss';
import classNames from 'classnames/bind';
import {Wrapper as PopperWrapper} from '../../Popper'
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Menu({children,items=[]}) {

    const [history,setHistory] = useState([{data: items}]);
    const current = history[history.length - 1];

    const renderItems = () =>{
        return current.data.map((item,index) =>
        {
            const isParent = !!item.children
            return <MenuItem key={index} data={item} onClick={()=> {
                if(isParent) {
                    setHistory(prev => [...prev,item.children])
                }
            }}/>
        })
    }

    return (  
        <Tippy 
            visible
            delay={[0,500]}
            interactive
            placement="bottom-end"
            render={(attrs) =>(
                <div className={cx('menu-list')} tabIndex="-1" {...attrs} >
                    <PopperWrapper className={cx('menu-popper')}>
                        <Header title="Language"/>
                        {renderItems()}
                    </PopperWrapper>
                    </div>
            )}
            >
            {children}
            </Tippy>   
    );
}
export default Menu;