import Header from "./Header";
import SideBar from './SideBar';
import Styles from './DefaultLayout.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(Styles)

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout