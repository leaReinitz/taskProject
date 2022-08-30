
const saveObject = async (object) => {
  return new Promise(async (resolve, reject) => {
    try {
      const obj = await object.save()
      resolve(obj);
    } catch (err) {
      reject(err);
    }
  }
  )
}

const getAllCollection = async (Model) => {
  return new Promise(async (resolve, reject) => {
    try {
      let tasks = await Model.find();
      resolve(tasks);
    } catch (err) {
      reject(err);
    }
  }
  )
}

const updateObject = async (Model,id,object) => {
  return new Promise(async (resolve, reject) => {
    try {
      await Model.findByIdAndUpdate(id, object);
      resolve();
    } catch (err) {
      reject(err);
    }
  }
  )
}

const deleteObject = async (Model, id) => {
  return new Promise(async (resolve, reject) => {
    try {
      await Model.findByIdAndDelete(id);
      resolve();
    } catch (err) {
      reject(err);
    }
  }
  )
}

module.exports = { saveObject,getAllCollection,updateObject,deleteObject}