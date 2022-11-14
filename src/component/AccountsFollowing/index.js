import Styles from './AccountsFollowing.module.scss'
import classNames from 'classnames/bind'
import { useState, useEffect } from 'react'
import { search } from '~/apiServices/searchService'
import { randomText } from '../CreateRandom/inex'
import Account from '../Account'

const cx = classNames.bind(Styles)

function AccountsFollowing() {
    const [accountsBase, setAccountsBase] = useState([])
    const [accountRendering, setAccountsRendering] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const q = randomText(1)
        const fetchAPI = async () => {
            const res = await search(q, 'more')
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
        <div className={cx('account-following-container')}>
            <div className={cx('account-following')}>
                <span className={cx('title-account-following')}>Các tài khoản đang follow</span>
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

                {!loading && <div className={cx('account')}>
                    {
                        accountRendering.map(account => {
                            return <Account key={account.id} data={account} smallAvatar hover/>
                        })
                    }
                </div>}

                {!loading && (
                    accountRendering.length <= 5 ?
                        <span className={cx('watch-more')} onClick={() => renderAccounts(accountsBase.length)}>Xem thêm</span> :
                        <span className={cx('watch-more')} onClick={() => renderAccounts(5)}>Ẩn bớt</span>
                )}
            </div>
        </div>
    )
}

export default AccountsFollowing