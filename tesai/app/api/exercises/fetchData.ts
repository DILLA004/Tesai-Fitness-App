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
        'x-rapidapi-key': '11e348c08bmsh112bc8ed88737e6p1c3b01jsna2d4d3621642',
        'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
};
export const fetchData = async (url: string , options: any) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}
