const { getByName } = require('../api/controllerrs/concejos')
const concejoRoutes = require('../api/routes/concejos')

const mountains = [
  {
    name: 'Tiatordos',
    altitud: 1951,
    concejo: 'Ponga',
    img: 'url',
    belongs2Beauty: true,
    trackAvailable: false,
    trackCategory: ['hike', 'sky touring', 'climb']
  },
  {
    name: 'Remelende',
    altitud: 1888,
    concejo: 'Campo Caso',
    img: 'url',
    belongs2Beauty: true,
    trackAvailable: false,
    trackCategory: ['hike']
  },
  {
    name: 'Urriellu',
    altitud: 2519,
    concejo: 'Cabrales',
    img: 'url',
    belongs2Beauty: true,
    trackAvailable: false,
    trackCategory: ['climb']
  },
  {
    name: 'Torre Cerredo',
    altitud: 2650,
    concejo: 'Cabrales',
    img: 'url',
    belongs2Beauty: true,
    trackAvailable: false,
    trackCategory: ['hike', 'climb']
  }
]
module.exports = mountains
