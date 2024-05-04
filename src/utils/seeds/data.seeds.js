const concejos = require('../../data/concejos')
const Concejo = require('../../api/models/concejos')

const mountains = require('../../data/mountains')
const { getMoutainByConcejo } = require('../../api/controllerrs/mountain')
const Mountain = require('../../api/models/mountain')
Object.filter = (obj, predicate) => {
  Object.fromEntries(Object.entries(obj).filter(predicate))
}
const dataSeeds = async () => {
  try {
    let IdList = {}
    await Concejo.collection.drop()
    await Mountain.collection.drop()
    console.log('Concejos eliminadas')
    for (const concejo of concejos) {
      const newConcejo = new Concejo(concejo)
      IdList[newConcejo.name] = newConcejo._id
      newConcejo.save()
    }
    for (const mountain of mountains) {
      const newMountain = new Mountain(mountain)

      const concejoID = Object.fromEntries(
        Object.entries(IdList).filter(([key]) =>
          key.includes(`${newMountain.concejo}`)
        )
      )
      newMountain['concejo'] = concejoID[newMountain.concejo]
      newMountain.save()
    }
    Mountain.find().populate('concejo').exec()
  } catch (error) {
    console.log(`Error occurred: ${error}`)
  }
}
module.exports = { dataSeeds }
