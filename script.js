mapboxgl.accessToken = MAPBOX_GL_ACCESS_TOKEN

const setupMap = (center) => {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center,
    zoom: 15
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, 'top-left')
}

const successLocation = (position) => {
  setupMap([position.coords.longitude, position.coords.latitude])
}

const errorLocation = () => {
  setupMap([-2.24, 53.48])
}

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })
