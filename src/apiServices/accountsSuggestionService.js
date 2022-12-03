import * as request from '~/utils/request';

export const accountsSuggestion = async (page = 1, per_page = 20) => {
    const res = await
        request.get(`users/suggested`, {
            params: {
                page,
                per_page,
            }
        })
    return res.data
}