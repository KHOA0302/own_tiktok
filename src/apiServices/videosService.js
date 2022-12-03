import * as request from '~/utils/request';

export const videos = async (type, page) => {
    const res = await
        request.get('videos',
            {
                params: {
                    type,
                    page,
                }
            })
    return res.data
}
