import { videos } from '~/apiServices/videosService'
import { useEffect, useState, useRef, useCallback } from 'react'

function useVideoLoading(type) {
    const [load, setLoad] = useState(true)
    const [hasMore, setHasMore] = useState(false)
    const [listVideo, setListVideo] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        setLoad(true)

        const fetchAPI = async () => {
            const res = await videos(type, page)

            setListVideo(prev => {
                if (prev.length && prev[prev.length - 15].id === res[0].id) {
                    return [...prev]
                } else {
                    return [...prev, ...res]
                }
            })

            setHasMore(res.length > 0)
        }

        fetchAPI()
        setLoad(false)

    }, [type, page])

    const observer = useRef()

    const lastVideoOnPageRef = useCallback(node => {
        if (load) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(prev => prev + 1)
            }
        })
        if (node) {
            observer.current.observe(node)
        }
    }, [load, hasMore])

    return { listVideo, load, lastVideoOnPageRef }
}

export default useVideoLoading