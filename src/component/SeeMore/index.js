import classNames from 'classnames/bind';
import Styles from './SeeMore.module.scss'
import { HelpIcon, KeyBoardIcon, LangueIcon, ScreenColorIcon } from '~/Icons';

const cx = classNames.bind(Styles)

function SeeMore({ ...props }) {
  return (
    <div className={cx('wrapper')}  {...props}>
      <ul className={cx('option')}>
        <li className={cx('item-wrapper')}>
          <LangueIcon className={cx('icon')} />
          <div className={cx('item')}>
            <span className={cx('title')}>Tiếng Việt</span>
          </div>
        </li>

        <li className={cx('item-wrapper')}>
          <HelpIcon className={cx('icon')} />
          <div className={cx('item')}>
            <span className={cx('title')}>Phản hồi và trợ giúp</span>
          </div>
        </li>

        <li className={cx('item-wrapper')}>
          <KeyBoardIcon className={cx('icon')} />
          <div className={cx('item')}>
            <span className={cx('title')}>Phím tắt trên bàn phím</span>
          </div>
        </li>

        <li className={cx('item-wrapper')}>
          <ScreenColorIcon className={cx('icon')} />
          <div className={cx('item')}>
            <span className={cx('title')}>Chế độ tối</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default SeeMore