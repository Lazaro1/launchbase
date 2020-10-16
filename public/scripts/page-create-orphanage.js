/* MAPA */


const map = L.map('mapid').setView([-16.728913,-43.880132], 15)

/* CREATE AND ADD TILELAYER */

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

/* CREATE ICON */

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

/* create and add marker */
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    // remove icon 
    marker && map.removeLayer(marker)

    /*  add icon layer */
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

/* add camp photos */
function addPhotoField (){
    // pegar o container de photos #images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
    //limpar o campo antes de adicionar ao container de imagens
    console.log(newFieldContainer.children)
    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}
