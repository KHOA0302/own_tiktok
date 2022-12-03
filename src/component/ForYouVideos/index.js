import Styles from './ForYouVideos.module.scss'
import classNames from 'classnames/bind'
import Video from '../Video'
import useVideoLoading from '~/hooks/useVideoLoading'
import useAutoPlay from '~/hooks/useAutoPlay'

const cx = classNames.bind(Styles)

function ForYouVideos() {
    const { listVideo, load, lastVideoElementRef } = useVideoLoading('for-you')
    const { listVideoOnPage } = useAutoPlay()

    return (
        <div className={cx('wrapper')}>
            {listVideo.map((video, index) => {
                if (listVideo.length === index + 1) {
                    return <Video ref={lastVideoElementRef} key={video.id} data={video} />
                } else {
                    return <Video ref={listVideoOnPage} key={video.id} data={video} />
                }
            })}
        </div>
    )
}

export default ForYouVideos
