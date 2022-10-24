import classNames from 'classnames/bind';
import Styles from './Search.module.scss'
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import SearchResult from '~/component/Search/SearchResult';
import { useState, useRef } from 'react';

import { SearchIcon, LoadIcon, ClearIcon } from '~/Icons'

const cx = classNames.bind(Styles)

function Search() {
    const [load, setLoad] = useState(false)
    const [clear, setClear] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const inputRef = useRef()
    let data

    const userAction = async () => {
        const response = await fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${inputValue}&type=less`);
        const myJson = await response.json(); //extract JSON from the http response
        return myJson.data
    }

    const handleClearOn = (value) => {
        setInputValue(value)
        setClear(true)

        data = userAction()

        console.log(data)
    }

    const handleClearOut = () => {
        setClear(false)
        setInputValue('')
        inputRef.current.focus()
    }

    return (
        <div>
            <Tippy
                trigger='click'
                offset={[0, 0]}
                arrow={true}
                interactive
                render={attrs => (
                    <SearchResult tabIndex="-1" {...attrs} data={data} />
                )}
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
                            />

                            <span className={cx('icon')}>{clear && <ClearIcon onClick={handleClearOut} />}</span>

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