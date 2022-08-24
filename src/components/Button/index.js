import styles from '../Button/Button.module.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text=false,
    disabled = false,
    leftIcon,
    rightIcon,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if(disabled){
        delete props.onClick;
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
    })
    return ( 
    <Comp className = {classes} {...props} >
        {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
        <span> {children} </span> 
        {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
    )

}

export default Button;