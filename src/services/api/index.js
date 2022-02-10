const privateKey = 'c406b82267824f2383593cd2bc30bf21';

export const getGameById = async (id) => {
    const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${privateKey}`);

    return response.json();
}