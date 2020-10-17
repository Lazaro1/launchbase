/* MAPA */
const map = L.map('mapid').setView([-16.728913,-43.880132], 15)
/* CREATE AND ADD TILELAYER */
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
/* CREATE ICON */
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function addMarker({id, name, lat, lng}) {

    /* CREATE POPUP OVERLAY */
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidht: 240,
        minHeight:240
    }).setContent(`${name} <a href="orphanage?id=${id}"><img src="/images/arrow-white.svg"> </a>`)
    /* CREATE AND ADD MARKER */
    L.marker([lat,lng], { icon })
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
console.log(orphanagesSpan)
orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage)
})
