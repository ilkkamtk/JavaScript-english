'use strict';
// show map and center it to some coordinates (60.189,24.966)
const map = L.map('map').setView([60.189, 24.966], 11);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// fetch parking spots in helsinki
function getParking(page) {
  fetch('https://pubapi.parkkiopas.fi/public/v1/parking_area/?page=' + page).
      then(function(response) {
        if (response.ok) {  // if successful response...
          return response.json(); // ... move on to next then()
        } else {
          throw new Error('all parking spots fetched'); // if unsuccesful, throw error to get to the catch.
        }
      }).
      then(function(result) {
        const parkingSpots = tulos.result;
        L.geoJSON(parkingSpots, {  // parking spots are geoJSON features, so they can be shown on the map as they are
          onEachFeature: onEachFeature, // if you want to make something happen when spot is clicked... see row 35
        }).addTo(map);
        page++; // increase page to get the next set of parking spots
        console.log('fetched page', page);
        getParking(page); // get the next set of sopts by calling the function itself (recursion)
      }).
      catch(function(error) {
        console.log(error.message);
      });
}

// start fetching the parking spots starting from page 1
getParking(1);

// this function is run on each feature
function onEachFeature(feature, layer) {
  console.log(feature);
  layer.bindPopup(`<h1>I was clicked and I might have this many spots left: </h1><p>${feature.properties.capacity_estimate}</p>`);
}
