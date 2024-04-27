const concejos = require('../../data/concejos')
const Concejo = require('../../api/models/concejos')
const mongoose = require('mongoose')

const lanzarSemilla = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://inigocanta:XYbIavqbqRwn9W0T@cluster0.zpic5yj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    await Concejo.collection.drop()
    console.log('Concejos eliminadas')
    await Concejo.insertMany(concejos)
    console.log('Concejos introducidas')
    await mongoose.disconnect()
    console.log('desconectado')
  } catch (error) {
    console.log(`Error occurred: ${error}`)
    await mongoose.disconnect()
    console.log('desconectado')
  }
}
lanzarSemilla()
