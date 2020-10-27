import axios from 'axios'

// get All data from localhost server
export const getAllData = () => {
    return axios.get('http://localhost:3005/data')
}