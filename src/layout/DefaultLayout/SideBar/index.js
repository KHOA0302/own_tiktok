import Styles from './SideBar.module.scss'
import classNames from 'classnames/bind'
import { FollowerIcon, HashTagIcon, HomeIcon, LiveBigIcon, NoteIcon } from '~/Icons'
import TippyHeadless from '@tippyjs/react/headless'
import { useEffect, useState } from 'react'
import AccountsSuggestion from '~/component/AccountsSuggestion'
import AccountsFollowing from '~/component/AccountsFollowing'

const cx = classNames.bind(Styles)


const discover = [
    {
        icon: 'hashtag',
        title: 'suthatla',
        link: '',
    },
    {
        icon: 'hashtag',
        title: 'makedoi',
        link: '',
    },
    {
        icon: 'hashtag',
        title: 'sansangthaydoi',
        link: '',
    },
    {
        icon: 'note',
        title: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n',
        link: '',
    },
    {
        icon: 'note',
        title: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng',
        link: '',
    },
    {
        icon: 'note',
        title: 'Thiên Thần Tình Yêu - RICKY STAR',
        link: '',
    },
    {
        icon: 'hashtag',
        title: '7749hieuung',
        link: '',
    },
    {
        icon: 'hashtag',
        title: 'genzlife',
        link: '',
    },
    {
        icon: 'note',
        title: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn',
        link: '',
    },
    {
        icon: 'note',
        title: 'Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham',
        link: '',
    },
]

function Sidebar() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timeId = setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])


    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('shims')}>

                    <div className={cx('mainNav-container')}>
                        <div className={cx('mainNav')}>
                            <div className={cx('mainNav-item')}>
                                <span className={cx('icon')}>{<HomeIcon />}</span>
                                <h3 className={cx('title', {
                                    'active': true
                                })}>Dành cho bạn</h3>
                            </div>
                            <div className={cx('mainNav-item')}>
                                <span className={cx('icon')}>{<FollowerIcon />}</span>
                                <h3 className={cx('title')}>Đang Follow</h3>
                            </div>
                            <div className={cx('mainNav-item')}>
                                <span className={cx('icon')}>{<LiveBigIcon />}</span>
                                <h3 className={cx('title')}>LIVE</h3>
                            </div>
                        </div>
                    </div>

                    <AccountsSuggestion />

                    <AccountsFollowing />

                    <div className={cx('discover-container')}>
                        <div className={cx('discover')}>
                            <span className={cx('title-discover')}>Khám phá</span>
                            {loading &&
                                <div className={cx('loading-discovery')}>
                                    <div className={cx('loading-top')}>
                                        <div className={cx('loading-discovery-effect')}></div>
                                    </div>
                                    <div className={cx('loading-bottom')}>
                                        <div className={cx('loading-discovery-effect')}></div>
                                    </div>
                                </div>}
                            {!loading &&
                                <div className={cx('link-container')}>
                                    {discover.map((link, index) => {

                                        let Link

                                        if (link.icon === 'note') {
                                            Link = NoteIcon
                                        } else if (link.icon === 'hashtag') {
                                            Link = HashTagIcon
                                        }

                                        return <a key={index} className={cx('link-wrapper')} href={link.link}>
                                            <div className={cx('link')}>
                                                <span className={cx('icon-link')}>{<Link />}</span>
                                                <span className={cx('title-link')}>{link.title}</span>
                                            </div>
                                        </a>
                                    })}
                                </div>}
                        </div>
                    </div>

                    <div className={cx('info-container')}>
                        <div className={cx('info')}>
                            <div className={cx('info-option')}>
                                <a className={cx('info-item')} href='true'>Giới thiệu</a>
                                <a className={cx('info-item')} href='true'>Bản tin</a>
                                <a className={cx('info-item')} href='true'>Liên hệ</a>
                                <a className={cx('info-item')} href='true'>Sự nghiệp</a>
                                <a className={cx('info-item')} href='true'>ByteDance</a>
                            </div>
                            <div className={cx('info-option')}>
                                <a className={cx('info-item')} href='true'>TikTok for Good</a>
                                <a className={cx('info-item')} href='true'>Quảng cáo</a>
                                <a className={cx('info-item')} href='true'>Developers</a>
                                <a className={cx('info-item')} href='true'>Transparency</a>
                                <a className={cx('info-item')} href='true'>TikTok Rewards</a>
                                <a className={cx('info-item')} href='true'>TikTok Browse</a>
                                <a className={cx('info-item')} href='true'>TikTok Embeds</a>
                            </div>
                            <div className={cx('info-option')}>
                                <a className={cx('info-item')} href='true'>Trợ giúp</a>
                                <a className={cx('info-item')} href='true'>An toàn</a>
                                <a className={cx('info-item')} href='true'>Điều khoản</a>
                                <a className={cx('info-item')} href='true'>Quyền riêng tư</a>
                                <a className={cx('info-item')} href='true'>Creator Portal</a>
                                <a className={cx('info-item')} href='true'>Hướng dẫn Cộng đồng</a>
                            </div>

                            <div className={cx('info-option')}>
                                <TippyHeadless
                                    offset={[0, 14]}
                                    interactive
                                    render={attrs => (
                                        <div className={cx('law-wrapper')} tabIndex="-1" {...attrs}>
                                            <div className={cx('law')}>
                                                <a className={cx('law-link')} href='true'>NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK</a>
                                            </div>
                                        </div>
                                    )}>
                                    <span className={cx('more-info')}>Thêm</span>
                                </TippyHeadless>
                            </div>
                            <div className={cx('info-option')}>
                                <span className={cx('name-app')}>© 2022 TikTok</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Sidebar