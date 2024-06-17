export const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '11e348c08bmsh112bc8ed88737e6p1c3b01jsna2d4d3621642',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'b519009b3emshcd69ab56b32a722p14ed45jsndff6cefbb755',
        'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
};
export const fetchData = async (url: string , options: any) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}
