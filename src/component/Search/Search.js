import classNames from 'classnames/bind';
import Styles from './Search.module.scss'
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import SearchResult from '~/component/Search/SearchResult';
import { useState, useRef, useEffect } from 'react';
import { SearchIcon, LoadIcon, ClearIcon } from '~/Icons'
import { useDebounce } from '~/hooks';

const cx = classNames.bind(Styles)



function Search() {
    const [load, setLoad] = useState(false)
    const [clear, setClear] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showSearchResult, setShowSearchResult] = useState(true)

    const debounced = useDebounce(inputValue, 500)

    const inputRef = useRef()

    useEffect(() => {
        if (!debounced.trim()) {
            return
        }

        setLoad(true)


        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data)
                setLoad(false)
            })
            .catch(err => setLoad(false))
            
    }, [debounced])

    const handleClearOn = (value) => {
        if (value === '') {
            setSearchResult([])
        }
        setInputValue(value)
        setClear(true)
    }

    const handleClearOut = () => {
        setSearchResult([])
        setClear(false)
        setInputValue('')
        inputRef.current.focus()
    }

    const handleShowResult = () => {
        if (searchResult.length > 0) {
            setShowSearchResult(true)
        }
    }

    return (
        <div>
            <Tippy
                visible={showSearchResult && searchResult.length > 0}
                offset={[0, 0]}
                interactive
                render={attrs => (
                    <SearchResult tabIndex="-1" {...attrs} data={searchResult} />
                )}
                onClickOutside={() => setShowSearchResult(false)}
            >
                <div className={cx('search')}>
                    <div className={cx('container')}>
                        <form className={cx('search_input')}>
                            <input
                                ref={inputRef}
                                value={inputValue}
                                className={cx('input-element')}
                                placeholder='Tìm kiếm tài khoản và video'
                                onChange={(e) => handleClearOn(e.target.value)}
                                onFocus={handleShowResult}
                            />

                            <span className={cx('icon')}>
                                {!load && clear && <ClearIcon onClick={handleClearOut} />}
                                {load && <LoadIcon className={cx('load')} />}
                            </span>

                            <span className={cx('separate-element')}></span>
                            <button className={cx('button-element')}>
                                <SearchIcon />
                            </button>
                            <div className={cx('input-outline-element')}></div>
                        </form>
                    </div>
                </div>
            </Tippy>
        </div>
    )
}

export default Search