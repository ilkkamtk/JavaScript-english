'use strict';
// documentation:
// https://www.digitraffic.fi/meriliikenne/#/vessel-location-controller/vesselLocationsWithingRadiusFromPointUsingGET
// https://www.digitraffic.fi/meriliikenne/#/vessel-metadata-controller/vesselMetadataByMssiUsingGET
// https://www.digitraffic.fi/meriliikenne/

const latitude = 60.189;
const longitude = 24.966
const radius = 30;
const now = new Date();
console.log(now);
let from = now.toISOString();
// from is too accurate value for the API so remove everything after seconds. After that add 00.000Z
from = from.slice(0, -7) + '00.000Z';

// show the map
const map = L.map('map').setView([latitude, longitude], 11);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// fetch the locations of vessels near Helsinki
fetch(`https://meri.digitraffic.fi/api/v1/locations/latitude/${latitude}/longitude/${longitude}/radius/${radius}/from/${from}`).
then(function(response) {
  return response.json();
}).
then(function(locations) {
  L.geoJSON(locations, {  // locations are geoJSON features
    onEachFeature: onEachFeature,
  }).addTo(map);
});

// make something happen on each geoJSON feature
function onEachFeature(location, layer) {
  console.log(layer);
  layer.
  bindPopup().
  openPopup().
  on('popupopen', function(popup) {
    // get the name of the vessel only when the popup opens
    fetch(
        'https://meri.digitraffic.fi/api/v1/metadata/vessels/' + location.mmsi).
    then(function(response) {
      return response.json();
    }).
    then(function(metadata) {
      layer._popup.setContent(`<p>${metadata.name}</p>`);
    });
  })
}
