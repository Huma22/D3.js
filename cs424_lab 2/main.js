function create_map() {
    var map = L.map('map').setView(
        [37.8, -96],
        4
    );

    function onEachFeature(feature, layer) {
        console.log(feature)
    }

    function style(feature) {
        var colorScale = d3.scaleQuantize()
            .domain([0, 1000])
            .range(colorbrewer.Paired[9]);
        return {
            fillColor: colorScale(feature.properties.density),
            opacity: 0.2,
            fillOpacity: 0.7
        }
    }


    var titles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: maxZoom = 19, }).addTo(map);
    L.geoJson(statesData, { style: style, onEachFeature: onEachFeature }).addTo(map)

}

function create_plot() {

}

function init() {
    create_map();
}

window.onload = init;