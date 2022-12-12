import Style from './Loading.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(Style)

function Loading() {
    return (
        <div className={cx('wrapper')} >
            <div className={cx("red-not")}></div>
            <div className={cx("blue-not")}></div>
        </div >
    )
}

export default Loading