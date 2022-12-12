import { videos } from '~/apiServices/videosService'
import { useEffect, useState, useRef, useCallback } from 'react'

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
}

function useVideoLoading(type) {
    const [hasMore, setHasMore] = useState(false)
    const [listVideo, setListVideo] = useState([])
    const [listVideoRender, setListVideoRender] = useState([])
    const [load, setLoad] = useState(false)
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchAPI = async () => {
            const res = await videos(type, page)
            setListVideo(res)
            setHasMore(res.length > 0)
        }
        fetchAPI()
    }, [type, page])

    useEffect(() => {
        if (page > 1) {
            setLoad(true)
            setTimeout(() => {
                if (listVideoRender.length && listVideoRender[listVideoRender.length - listVideo.length].id === listVideo[0].id) {
                    console.log('It\'s loop')
                    return
                } else {
                    setListVideoRender(prev => {
                        return [...prev, ...listVideo]
                    })
                }

                setLoad(false)
            }, 1200)
        } else {
            setListVideoRender(listVideo)
        }
    }, [listVideo, page, listVideoRender])

    const observer = useRef()
    const lastVideoOnPageRef = useCallback(node => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(prev => prev + 1)
            }
        }, options)
        if (node) {
            observer.current.observe(node)
        }
    }, [hasMore])

    return { listVideoRender, hasMore, load, lastVideoOnPageRef }
}

export default useVideoLoading