import classNames from 'classnames/bind';
import Account from '~/component/Account';
import Styles from './SearchResult.module.scss'

const cx = classNames.bind(Styles)

function SearchResult({ data, ...props }) {
    return (
        <div className={cx('wrapper')} {...props}>
            <div className={cx('title')}>
                <span>Tài khoản</span>
            </div>
            <div className={cx('search-result')}>
                {data.map((account, index) => {
                    return <Account key={index} data={account} />
                })}
            </div>
        </div>
    )
}

export default SearchResult