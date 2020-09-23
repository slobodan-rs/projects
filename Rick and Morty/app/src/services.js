import axios from 'axios'

export const getAllSeasons = () => {
    return axios.get('http://localhost:3005/seasons')
}
export const getAllCaracters = (page) => {
    return axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
}
export const getUsers = () => {
    return axios.get('http://localhost:3005/users')
}
export const postUsers = (user) => {
    return axios.post('http://localhost:3005/users', user)
}
