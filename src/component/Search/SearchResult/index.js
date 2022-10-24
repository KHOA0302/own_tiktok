import classNames from 'classnames/bind';
import Account from '~/component/Account';
import Styles from './SearchResult.module.scss'

const cx = classNames.bind(Styles)

function SearchResult({ data, ...props }) {
    console.log(data)
    return (
        <div className={cx('wrapper')} {...props}>
            <div className={cx('search-result')}>
                <Account data={data} />
            </div>
        </div>
    )
}

export default SearchResult