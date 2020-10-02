const projectBrandCare = document.querySelector('body')
const projectBrandCareButton = document.querySelector('#brand-care-distribution')


projectBrandCareButton.addEventListener('click', () => {
    projectBrandCare.innerHTML = `
        <nav class="project-nav">
            <a href="./index.html">BACK TO PROJECTS</i></a>
        </nav>
        <div class="discription">
            <div>  
                <h2>Brand Care Distribution</h2>
                <p>A website for a small company, developed using a template and HTML5, CSS3 and JavaScript technology</p>                               
            </div>
        </div>
        <div class="img-container">
            <img src="./resources/images/bcdistribution.png" width="50%"/>
        </div>
    `
})
