import axios from 'axios'

export const getAllEpisodes = (page) => {
    return axios.get(`https://rickandmortyapi.com/api/episode/?page=${page}`)
}

export const getAllCaracters = (page) => {
    return axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
}

// export const getEpisode = (episode) => {
//     return axios.get(`https://rickandmortyapi.com/api/episode/${episode}`)
// }