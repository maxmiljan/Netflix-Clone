const KEY = `0b5e010016fdae1b2413e7828d8b1f92`

const extensions = {
    fetchTrending: `/trending/all/week?api_key=${KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${KEY}&language=en-US`,
    fetchTopActionMovies: `/discover/movie?api_key=${KEY}&with_genres=28`,
    fetchTopComedyMovies: `/discover/movie?api_key=${KEY}&with_genres=35`,
    fetchTopHorrorMovies: `/discover/movie?api_key=${KEY}&with_genres=27`,
    fetchTopRomanceMovies: `/discover/movie?api_key=${KEY}&with_genres=10749`,
    fetchTopDocumentaries: `/discover/movie?api_key=${KEY}&with_genres=99`
}

export default extensions;
