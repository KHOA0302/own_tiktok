import Styles from './ForYouVideos.module.scss'
import classNames from 'classnames/bind'
import Video from '../Video'
import useVideoLoading from '~/hooks/useVideoLoading'
import useAutoPlay from '~/hooks/useAutoPlay'
import { useEffect, useRef, useState } from 'react'

const cx = classNames.bind(Styles)

function ForYouVideos() {
    const { listVideo, load, lastVideoOnPageRef } = useVideoLoading('for-you')
    const [playing, setPlaying] = useState(false);

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7
    }
    const { isOnView, videoOnViewRef } = useAutoPlay(options)

    useEffect(() => {
        console.log(isOnView)
    }, [isOnView])

    return (
        <div className={cx('wrapper')}>
            {listVideo.map((video, index) => {
                if (listVideo.length === index + 1) {
                    return <Video ref={lastVideoOnPageRef} key={video.id} data={video} />
                } else {
                    return <Video ref={videoOnViewRef} key={video.id} data={video} />
                }
            })}
        </div>
    )
}

export default ForYouVideos
