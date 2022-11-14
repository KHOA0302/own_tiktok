import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import SeeMore from '~/component/SeeMore';
import { AddIcon, MailBoxIcon, MesIcon, LangueIcon, HelpIcon, KeyBoardIcon, ScreenColorIcon, BackIcon, UserIcon, CoinIcon, LiveIcon, SettingIcon, SignOutIcon } from '~/Icons'
import Button from '~/component/Button';
import Styles from './Signed.module.scss'
import classNames from 'classnames/bind';
import Img from '~/Img'

const langue = [
  {
    id: 0,
    pass: 'langue',
    className: 'header',
    icon: BackIcon,
    title: 'Ngôn ngữ'
  },
  {
    id: 1,
    title: 'Tiếng Việt'
  },
  {
    id: 2,
    title: 'বাঙ্গালি (ভারত)'
  },
  {
    id: 3,
    title: '日本語（日本）'
  },
  {
    id: 4,
    title: 'မြန်မာ (မြန်မာ)'
  },
  {
    id: 5,
    title: 'English'
  },
  {
    id: 6,
    title: '한국어 (대한민국)'
  },
]

const menu = [
  {
    id: 0,
    icon: UserIcon,
    title: 'Xem hồ sơ',
  },
  {
    id: 1,
    icon: CoinIcon,
    title: 'Nhận Xu',
  },
  {
    id: 2,
    icon: LiveIcon,
    title: 'LIVE Studio',
  },
  {
    id: 3,
    icon: SettingIcon,
    title: 'Cài đặt',
  },
  {
    id: 4,
    icon: LangueIcon,
    title: 'Tiếng Việt',
    child: langue
  },
  {
    id: 5,
    icon: HelpIcon,
    title: 'Phản hồi và trợ giúp'
  },
  {
    id: 6,
    icon: KeyBoardIcon,
    title: 'Phím tắt trên bàn phím'
  },
  {
    id: 7,
    icon: ScreenColorIcon,
    title: 'Chế độ tối',
    button: true
  },
  {
    id: 8,
    icon: SignOutIcon,
    title: 'Đăng xuất',
    line: true
  },
]

const cx = classNames.bind(Styles)

function Signed() {
  return (
    <div className={cx('user_section')}>
      <Button type='transparent' title='Tải lên' icon={<AddIcon className={cx('icon-add')} />} />

      <Tippy content="Tin nhắn">
        <span className={cx('icon-wrapper')}>
          <MesIcon className={cx('icon-signed')} />
        </span>
      </Tippy>

      <Tippy content='Hộp thư'>
        <span className={cx('icon-wrapper')}>
          <MailBoxIcon />
        </span>
      </Tippy>

      <TippyHeadless
        offset={[0, 0]}
        interactive
        render={attrs => (
          <SeeMore menu={menu} tabIndex="-1" {...attrs} />
        )}>
        <div className={cx('user-avatar')}>
          <Img className={cx('avatar')} src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7160114249611051014~c5_720x720.jpeg?x-expires=1668153600&x-signature=GzyKw8151gaYkfc%2F4R5h5Ji7aio%3D' alt="user's name" />
        </div>
      </TippyHeadless>
    </div>
  )
}

export default Signed