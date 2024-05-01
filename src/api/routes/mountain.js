const {
  getMountains,
  postMountain,
  deleteMountain,
  updateMountain,
  getByAltitud,
  getByName,
  getById,
  getMoutainByConcejo
} = require('../controllerrs/mountain')

const mountainRoutes = require('express').Router()
/* crear las rutas para los controladores */
mountainRoutes.get('/getByAltitud/:altitud', getByAltitud)
mountainRoutes.get('/getByName/:name', getByName)
mountainRoutes.get('/getById/:id', getById)
mountainRoutes.get('/getByConcejo/:concejo', getMoutainByConcejo)
mountainRoutes.get('/', getMountains)
mountainRoutes.post('/', postMountain)
mountainRoutes.put('/:id', updateMountain)
mountainRoutes.delete('/:id', deleteMountain)

module.exports = mountainRoutes
