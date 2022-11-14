import Styles from './Account.module.scss'
import classNames from 'classnames/bind';
import Img from '~/Img';
import { TickIcon } from '~/Icons';

const cx = classNames.bind(Styles)

function Account({ data, smallAvatar = false, mediumAvatar = false, bigAvatar = false, hover }) {
    return (
        <div className={cx('account', {
            'small-avatar': smallAvatar,
            'medium-avatar': mediumAvatar,
            'big-avatar': bigAvatar,
            'hover': hover,
        })}>
            <div className={cx('wrapper')}>
                <div className={cx('avatar')}>
                    <Img className={cx('img')} alt={data.full_name} src={data.avatar} />
                </div>

                <div className={cx('info')}>
                    <h3 className={cx('nickname')}>
                        <span style={{ 'marginRight': 8 + 'px', }}>{data.nickname}</span>
                        {data.tick && <TickIcon />}
                    </h3>
                    <span className={cx('fullname')}>{data.full_name}</span>
                </div>
            </div>
        </div>
    )
}

export default Account