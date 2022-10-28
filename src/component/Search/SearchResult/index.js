import classNames from 'classnames/bind';
import Account from '~/component/Account';
import Styles from './SearchResult.module.scss'

const cx = classNames.bind(Styles)

function SearchResult({ ...props }) {
    return (
        <div className={cx('wrapper')} {...props}>
            <div className={cx('search-result')}>
                <Account />
            </div>
        </div>
    )
}

export default SearchResult