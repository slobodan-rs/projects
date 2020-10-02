const body = document.querySelector('body')
const button = document.querySelector('#back-to-top-hidden')

body.onscroll = () => window.scrollY > 100 ? button.id = ('back-to-top') : button.id = ('back-to-top-hidden')

const backToTop = () => {
    return window.scrollTo(0, 0);
}

button.addEventListener('click', (e) => {
    e.preventDefault()
    backToTop()
})