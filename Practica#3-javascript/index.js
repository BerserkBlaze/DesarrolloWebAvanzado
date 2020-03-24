import createElement from './utils/createElement'

const $app = document.getElementById('app')
i = 1
cadena = 'https://picsum.photos/200/300?random='

function CambiarImagen() {
    picture1 = createElement('img', { id: 'picture1', class: 'arriba', src: cadena + i++ }, ['Hi createElement'])
    picture2 = createElement('img', { id: 'picture2', class: 'arriba', src: cadena + i++ }, ['Hi createElement'])
    picture3 = createElement('img', { id: 'picture3', class: 'arriba', src: cadena + i++ }, ['Hi createElement'])
    picture4 = createElement('img', { id: 'picture4', class: 'arriba', src: cadena + i++ }, ['Hi createElement'])
    picture5 = createElement('img', { id: 'picture5', class: 'arriba', src: cadena + i++ }, ['Hi createElement'])
    picture6 = createElement('img', { id: 'picture6', class: 'arriba', src: cadena + i++ }, ['Hi createElement'])
    picture7 = createElement('img', { id: 'picture7', class: 'abajo', src: cadena + i++ }, ['Hi createElement'])
    picture8 = createElement('img', { id: 'picture8', class: 'abajo', src: cadena + i++ }, ['Hi createElement'])
    picture9 = createElement('img', { id: 'picture9', class: 'abajo', src: cadena + i++ }, ['Hi createElement'])
    picture10 = createElement('img', { id: 'picture10', class: 'abajo', src: cadena + i++ }, ['Hi createElement'])
    const container = createElement('div', { id: 'container' }, [picture1, picture2, picture3, picture4, picture5, picture6, picture7, picture8, picture9, picture10])
    console.log(container)
    $app.innerHTML = ""
    $app.appendChild(container)
}

CambiarImagen()
setInterval(() => {
    CambiarImagen()
}, 5000);