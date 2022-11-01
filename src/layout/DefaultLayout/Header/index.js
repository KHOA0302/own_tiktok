import classNames from 'classnames/bind';
import Styles from './Header.module.scss'
import Img from '~/Img'
import images from '~/assets/imgs'
import { AddIcon, SeeMoreIcon } from '~/Icons'
import Button from '~/component/Button';
import Search from '~/component/Search/Search';
import { Link } from 'react-router-dom'
import Tippy from '@tippyjs/react/headless';
import SeeMore from '~/component/SeeMore';

const cx = classNames.bind(Styles)



function Header({ children }) {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to='/'>
                    <Img className={cx('logo')} src={images.logo} alt='tiktok_logo' />
                </Link>

                <Search />

                <div className={cx('user_section')}>
                    <Button type='transparent' title='Tải lên' icon={<AddIcon />} />
                    <Button type='primary' title='Đăng Nhập' />

                    <Tippy
                        visible={true}
                        arrow={true}
                        duration={[0, 1000]}
                        offset={[-90, 4]}
                        interactive
                        render={attrs => (
                            <SeeMore tabIndex="-1" {...attrs} />
                        )}
                    >
                        <span className={cx('btn-wrapper')}>
                            <Button type='icon-button' icon={<SeeMoreIcon className={cx('icon')} />} />
                        </span>
                    </Tippy>

                </div>
            </div>
        </header>
    )
}

export default Header