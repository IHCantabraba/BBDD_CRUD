const Mountain = require('../models/mountain')
/* GET controller */
const getMountains = async (req, res, next) => {
  try {
    const allMountains = await Mountain.find().populate('concejo')
    return res.status(200).json(allMountains)
  } catch (error) {
    return res.status(400).json(`Error while reading Mountains: ${error}`)
  }
}
const postMountain = async (req, res, next) => {
  try {
    const newMountain = new Mountain(req.body)
    const savedMountain = newMountain.save()
    return res
      .status(200)
      .json(
        `Successfully created mountain ➡️ ${
          (req.body.name, (await savedMountain).name)
        } `
      )
  } catch (error) {
    return res.status(400).json(`Error while creatig Mountain: ${error}`)
  }
}

const updateMountain = async (req, res, next) => {
  try {
    const { id } = req.params
    const newMountain = new Mountain(req.body)
    newMountain._id = id
    const mountainUpdated = await Mountain.findByIdAndUpdate(id, newMountain, {
      new: true
    }) /* new:true hace que mountainupdated devuelva en nuevo y no el antiguo que devuelve por defecto*/
    return res
      .status(200)
      .json(`successfully updated mountain ${mountainUpdated}`)
  } catch (error) {
    return res.status(400).json(`Error while updating: ${error}`)
  }
}

const deleteMountain = async (req, res, next) => {
  try {
    const { id } = req.params
    const mountainDeleted = await Mountain.findByIdAndDelete(id)
    return res
      .status(200)
      .json(`Succesfully deleted mountain ${mountainDeleted.name}`)
  } catch (error) {
    return res.status(400).json(`Error deleting mountain: ${error}`)
  }
}

const getByAltitud = async (req, res, next) => {
  try {
    const { altitud } = req.params
    /* cuando hay muchos registos (millones) es mejor hacer la cnulta a la bbdd que al servidor  {varibale: {$operador: valor}} 
    Operadores [ $eq: equal, $lt:low than, $lte:low than equal, $gt - greater than, $gte: greater than equal, $ne:not equal, $in:in, $nin: not in] */
    const mountains = await Mountain.find({ altitud: { $gte: altitud } })
    return res.status(200).json(mountains)
  } catch (error) {
    return res.status(400).json(`Error while filtering by altitude: ${error}`)
  }
}
const getByName = async (req, res, next) => {
  try {
    const { name } = req.params
    const mountains = await Mountain.find({ name })
    return res.status(200).json(mountains)
  } catch (error) {
    return res.status(400).json(`Error while filtering by altitude: ${error}`)
  }
}

const getById = async (req, res, next) => {
  try {
    const { id } = req.params
    const mountains = await Mountain.find({ id })
    return res.status(200).json(mountains)
  } catch (error) {
    return res.status(400).json(`Error while filtering by altitude: ${error}`)
  }
}
module.exports = {
  getMountains,
  postMountain,
  updateMountain,
  deleteMountain,
  getByAltitud,
  getByName,
  getById
}
