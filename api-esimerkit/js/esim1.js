'use strict';

const apiOsoite = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

// haetaan pysakit koordiaattien avulla
function haePysakitKoordinaateilla(crd, dist) {
  // GraphQL haku
  const haku = `{
                  stopsByRadius(lat:${crd.latitude}, lon:${crd.longitude}, radius:${dist}) {
                    edges {
                      node {
                        stop {
                          name
                          desc
                          lat
                          lon
                          routes {
                            shortName
                          }
                        }
                      }
                    }
                  }
                }`;

  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({query: haku}), // GraphQL haku lisätään queryyn
  };

  // lähetetään haku
  fetch(apiOsoite, fetchOptions).then(function(vastaus) {
    return vastaus.json();
  }).then(function(tulos) {
    console.log(tulos);

    // tulostetaan pysäkit
    const pysakit = tulos.data.stopsByRadius.edges;
    for (let i = 0; i < pysakit.length; i++) {
      const nimi = pysakit[i].node.stop.name;
      const kuvaus = pysakit[i].node.stop.desc;
      const latitude = pysakit[i].node.stop.lat;
      const longitude = pysakit[i].node.stop.lon;
      const linjat = pysakit[i].node.stop.routes;
      console.log(`<p>${nimi}, koordinaatit: ${latitude}, ${longitude}</p>`);
      document.getElementById(
          'tulosta').innerHTML += `<p>
                                              ${nimi}, ${kuvaus}, 
                                              koordinaatit: ${latitude}, ${longitude}, 
                                              bussit: ${joinObj(linjat)}
                                            </p>`;
    }
  }).catch(function(e) {
    console.error(e.message);
  });
}

// tällä funktiolla yhdistetään taulukko, jossa bussilinjojen tunnukset (shortName)
function joinObj(taulukko) {
  const out = [];
  for (let i = 0; i < taulukko.length; i++) {
    out.push(taulukko[i].shortName);
  }
  return out.join(', ');
}

// käynnistetään pysäkkien haku halutuista koordinaateista 500 metrin säteellä
haePysakitKoordinaateilla({latitude: 60.22417, longitude: 24.7582}, 500)
