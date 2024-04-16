import model from "./model.js";

export const createModule = (module) => {
    delete module._id;
    model.create(module)
};

export const findAllModules = (courseId) => model.find({course: courseId}).exec();
export const updateModule = (moduleId, module) =>  model.updateOne({ _id: moduleId }, { $set: module });
export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });