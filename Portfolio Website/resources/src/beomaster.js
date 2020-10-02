const projectBeomaster = document.querySelector('#app')
const projectBeomasterButton = document.querySelector('#beomaster')


projectBeomasterButton.addEventListener('click', () => {
    projectBeomaster.innerHTML = `
    <nav class="project-nav">
            <a href="./index.html">BACK TO PROJECTS</i></a>
        </nav>
        <div class="discription">
            <div>  
                <h2>Beomaster Nekretnine</h2>
                <p>A website for a small company, developed with custom UX design and Wordpress technology</p>                               
            </div>
        </div>
        <div class="img-container">
            <img src="./resources/images/beomaster.png" width="50%"/>
        </div>
    `
})