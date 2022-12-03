import Styles from './AccountsSuggestion.module.scss'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import TippyHeadless from '@tippyjs/react/headless'
import Account from '~/component/Account'
import Img from '~/Img'
import Button from '../Button'
import { TickIcon } from '~/Icons'
import { accountsSuggestion } from '~/apiServices/accountsSuggestionService'
import { getRandomInt } from '../CreateRandom/inex'


const cx = classNames.bind(Styles)

function AccountsSuggestion() {
    const [accountsBase, setAccountsBase] = useState([])
    const [accountRendering, setAccountsRendering] = useState([])
    const [loading, setLoading] = useState(true)
    const [changeAccountBgr, setChangeAccountBgr] = useState()
    const [clearTime, setClearTime] = useState()

    useEffect(() => {
        const fetchAPI = async () => {
            const page = getRandomInt(1, 5)
            const res = await accountsSuggestion(page, 10)
            setAccountsBase(res)
            const timeId = setTimeout(() => {
                setLoading(false)
            }, 2000)
        }
        fetchAPI()
    }, [])

    useEffect(() => {
        renderAccounts()
    }, [accountsBase])

    const renderAccounts = (id = 5) => {
        const arr = []
        if (accountsBase.length) {
            for (let i = 0; i < id; i++) {
                arr.push(accountsBase[i])
            }
            setAccountsRendering(prev => {
                prev = []
                return prev.concat(arr)
            })
        } else {
            return
        }
    }

    return (
        <div className={cx('account-suggestion-container')}>
            <div className={cx('account-suggestion')}>
                <span className={cx('title-account-suggestion')}>Tài khoản được đề xuất</span>

                {loading &&
                    <div className={cx('account')}>
                        <div className={cx('loading-account')}>
                            <div className={cx('loading-avatar')}>
                                <div className={cx('loading-avatar-effect')}></div>
                            </div>
                            <div className={cx('loading-info')}>
                                <div className={cx('loading-nickname')}>
                                    <div className={cx('loading-name-effect')}></div>
                                </div>
                                <div className={cx('loading-fullname')}>
                                    <div className={cx('loading-name-effect')}></div>
                                </div>
                            </div>
                        </div>
                    </div>}

                {!loading &&
                    <div className={cx('account')}>
                        {
                            accountRendering.map(account => {

                                const handleChangeAccountBrg = (id) => {
                                    setChangeAccountBgr(id)
                                    const timeID = setTimeout(() => setChangeAccountBgr(), 1000)

                                    setClearTime(timeID)
                                }

                                const handleClearTimeOut = () => {
                                    console.log(clearTime);
                                    clearTimeout(clearTime)
                                }

                                return (
                                    <TippyHeadless
                                        delay={[1000, 0]}
                                        key={account.id}
                                        placement='bottom'
                                        offset={[-20, 0]}
                                        interactive
                                        render={attrs => (
                                            <div tabIndex="-1" {...attrs} className={cx('profile-wrapper')}>
                                                <div className={cx('profile')}>

                                                    <div className={cx('profile-header')}>
                                                        <div className={cx('profile-avatar')}>
                                                            <Img src={account.avatar} className={cx('profile-img')} />
                                                        </div>
                                                        <div className={cx('profile-follow-btn')}>
                                                            <Button title={'Follow'} type={'primary'} />
                                                        </div>
                                                    </div>

                                                    <div className={cx('profile-name')}>
                                                        <div className={cx('profile-nickname')}>
                                                            <a href='true'>{account.nickname}</a>
                                                            {account.tick && <TickIcon className={cx('profile-tick')} />}
                                                        </div>
                                                        <div className={cx('profile-fullname')}>
                                                            <a href='true'>{account.full_name}</a>
                                                        </div>
                                                    </div>

                                                    <div className={cx('profile-rank')}>
                                                        <div className={cx('profile-followers')}>{account.likes_count}</div>
                                                        <div className={cx('profile-followers')}>Follower</div>
                                                        <div className={cx('profile-like')}>{account.followers_count}</div>
                                                        <div className={cx('profile-like')}>Thích</div>
                                                    </div>

                                                </div>
                                            </div>
                                        )}
                                    >
                                        <div
                                            className={cx('account-hover-fade', {
                                                'change': account.id === changeAccountBgr,
                                            })}
                                            onMouseEnter={() => handleChangeAccountBrg(account.id)
                                            }
                                            onMouseOut={handleClearTimeOut}

                                        >
                                            <Account data={account} smallAvatar pointerEvent />
                                        </div>
                                    </TippyHeadless>
                                )
                            })
                        }
                    </div>
                }
                {!loading && (
                    accountRendering.length <= 5 ?
                        <span className={cx('watch-more')} onClick={() => renderAccounts(accountsBase.length)}>Xem tất cả</span> :
                        <span className={cx('watch-more')} onClick={() => renderAccounts(5)}>Ẩn bớt</span>
                )}
            </div>
        </div>

    )
}

export default AccountsSuggestion