import { LaunchList } from './components/LaunchList'
import { getAllLaunches, getCompanyName } from './services'
import { Header, searchDiv } from './components/Header'
import { SelectYear } from './components/SelectYear'
import { PayloadCheckbox } from './components/PayloadCheckbox'


const app = document.querySelector('#app')


getCompanyName().then(res => {
    app.append(Header(res.data),searchDiv)
    
})

getAllLaunches().then(res => {
    app.append(LaunchList(res.data))
    searchDiv.append(SelectYear(res.data), PayloadCheckbox(res.data))
})




