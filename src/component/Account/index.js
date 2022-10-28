import Styles from './Account.module.scss'
import classNames from 'classnames/bind';
import Img from '~/Img';

const cx = classNames.bind(Styles)

function Account({ data }) {
    return (
        <div className={cx('account')}>
            <div className={cx('wrapper')}>
                <div className={cx('avatar')}>
                    <Img className={cx('img')} alt={data.full_name} src={data.avatar} />
                </div>

                <div className={cx('info')}>
                    <h3 className={cx('nickname')}>
                        <span>{data.nickname}</span>
                    </h3>
                    <span className={cx('fullname')}>{data.full_name}</span>
                </div>
            </div>
        </div>
    )
}

export default Account