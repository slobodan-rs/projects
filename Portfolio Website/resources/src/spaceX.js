const projectSpaceX = document.querySelector('#app')
const projectSPacexButton = document.querySelector('#spacex')


projectSPacexButton.addEventListener('click', () => {
    projectSpaceX.innerHTML = `
    <nav class="project-nav">
            <a href="./index.html">BACK TO PROJECTS</i></a>
        </nav>
        <div class="discription">
                <h2>Space X</h2>
                <p>In this app you can search all of SpaceX launch vehicles. Developed with JavaScript DOM modules, using spacex API and Axios Promise based HTTP client</p>
                <a href="https://github.com/slobodan-rs/projects/tree/master/SpaceX" target="_blank">Go to project..</a>                  
        </div>
        </div>
        <div class="img-container">
            <img src="./resources/images/spacex.jpg" width="50%"/>
        </div>
    `
})