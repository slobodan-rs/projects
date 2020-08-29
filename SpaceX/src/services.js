import axios from 'axios'

export const getCompanyName = () => {
    return axios.get('https://api.spacexdata.com/v3/info')
} 
export const getAllLaunches = () => {
    return axios.get('https://api.spacexdata.com/v3/launches')
}

