
// Params Giphy API
const base_url = 'http://api.giphy.com/v1/gifs/';
const api_key = 'tvkdcmoFiFH570iZNWfAIzMm52mgfk7g';
const limit = 10;

// Request getGifs
export const getGifs = async (category) => {
    const request = await fetch(`${base_url}search?q=${category}&limit=${limit}&api_key=${api_key}`);
    const { data } = await request.json();

    const gifs = data.map(element => {
        return {
            id: element.id,
            title: element.title,
            url: element.images.original.url
        }
    });

    return gifs;
}