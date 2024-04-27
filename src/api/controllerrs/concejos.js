const Concejo = require('../models/concejos')
/* GET controller */
const getConcejos = async (req, res, next) => {
  try {
    const allConcejos = await Concejo.find()
    return res.status(200).json(allConcejos)
  } catch (error) {
    return res.status(400).json(`Error while reading Concejos: ${error}`)
  }
}
const postConcejo = async (req, res, next) => {
  try {
    const newConcejo = new Concejo(req.body)
    const savedConcejo = newConcejo.save()
    return res
      .status(200)
      .json(
        `Successfully created concejo ➡️ ${
          (req.body.name, (await savedConcejo).name)
        } `
      )
  } catch (error) {
    return res.status(400).json(`Error while creatig Concejo: ${error}`)
  }
}

const updateConcejo = async (req, res, next) => {
  try {
    const { id } = req.params
    const newConcejo = new Concejo(req.body)
    newConcejo._id = id
    const concejoUpdated = await Concejo.findByIdAndUpdate(id, newConcejo, {
      new: true
    }) /* new:true hace que concejoupdated devuelva en nuevo y no el antiguo que devuelve por defecto*/
    return res
      .status(200)
      .json(`successfully updated concejo ${concejoUpdated}`)
  } catch (error) {
    return res.status(400).json(`Error while updating: ${error}`)
  }
}

const deleteConcejo = async (req, res, next) => {
  try {
    const { id } = req.params
    const concejoDeleted = await Concejo.findByIdAndDelete(id)
    return res
      .status(200)
      .json(`Succesfully deleted concejo ${concejoDeleted.name}`)
  } catch (error) {
    return res.status(400).json(`Error deleting concejo: ${error}`)
  }
}

const getByName = async (req, res, next) => {
  try {
    const { name } = req.params
    const concejos = await Concejo.find({ name })
    return res.status(200).json(concejos)
  } catch (error) {
    return res.status(400).json(`Error while filtering by name: ${error}`)
  }
}
module.exports = {
  getConcejos,
  postConcejo,
  updateConcejo,
  deleteConcejo,
  getByName
}
