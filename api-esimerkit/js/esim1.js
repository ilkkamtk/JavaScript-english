'use strict';

const apiAddress = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

// fetch stops by coordinates
function getStopsByCoordinates(crd, dist) {
  // GraphQL query
  const GQLQuery = `{
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
      'digitransit-subscription-key': 'your key here',
    },
    body: JSON.stringify({query: GQLQuery}),
  };

  // send query
  fetch(apiAddress, fetchOptions).then(function(response) {
    return response.json();
  }).then(function(result) {
    console.log(result);

    // print stops
    const stops = tulos.data.stopsByRadius.edges;
    for (let i = 0; i < stops.length; i++) {
      const name = stops[i].node.stop.name;
      const description = stops[i].node.stop.desc;
      const latitude = stops[i].node.stop.lat;
      const longitude = stops[i].node.stop.lon;
      const routes = stops[i].node.stop.routes;
      console.log(`<p>${name}, koordinaatit: ${latitude}, ${longitude}</p>`);
      document.getElementById(
          'print').innerHTML += `<p>
                                              ${name}, ${description}, 
                                              koordinaatit: ${latitude}, ${longitude}, 
                                              bussit: ${joinObj(routes)}
                                            </p>`;
    }
  }).catch(function(e) {
    console.error(e.message);
  });
}

// this function is used to join a table containing identifiers of the bus routes (shortName)
function joinObj(array) {
  const out = [];
  for (let i = 0; i < array.length; i++) {
    out.push(array[i].shortName);
  }
  return out.join(', ');
}

// start fetching bus stops from some coordinates with 500 meter radius
getStopsByCoordinates({latitude: 60.22417, longitude: 24.7582}, 500)
