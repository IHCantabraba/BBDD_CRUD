const mongoose = require('mongoose')
/* schema tiene 2 objetos {estructura},{opciones} */
/* TODO completar el schema */
const concejoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    capital: { type: String, required: false, trim: true }
  },
  { timestamps: true, collection: 'concejos' /* not required */ }
)
/*                                 model        schema    BBDD collection name */
const Concejo = mongoose.model('concejos', concejoSchema, 'concejos')

module.exports = Concejo
