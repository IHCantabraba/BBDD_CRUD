const {
  getConcejos,
  postConcejo,
  deleteConcejo,
  updateConcejo,

  getByName
} = require('../controllerrs/concejos')

const concejoRoutes = require('express').Router()
/* crear las rutas para los controladores */

concejoRoutes.get('/getByName/:name', getByName)
concejoRoutes.get('/', getConcejos)
concejoRoutes.post('/', postConcejo)
concejoRoutes.put('/:id', updateConcejo)
concejoRoutes.delete('/:id', deleteConcejo)

module.exports = concejoRoutes
