import axios from 'axios'

const mainUrl = axios.create({
    baseURL: `https://api.themoviedb.org/3`
})

export default mainUrl; 