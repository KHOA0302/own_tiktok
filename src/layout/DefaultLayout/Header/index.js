import classNames from 'classnames/bind';
import Styles from './Header.module.scss'
import Img from '~/Img'
import images from '~/assets/imgs'
import Search from '~/component/Search/Search';
import { Link } from 'react-router-dom'
import { NotSignYet, Signed } from '~/component/UserSection';

const cx = classNames.bind(Styles)

function Header({ children }) {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to='/'>
                    <Img className={cx('logo')} src={images.logo} alt='tiktok_logo' />
                </Link>
                
                <Search />

                {/* <NotSignYet /> */}

                <Signed/>

            </div>
        </header>
    )
}

export default Header