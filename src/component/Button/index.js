import classNames from 'classnames/bind'
import Style from './Button.module.scss';

const cx = classNames.bind(Style)

function Button({
    type = false,
    color,
    backgroundColor,
    icon = false,
    title,
    Click = false,
    href = 'false',
    ...props
}) {
    const classes = cx('wrapper', {
        [type]: type,
    })
    return (
        <button className={classes} href={href} {...props}>
            {icon && <span className={cx('icon')}>{icon}</span>}
            {title}
        </ button >
    )
}

export default Button