import axios from 'axios'

export const getQuestions = () : any => {
    axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple')
}