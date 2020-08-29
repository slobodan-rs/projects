export const Launch = (launch) => {
    // launch.launch_year
    // launch.rocket.rocket_name
    // launch.links.mission_patch
    // launch.rocket.payload_type
   
        const launchDiv = document.createElement('div')
        launchDiv.className = 'launch'
    
        const innerDiv0 = document.createElement('div')
        innerDiv0.className = 'inner-div-0'
            const img = document.createElement('img')
            img.src = launch.links.mission_patch
        innerDiv0.append(img)
    
        const innerDiv1 = document.createElement('div')
        innerDiv1.className = 'inner-div-1'
            const rocketName = document.createElement('span')
            rocketName.textContent = launch.rocket.rocket_name
        innerDiv1.append(rocketName)

        
        const innerDiv2 = document.createElement('div')
        innerDiv2.className = 'inner-div-2'
            const typeOfrocket = document.createElement('span')
            typeOfrocket.textContent = launch.rocket.second_stage.payloads[0].payload_type
        innerDiv2.append(typeOfrocket)

        const innerDiv3 = document.createElement('div')
        innerDiv3.className = 'inner-div-3'
            const launchYear = document.createElement('span')
            launchYear.textContent = launch.launch_year
        innerDiv3.append(launchYear)
    
        launchDiv.append(innerDiv0, innerDiv1, innerDiv2, innerDiv3) 

    return launchDiv
}