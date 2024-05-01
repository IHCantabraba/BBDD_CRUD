const mongoose = require('mongoose')
/* schema tiene 2 objetos {estructura},{opciones} */
const mountainSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    altitud: { type: Number, required: true, trim: true },
    concejo: { type: String, ref: 'concejos' },
    img: { type: String },
    belongs2Beauty: { type: Boolean, required: true },
    trackAvailable: { type: Boolean, required: true },
    trackCategory: [
      {
        type: String,
        required: true,
        enum: ['hike', 'climb', 'sky touring']
      }
    ]
  },
  {
    timestamps: true,
    collection: 'mountains' /* not required */
  }
)
/*                                 model        schema    BBDD collection name */
const Mountain = mongoose.model('mountains', mountainSchema, 'mountains')

module.exports = Mountain
