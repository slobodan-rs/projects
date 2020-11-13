const body = document.querySelector('body')

// Back to top button
const button = document.createElement('button')
button.innerHTML = `<i class="fas fa-angle-up fa-2x"></i>`
body.append(button)
body.onscroll = () => window.scrollY > 100 ? button.id = ('back-to-top') : button.id = ('back-to-top-hidden')

const backToTop = () => {
    return window.scrollTo(0, 0);
}
button.addEventListener('click', (e) => {
    e.preventDefault()
    backToTop()
})

// Component
const HomeComponent = {
    render: () => {
        return `
        <!------------Header------------->
        <header>
            <nav class="nav-bar">
                <ul>
                    <li><a href="#who">Who</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div class="main-header">
                <h1>Geek Alert!</h1>
            </div>
        </header>
        
        <!-----------Main-------------->
        <main>
            <section id="who">
                <article class="section-left">
                    <h3>Slobodan Kocić</h3>
                    <h1>Coder<span style="font-size: 22px; color: black">and awkward dancer.</span></h1>
                    <p>A Front End Web Developer whose main focus is on writing clean, elegant and efficient code.
                        <br>Tech and open-source enthusiast, curious by nature, aspired to work with innovative
                        technologies and pursuit career in the digital world..</p>
                    <p class="second-paragraph">And no. You cannot see me dancing.</p>
                    <ul>
                        <li><a href="mailto:mr.slobodan@hotmail.rs"><i class="fas fa-envelope fa-2x"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter fa-2x"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/slobodan-kocic/" target="_blank"><i
                                    class="fab fa-linkedin fa-2x"></i></a></li>
                    </ul>
                </article>
                <article class="section-right">
                    <img src="resources/images/avatar.png" alt="laptop">
                </article>
            </section>
            <section id="work">
                <div class="project">
                    <a href="#/brandcare" id="brand-care-distribution">Brand Care Distribution</a>
                </div>
                <div class="project">
                    <a href="#/spacex" id="spacex">SpaceX</a>
                </div>
                <div class="project">
                    <a href="#/tempcontrol" id="temperature-control">Temperature Control</a>
                </div>
                <div class="project">
                    <a href="#/beomaster" id="beomaster">Beomaster Nekretnine</a>
                </div>
                <div class="recent-work-header">
                    <h1>Recent</h1>
                    <h1>Work</h1>
                    <a href="https://github.com/slobodan-rs/projects" class="github-link" target=_blank>GitHub Page</a>
                </div>
                <div class="project">
                    <a href="#/rickandmorty" id="rick-and-morty">Rick and Morty</a>
                </div>
                <div class="project">
                    <a href="#/makibogroup" id="makibo-group">Makibo Group</a>
                </div>
                <div class="project">
                    <a href="#/advertising-data" id="advertising-data">Advertising Data</a>
                </div>
                <div class="project">
                    <a href="#/budget-calculator" id="budget-calculator">Budget Calculator</a>
                </div>
            </section>
        </main>
        
        <!----------Footer------------->
        <footer id="contact">
            <h1>Hire Me</h1>
            <p>I am currently taking on new projects. Would you like to discuss yours?</p>
            <p>mr.slobodan@hotmail.rs</p>
            <ul>
                <li><a href="mailto:mrslobodan@hotmail.rs"><i class="fas fa-envelope fa-3x"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter fa-3x"></i></a></li>
                <li><a href="https://www.linkedin.com/in/slobodan-kocic/" target="_blank"><i
                            class="fab fa-linkedin fa-3x"></i></a></li>
            </ul>
        </footer>`
    }
}
export default HomeComponent