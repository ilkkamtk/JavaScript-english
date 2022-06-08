'use strict';
// dokumentaatio:
// https://www.digitraffic.fi/meriliikenne/#/vessel-location-controller/vesselLocationsWithingRadiusFromPointUsingGET
// https://www.digitraffic.fi/meriliikenne/#/vessel-metadata-controller/vesselMetadataByMssiUsingGET
// https://www.digitraffic.fi/meriliikenne/

const latitude = 60.189;
const longitude = 24.966
const radius = 30;
const now = new Date();
console.log(now);
let from = now.toISOString();
// from on APIlle liian tarkka aika, joten poistetaan sekunnit ja sekunnin osat. Lisätään sen jälkeen 00.000Z
from = from.slice(0, -7) + '00.000Z';

// näytetään kartta
const map = L.map('map').setView([latitude, longitude], 11);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// haetaan alusten sijaintitiedot helsingin lähistöltä
fetch(`https://meri.digitraffic.fi/api/v1/locations/latitude/${latitude}/longitude/${longitude}/radius/${radius}/from/${from}`).
then(function(vastaus) {
  return vastaus.json();
}).
then(function(sijainnit) {
  L.geoJSON(sijainnit, {  // sijainnit on geoJSON featureita joten ne voi suoraan syöttää karttaan
    onEachFeature: onEachFeature, // jos halutaan että parkkipaikkaa klikkaamalla tapahtuu jotain... ks. rivi 34
  }).addTo(map);
});

// tämä funktio ajetaan jokaiselle featurelle
function onEachFeature(sijainti, taso) {
  console.log(taso);
  taso.
  bindPopup().
  openPopup().
  on('popupopen', function(popup) {
    // haetaan aluksen nimi vasta siinä vaiheessa, kun markkerin/tason popup aukeaa
    fetch(
        'https://meri.digitraffic.fi/api/v1/metadata/vessels/' + sijainti.mmsi).
    then(function(vastaus) {
      return vastaus.json();
    }).
    then(function(metatiedot) {
      taso._popup.setContent(`<p>${metatiedot.name}</p>`);
    });
  })
}
