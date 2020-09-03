import { LaunchList, launchList } from './LaunchList'

export const inputPar = document.createElement('p')
inputPar.textContent = 'Filter by Name:'

export const InputFilter = (arr) => {
    const input = document.createElement('input')
    input.type = 'text'
    input.className = 'input'
    input.placeholder = 'type..'

    input.addEventListener('input', (e) =>{
        launchList.innerHTML = ``
        LaunchList(arr.filter(launch => launch.rocket.rocket_name.toLowerCase().includes(e.target.value)))
    })
    return input
}