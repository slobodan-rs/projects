const projectTemeratureControl = document.querySelector('#app')
const projectTemperatureControlButton = document.querySelector('#temperature-control')


projectTemperatureControlButton.addEventListener('click', () => {
    projectTemeratureControl.innerHTML = `
    <nav class="project-nav">
            <a href="./index.html">BACK TO PROJECTS</i></a>
        </nav>
        <div class="discription">
            <div>  
                <h2>Temperature Control</h2>
                <p>Simple temperature control app, developed with ReactJS and Styled Components</p>
                <a href="https://github.com/slobodan-rs/projects/tree/master/temperature-control" target="_blank">Go to project..</a>                    
            </div>
        </div>
        <div class="img-container">
            <img src="./resources/images/temperature-control.png" width="50%"/>
        </div>
    `
})