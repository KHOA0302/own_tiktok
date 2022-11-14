import Button from "~/component/Button"
import { HelpIcon, KeyBoardIcon, LangueIcon, ScreenColorIcon, BackIcon, AddIcon, SeeMoreIcon } from '~/Icons';
import TippyHeadless from "@tippyjs/react/headless"
import SeeMore from "~/component/SeeMore"
import Styles from './NotSignYet.module.scss'
import classNames from 'classnames/bind';


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
    icon: LangueIcon,
    title: 'Tiếng Việt',
    child: langue
  },
  {
    id: 1,
    icon: HelpIcon,
    title: 'Phản hồi và trợ giúp'
  },
  {
    id: 2,
    icon: KeyBoardIcon,
    title: 'Phím tắt trên bàn phím'
  },
  {
    id: 3,
    icon: ScreenColorIcon,
    title: 'Chế độ tối',
    button: true
  },
]

const cx = classNames.bind(Styles)

function NotSignYet() {
  return (
    <div className={cx('user_section')}>
      <Button type='transparent' title='Tải lên' icon={<AddIcon className={cx('icon-add')}/>} />
      <Button type='primary' title='Đăng Nhập' />

      <TippyHeadless
        duration={[0, 1000]}
        offset={[-90, 4]}
        interactive
        render={attrs => (
          <SeeMore menu={menu} tabIndex="-1" {...attrs} />
        )}
      >
        <span className={cx('btn-wrapper')}>
          <Button type='icon-button' icon={<SeeMoreIcon className={cx('icon-seemore')} />} />
        </span>
      </TippyHeadless>
    </div>
  )
}

export default NotSignYet