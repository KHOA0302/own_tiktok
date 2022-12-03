import { useState, useCallback, useEffect } from 'react'


const useAutoPlay = () => {
    const [onScroll, setOnScroll] = useState(1)
    const [videos, setVideos] = useState([])


    const isInViewport = element => {
        console.log('10')
        const rect = element.getBoundingClientRect();

        const isTarget = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        )

        if (!isTarget) {
            element.currentTime = 0
        }
        return isTarget;
    }

    window.addEventListener('scroll', () => {
        setOnScroll(prev => prev + 0.00001)
    })
    useEffect(() => {
        videos.forEach(video => {
            console.log('30')
            video.pause()
            isInViewport(video) && video.play()
        })
    }, [onScroll, videos])

    const listVideoOnPage = useCallback(node => {
        if (node) setVideos(prev => [...prev, node])
    }, [])

    return { listVideoOnPage }
}

export default useAutoPlay



