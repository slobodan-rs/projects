import { Launch } from './Launch'

export const launchList = document.createElement('div')
launchList.className = 'launch-list'

export const LaunchList = (arr) => {
    arr.forEach(el => {
        launchList.append(Launch(el))
    });
    return launchList
}