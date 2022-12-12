import Styles from './Video.module.scss';
import classNames from 'classnames/bind';
import Img from '~/Img';
import { CommentIcon, LikeIcon, ShareIcon, TickIcon, NoteIcon } from '~/Icons';
import { forwardRef, useState } from 'react';
import images from '~/assets/imgs';

const cx = classNames.bind(Styles)

function Video({ data, isVertical = false, dataId }, ref) {
    const user = data.user

    return (
        <div className={cx('wrapper')}>

            <a href={'user'} className={cx('avatar')}>
                <Img src={user.avatar} className={cx('img')} />
            </a>

            <div className={cx('main')}>
                <div className={cx('info')}>
                    <div className={cx('user-name')}>
                        <span className={cx('nickname')}>
                            {user.nickname}
                            <span className={cx('tick-icon')}>
                                {<TickIcon />}
                            </span>
                        </span>

                        <span className={cx('fullname')}>
                            {user.first_name + ' ' + user.last_name}
                        </span>
                    </div>

                    <div className={cx('title')}>
                        <span>{data.description}</span>
                    </div>

                    <div className={cx('music-link')}>
                        {data.music && (
                            <span className={cx('music-icon')}>
                                {<NoteIcon />}
                            </span>
                        )}
                        {data.music}
                    </div>
                </div>

                <div className={cx('video')}>

                    <div className={cx('video-container', {
                        "vertical": isVertical,
                        "horizontal": !isVertical,
                    })}>

                        <p className={cx('video-space')}></p>

                        <Img className={cx('video-thumb')} src={data.thumb_url || images.defaultImg} />

                        <video ref={ref} className={cx('clip')} data-id={dataId} controls muted loop>
                            <source src={data.file_url} />
                        </video>

                        <div className={cx('control-btn')}></div>
                    </div>

                    <div className={cx('button')}>
                        <div className={cx('like-button')}>
                            <span className={cx('like-icon')}>
                                <LikeIcon />
                            </span>
                            <span
                                className={cx('count-number', {
                                    like: true,
                                })}
                            >
                                {data.likes_count}
                            </span>
                        </div>

                        <div className={cx('comment-button')}>
                            <span className={cx('comment-icon')}>
                                <CommentIcon />
                            </span>
                            <span
                                className={cx('count-number', {
                                    comment: true,
                                })}
                            >
                                {data.comments_count}
                            </span>
                        </div>

                        <div className={cx('share-button')}>
                            <span className={cx('share-icon')}>
                                <ShareIcon />
                            </span>
                            <span
                                className={cx('count-number', {
                                    share: true,
                                })}
                            >
                                {data.shares_count}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default forwardRef(Video);
