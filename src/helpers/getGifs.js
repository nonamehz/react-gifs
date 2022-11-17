export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=5&api_key=bhyQRbVDHWZWJe5tlg4a28nCDbRFz1og`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;

}