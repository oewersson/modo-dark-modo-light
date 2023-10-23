let botão = document.getElementById('botão')
let body = document.querySelector('body')

botão.addEventListener('click', () => {
    botão.classList.toggle('dark')
    body.classList.toggle('dark')
})