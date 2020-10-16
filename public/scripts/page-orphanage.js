
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

/* MAPA */


const map = L.map('mapid', options).setView([-16.728913,-43.880132], 15)

/* CREATE AND ADD TILELAYER */

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

/* CREATE ICON */

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})



/* CREATE AND ADD MARKER */

L.marker([-16.728913,-43.880132], { icon })
.addTo(map)

function selectImage(event) {
    
    const button = event.currentTarget

    /*  remover tidas as classes .active */
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        button.classList.remove("active")
    })

    /* selecionar a imagem clicada */
    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')

    /* Atualizar o content da imagem  */
    imageContainer.src = image.src

    /* adicionar a classe .active para este botao */
    button.classList.add("active")
}