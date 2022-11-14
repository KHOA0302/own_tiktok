import classNames from 'classnames/bind';
import Styles from './SeeMore.module.scss'
import { useState } from 'react';

const cx = classNames.bind(Styles)

function SeeMore({ menu, ...props }) {
  const [parent, setParent] = useState([menu])
  const [btn, setBtn] = useState(true)

  const handler = (child) => {
    if (!!child) {
      setParent(prev => {
        return [...prev, child]
      })
    }
  }

  const handleBack = (pass) => {
    if (pass === 'langue') {
      const prevChild = parent.slice(0, 1)
      setParent(prevChild)
    }
  }

  const handleScreenLight = (button) => {
    if (btn) {
      setBtn(!button)
    } else {
      setBtn(button)
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
            'line': item.line,
          })

          const itemClassName = cx('item', {
            'itemChild': !item.icon,
          })

          const switchClass = cx('switch', {
            'left': btn,
            'right': !btn
          })

          return (
            <li key={item.id} className={headerClassName} onClick={() => handler(item.child)}>

              {Icon && !item.pass && <span className={cx('icon-wrapper')}><Icon className={cx('icon')} /></span>}

              {Icon && item.pass && <span className={cx('icon-wrapper')} onClick={() => handleBack(item.pass)}><Icon className={cx('icon')} /> </span>}

              <div className={itemClassName}>
                <span className={cx('title')}>{item.title}</span>
                {item.button &&
                  <button type='button' className={cx('button')} onClick={() => handleScreenLight(item.button)}>
                    <div className={cx('frame')}>
                      <div className={switchClass}></div>
                    </div>
                  </button>}
              </div>
            </li>
          )
        })}
      </ul>
    </div >
  )
}

export default SeeMore