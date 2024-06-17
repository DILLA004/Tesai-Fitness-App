export const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '4871ba3e1bmsh75f6deaea23debcp16605fjsn5fe87926da34',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '4871ba3e1bmsh75f6deaea23debcp16605fjsn5fe87926da34',
        'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
};
export const fetchData = async (url: string , options: any) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}
