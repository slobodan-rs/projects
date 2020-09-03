import { LaunchList } from './components/LaunchList'
import { getAllLaunches, getCompanyName } from './services'
import { Header, searchDiv} from './components/Header'
import { SelectYear, selectDiv } from './components/SelectYear'
import { PayloadCheckbox } from './components/PayloadCheckbox'
import { InputFilter, inputPar } from './components/InputFilter'

const app = document.querySelector('#app')

getCompanyName().then(res => {
    app.append(Header(res.data),searchDiv)
    
})

getAllLaunches().then(res => {
    selectDiv.append(SelectYear(res.data), inputPar, InputFilter(res.data))
    searchDiv.append(selectDiv, PayloadCheckbox(res.data))
    app.append(LaunchList(res.data))
})