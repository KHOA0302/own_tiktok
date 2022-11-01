import classNames from 'classnames/bind';
import Styles from './SeeMore.module.scss'
import { HelpIcon, KeyBoardIcon, LangueIcon, ScreenColorIcon, BackIcon } from '~/Icons';
import { useState } from 'react';

const cx = classNames.bind(Styles)

const menu = [
  {
    id: 0,
    icon: LangueIcon,
    title: 'Tiếng Việt'
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
    title: 'Chế độ tối'
  },
]

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

function SeeMore({ ...props }) {
  const [parent, setParent] = useState([menu])

  const handler = (id, pass) => {
    if (id === 0 && pass === undefined) {
      setParent(prev => {
        return [...prev, langue]
      })
    }
  }

  const handleBack = (id, pass) => {
    if (pass === 'langue') {
      const prevChild = parent.slice(0, 1)
      setParent(prevChild)
    }
  }

  return (
    <div className={cx('wrapper')}  {...props}>
      <ul className={cx('option')}>
        {parent[parent.length - 1].map((item) => {
          const Icon = item.icon

          const headerClassName = cx('item-wrapper', {
            [item.className]: item.className,
            'item-wrapper-small': !item.icon,
          })

          const itemClassName = cx('item', {
            'itemChild': !item.icon,
          })

          return (
            <li key={item.id} className={headerClassName} onClick={() => handler(item.id, item.pass)}>

              {Icon && !item.pass && <span className={cx('icon-wrapper')}><Icon className={cx('icon')} /></span>}

              {Icon && item.pass && <span className={cx('icon-wrapper')} onClick={() => handleBack(item.id, item.pass)}><Icon className={cx('icon')} /> </span>}

              <div className={itemClassName}>
                <span className={cx('title')}>{item.title}</span>
              </div>

            </li>
          )
        })}
      </ul>
    </div >
  )
}

export default SeeMore