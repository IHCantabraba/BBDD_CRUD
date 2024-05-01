const express = require('express')
const { connect2DB } = require('./src/config/db')
const mountainRoutes = require('./src/api/routes/mountain')
const concejoRoutes = require('./src/api/routes/concejos')
const { dataSeeds } = require('./src/utils/seeds/data.seeds')

const { getByName } = require('./src/api/controllerrs/concejos')
/* configurar lectura del .env */
require('dotenv').config()
/* crear el server */
const app = express()
/*connectarse a la bbdd*/
connect2DB()
const PORT = 3000
/* configurar nuestro server para poder parsear json en el CRUD */
app.use(express.json())
/* pupulate DDBB */
dataSeeds()

/* rutas */
app.use('/api/v1/mountains', mountainRoutes)
app.use('/api/v1/concejos', concejoRoutes)
app.use('/ping', (req, res, next) => {
  return res.status(200).json('pong')
})

/* "*" esta ruta siempre al final
  siempre e sun camino válido para cualquier ruta */
app.use('*', (req, res, next) => {
  return res.status(200).json('Route not found')
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
