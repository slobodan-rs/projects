import { searchDiv } from './Header'
import { launchList, LaunchList } from './LaunchList'

export const PayloadCheckbox = (arr) => {
    let tmp = new Set(arr.map(el => {
        return el.rocket.second_stage.payloads[0].payload_type
    }))

    let counter = 0
    tmp.forEach(payload => {
        const payloadType = document.createElement('input')
        payloadType.type = 'checkbox'
        payloadType.id = `payload-${counter}`
        payloadType.value = payload

        const payloadTypeLabel = document.createElement('label')
        payloadTypeLabel.htmlFor =  `payload-${counter}`
        payloadTypeLabel.textContent =  payload
        payloadTypeLabel.className = `payload-${counter}`
        
        counter++
        
        searchDiv.append(payloadType, payloadTypeLabel)
    })

    const payload0 = document.querySelector('#payload-0')
    const payload1 = document.querySelector('#payload-1')
    const payload2 = document.querySelector('#payload-2')
    const payload3 = document.querySelector('#payload-3')
    const payload4 = document.querySelector('#payload-4')
        
    let payloadArr = arr
    let payloadNewArr = []

    payload0.addEventListener('change', (e) => {
        if(e.target.checked){      
            launchList.innerHTML = ``
            payloadNewArr.push(payloadArr.filter(payload => payload.rocket.second_stage.payloads[0].payload_type.includes(payload0.value)))
            payloadNewArr.forEach(el =>  {
                LaunchList(el)
            })
        }
        else {
            launchList.innerHTML = ``
            payloadNewArr.forEach(el => {
                if(el[0].rocket.second_stage.payloads[0].payload_type.includes(payload0.value)){
                    let index = payloadNewArr.indexOf(el)
                    payloadNewArr.splice(index,1)

                }
            })
            payloadNewArr.forEach(el => {
                LaunchList(el)
            })
        }
    })
    payload1.addEventListener('change', (e) => {
        if(e.target.checked){      
            launchList.innerHTML = ``
            payloadNewArr.push(payloadArr.filter(payload => payload.rocket.second_stage.payloads[0].payload_type.includes(payload1.value)))
            payloadNewArr.forEach(el =>  {
                LaunchList(el)
            })
        }
        else {
            launchList.innerHTML = ``
            payloadNewArr.forEach(el => {
                if(el[0].rocket.second_stage.payloads[0].payload_type.includes(payload1.value)){
                    let index = payloadNewArr.indexOf(el)
                    payloadNewArr.splice(index,1)

                }
            })
            payloadNewArr.forEach(el => {
                LaunchList(el)
            })
        }
    })
    payload2.addEventListener('change', (e) => {
        if(e.target.checked){      
            launchList.innerHTML = ``
            payloadNewArr.push(payloadArr.filter(payload => payload.rocket.second_stage.payloads[0].payload_type.includes(payload2.value)))
            payloadNewArr.forEach(el =>  {
                LaunchList(el)
            })
        }
        else {
            launchList.innerHTML = ``
            payloadNewArr.forEach(el => {
                if(el[0].rocket.second_stage.payloads[0].payload_type.includes(payload2.value)){
                    let index = payloadNewArr.indexOf(el)
                    payloadNewArr.splice(index,1)

                }
            })
            payloadNewArr.forEach(el => {
                LaunchList(el)
            })
        }
    })
    payload3.addEventListener('change', (e) => {
        if(e.target.checked){      
            launchList.innerHTML = ``
            payloadNewArr.push(payloadArr.filter(payload => payload.rocket.second_stage.payloads[0].payload_type.includes(payload3.value)))
            payloadNewArr.forEach(el =>  {
                LaunchList(el)
            })
        }
        else {
            launchList.innerHTML = ``
            payloadNewArr.forEach(el => {
                if(el[0].rocket.second_stage.payloads[0].payload_type.includes(payload3.value)){
                    let index = payloadNewArr.indexOf(el)
                    payloadNewArr.splice(index,1)

                }
            })
            payloadNewArr.forEach(el => {
                LaunchList(el)
            })
        }
    })
    payload4.addEventListener('change', (e) => {
        if(e.target.checked){      
            launchList.innerHTML = ``
            payloadNewArr.push(payloadArr.filter(payload => payload.rocket.second_stage.payloads[0].payload_type.includes(payload4.value)))
            payloadNewArr.forEach(el =>  {
                LaunchList(el)
            })
        }
        else {
            launchList.innerHTML = ``
            payloadNewArr.forEach(el => {
                if(el[0].rocket.second_stage.payloads[0].payload_type.includes(payload4.value)){
                    let index = payloadNewArr.indexOf(el)
                    payloadNewArr.splice(index,1)

                }
            })
            payloadNewArr.forEach(el => {
                LaunchList(el)
            })
        }
    })
    return launchList

}