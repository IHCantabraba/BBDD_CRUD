const {
  getMountains,
  postMountain,
  deleteMountain,
  updateMountain,
  getByAltitud,
  getByName
} = require('../controllerrs/mountain')

const mountainRoutes = require('express').Router()
/* crear las rutas para los controladores */
mountainRoutes.get('/getByAltitud/:altitud', getByAltitud)
mountainRoutes.get('/getByName/:name', getByName)
mountainRoutes.get('/', getMountains)
mountainRoutes.post('/', postMountain)
mountainRoutes.put('/:id', updateMountain)
mountainRoutes.delete('/:id', deleteMountain)

module.exports = mountainRoutes
