import Styles from './ForYouVideos.module.scss'
import classNames from 'classnames/bind'
import Video from '../Video'
import useVideoLoading from '~/hooks/useVideoLoading'
import useAutoPlay from '~/hooks/useAutoPlay'
import { useCallback, useEffect, useState } from 'react'
import { Loading } from '~/component/Animation'

const cx = classNames.bind(Styles)


function ForYouVideos() {
    const { listVideoRender, hasMore, load, lastVideoOnPageRef } = useVideoLoading('for-you')

    const img = new Image()

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7
    }
    const { videoOnViewRef } = useAutoPlay(options)

    const videoRef = useCallback((node, index) => {
        videoOnViewRef(node)
        if (listVideoRender.length - 1 === index) {
            lastVideoOnPageRef(node)
        }
    }, [listVideoRender.length])


    return (
        <div className={cx('wrapper')}>
            {listVideoRender.map((video, index) => {
                img.src = video.thumb_url
                return <Video
                    ref={ref => videoRef(ref, index)}
                    key={video.id}
                    data={video}
                    isVertical={img.width > img.height}
                    dataId={video.id} />
            })}
            {hasMore && load && <Loading />}
        </div>
    )
}

export default ForYouVideos
