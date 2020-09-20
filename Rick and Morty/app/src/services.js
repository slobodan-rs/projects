import axios from 'axios'

export const getAllEpisodes = (page) => {
    return axios.get(`https://rickandmortyapi.com/api/episode/?page=${page}`)
}