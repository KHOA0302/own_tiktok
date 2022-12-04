import Styles from './Home.module.scss'
import classNames from 'classnames/bind'
import ForYouVideos from '~/component/ForYouVideos'

const cx = classNames.bind(Styles)

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <ForYouVideos />
            </div>

            <div className={cx('bottom')}>
                <div className={cx('download-app-btn')}></div>
                <div className={cx('to-top-btn')}></div>
            </div>

        </div>
    )
}

export default Home