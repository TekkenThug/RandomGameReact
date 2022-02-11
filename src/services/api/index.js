const privateKey = process.env.REACT_APP_PRIVATE_API_KEY;
const gamesUrlAPI = process.env.REACT_APP_GAME_URL;

const requestToAPI = async (url) => {
    const response = await fetch(`${gamesUrlAPI}${url}${url.indexOf('?') === -1 ? '?' : '&'}key=${privateKey}`)

    return response.json();
}

const getSearchParamsFromObject = (options) => {
    const searchParams = [];

    for (const [key, value] of Object.entries(options)) {
        searchParams.push(`${key}=${value}`);
    }

    return searchParams.join('&');
}

export const getGameList = async (options = null) => {
    return requestToAPI(`/games?${options ? getSearchParamsFromObject(options) : ''}`)
}
