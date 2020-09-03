const Header = (name) => {
    const companyName = document.createElement('div')
    companyName.className = 'comapny-name'
    companyName.textContent = name.name
    
    return companyName
}
const searchDiv = document.createElement('div')
searchDiv.className = 'search-div'

const searchPayload = document.createElement('div')
searchPayload.className = 'search-checkbox'
const searchPayloadPar = document.createElement('p')
searchPayloadPar.textContent = 'Search by Payload:'

searchPayload.append(searchPayloadPar)
searchDiv.append(searchPayload)

export { Header, searchDiv, searchPayload }