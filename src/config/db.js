const mongoose = require('mongoose')

const connect2DB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Connected 🌁')
  } catch (error) {
    console.log('Error conectando con la bbdd 🥵 ')
  }
}

/* con {} cuando e suna funcion */
module.exports = { connect2DB }
