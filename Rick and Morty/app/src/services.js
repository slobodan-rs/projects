import axios from 'axios'

export const getAllEpisodes = () => {
    return axios.get('https://rickandmortyapi.com/api/episode/')
}