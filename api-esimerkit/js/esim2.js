'use strict';
// näytetään kartta ja keskitetään johonkin (60.189,24.966)
const map = L.map('map').setView([60.189, 24.966], 11);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// haetaan helsingin parkkipaikat
function haeParkkipaikka(sivu) {
  fetch('https://pubapi.parkkiopas.fi/public/v1/parking_area/?page=' + sivu).
      then(function(vastaus) {
        if (vastaus.ok) {  // jos vastaus on OK, eli ollaan saatu vastaus,
          return vastaus.json(); // mennään seuraavaan then-funktioon
        } else {
          throw new Error('parkkikset haettu'); // jos vastaus ei ole OK, heitetään errori ja koodi siirtyy catch osaan.
        }
      }).
      then(function(tulos) {
        const parkkikset = tulos.features;
        L.geoJSON(parkkikset, {  // parkkikset on geoJSON featureita joten ne voi suoraan syöttää karttaan
          onEachFeature: onEachFeature, // jos halutaan että parkkipaikkaa klikkaamalla tapahtuu jotain... ks. rivi 35
        }).addTo(map);
        sivu++; // kasvatetaan sivun arvoa, jotta saadaan haettua seuraava sivu
        console.log('haettiin sivu', sivu);
        haeParkkipaikka(sivu); // haetaan seuraava sivu kutsumalla funktiota itseään (rekursio)
      }).
      catch(function(error) {
        console.log(error.message);
      });
}

// käynnistetään parkkipaikkojen haku sivulta 1
haeParkkipaikka(1);

// tämä funktio ajetaan jokaiselle featurelle
function onEachFeature(feature, layer) {
  console.log(feature);
  layer.bindPopup(`<h1>Mua klikattiin</h1><p>${feature.properties.capacity_estimate}</p>`);
}
