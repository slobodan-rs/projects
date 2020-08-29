const Header = (name) => {
    const companyName = document.createElement('div')
    companyName.className = 'comapny-name'
    companyName.textContent = name.name
    
    return companyName
}
const searchDiv = document.createElement('div')
searchDiv.className = 'search-div'

export { Header, searchDiv }