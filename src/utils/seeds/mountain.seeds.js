const mountains = require('../../data/mountains')
const Mountain = require('../../api/models/mountain')
const mongoose = require('mongoose')

const lanzarSemilla = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://inigocanta:XYbIavqbqRwn9W0T@cluster0.zpic5yj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    await Mountain.collection.drop()
    console.log('Montañas eliminadas')
    await Mountain.insertMany(mountains)
    console.log('Montañas introducidas')
    await mongoose.disconnect()
    console.log('desconectado')
  } catch (error) {
    console.log(`Error occurred: ${error}`)
    await mongoose.disconnect()
    console.log('desconectado')
  }
}
lanzarSemilla()
