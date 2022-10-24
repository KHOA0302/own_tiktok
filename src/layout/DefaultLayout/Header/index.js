import classNames from 'classnames/bind';
import Styles from './Header.module.scss'
import Img from '~/Img'
import images from '~/assets/imgs'
import { AddIcon, SeeMoreIcon } from '~/Icons'
import Button from '~/component/Button';
import Search from '~/component/Search/Search';


const cx = classNames.bind(Styles)

function Header({ children }) {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Img className={cx('logo')} src={images.logo} alt='tiktok_logo' />

                <Search />

                <div className={cx('user_section')}>
                    <Button type='transparent' title='Tải lên' icon={<AddIcon />} />
                    <Button type='primary' title='Đăng Nhập' />
                    <Button type='icon-button' icon={<SeeMoreIcon />} />
                </div>
            </div>
        </header>
    )
}

export default Header