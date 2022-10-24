import Styles from './Account.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(Styles)

function Account({ data }) {
    console.log(data)
    return (
        <div className={cx('account')}>
            <div className={classNames('wrapper')}>

            </div>
        </div>
    )
}

export default Account