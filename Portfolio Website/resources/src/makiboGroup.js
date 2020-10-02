const projectMakibo = document.querySelector('#app')
const projectMakiboButton = document.querySelector('#makibo-group')


projectMakiboButton.addEventListener('click', () => {
    projectMakibo.innerHTML = `
    <nav class="project-nav">
            <a href="./index.html">BACK TO PROJECTS</i></a>
        </nav>
        <div class="discription">
            <div>  
                <h2>Makibo Group</h2>
                <p>A website for a small company, developed using with custom UX design and HTML5 and CSS3 technologies</p>                               
            </div>
        </div>
        <div class="img-container">
            <img src="./resources/images/makibo.png" width="50%"/>
        </div>
    `
})