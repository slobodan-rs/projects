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
        
    let payloadArr = []
    let payloadNewArr = []
    payload0.addEventListener('change', (e) => {
        arr.forEach(el => {
            if(e.target.checked && el.rocket.second_stage.payloads[0].payload_type == payload0.value){
                
                    if(payloadArr.includes(!el.rocket.second_stage.payloads[0].payload_type == payload0.value)){
                        return payloadArr
                    }
                    else{
                        launchList.innerHTML = ``
                        payloadArr.push(el)
                        LaunchList(payloadArr)
                    }
                
            }
            else {
                payloadNewArr = new Set(payloadArr.filter(elements => elements.rocket.second_stage.payloads[0].payload_type != payload0.value))
                launchList.innerHTML = ``
                LaunchList(payloadNewArr)
            }  
        }); 
        console.log(payloadNewArr)
    })
    payload1.addEventListener('change', (e) => {
        arr.filter(el => {
            if(e.target.checked){
                if(el.rocket.second_stage.payloads[0].payload_type == payload1.value){
                    if(payloadArr.includes(!el.rocket.second_stage.payloads[0].payload_type == payload1.value)){
                        return payloadArr
                    }
                    else{
                        launchList.innerHTML = ``
                        payloadArr.push(el)
                        LaunchList(payloadArr)
                    }
                }
            }
            else {
                payloadNewArr = new Set(payloadArr.filter(elements => elements.rocket.second_stage.payloads[0].payload_type != payload1.value))
                launchList.innerHTML = ``
                LaunchList(payloadNewArr)
            }  
        })
        console.log(payloadNewArr)
    })
    payload2.addEventListener('change', (e) => {
        arr.filter(el => {
            if(e.target.checked){
                if(el.rocket.second_stage.payloads[0].payload_type == payload2.value){
                    if(payloadArr.includes(el.rocket.second_stage.payloads[0].payload_type == payload2.value)){
                        return payloadArr
                    }
                    else{
                        launchList.innerHTML = ``
                        payloadArr.push(el)
                        LaunchList(payloadArr)
                    }
                }
            }
            else {
                payloadNewArr = new Set(payloadArr.filter(elements => elements.rocket.second_stage.payloads[0].payload_type != payload2.value))
                launchList.innerHTML = ``
                LaunchList(payloadNewArr)
            }  
        });  
        console.log(payloadNewArr)
    })
    payload3.addEventListener('change', (e) => {
        arr.filter(el => {
            if(e.target.checked){
                if(el.rocket.second_stage.payloads[0].payload_type == payload3.value){
                    if(payloadArr.includes(el.rocket.second_stage.payloads[0].payload_type == payload3.value)){
                        return payloadArr
                    }
                    else{
                        launchList.innerHTML = ``
                        payloadArr.push(el)
                        LaunchList(payloadArr)
                    }
                }
            }
            else {
                payloadNewArr = new Set(payloadArr.filter(elements => elements.rocket.second_stage.payloads[0].payload_type != payload3.value))
                launchList.innerHTML = ``
                LaunchList(payloadNewArr)
            }  
        });  
        console.log(payloadNewArr)
    })
    payload4.addEventListener('change', (e) => {
        arr.filter(el => {
            if(e.target.checked){
                if(el.rocket.second_stage.payloads[0].payload_type == payload4.value){
                    if(payloadArr.includes(el.rocket.second_stage.payloads[0].payload_type == payload4.value)){
                        return payloadArr
                    }
                    else{
                        launchList.innerHTML = ``
                        payloadArr.push(el)
                        LaunchList(payloadArr)
                    }
                }
            }
            else {
                payloadNewArr = new Set(payloadArr.filter(elements => elements.rocket.second_stage.payloads[0].payload_type != payload4.value))
                launchList.innerHTML = ``
                LaunchList(payloadNewArr)
                
            }  
        }); 
        console.log(payloadNewArr) 
    })

}