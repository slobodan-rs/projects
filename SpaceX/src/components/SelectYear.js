import { LaunchList, launchList } from './LaunchList'

export const SelectYear = (arr) => {
    const select = document.createElement('select')
    select.name = 'Years'
    select.className = 'select'

    const defaultOption = document.createElement('option')
    defaultOption.textContent = 'All Years'
    defaultOption.selected = 'selected'
    select.append(defaultOption)

    let arrSet = new Set(arr.map(el => {
        return el.launch_year
    }))
   
    arrSet.forEach(year => {
        const option = document.createElement('option')
        option.textContent = year
        select.append(option)
    })

    select.addEventListener('change', ()=> {
        let lounchByYears = []
        arr.filter(el => {
            if(el.launch_year == select.value){
                lounchByYears.push(el)
            }
        })
        launchList.innerHTML = ``
        LaunchList(lounchByYears)

        if(select.value == 'All Years'){
            LaunchList(arr)
        }
    })
    return select
}
