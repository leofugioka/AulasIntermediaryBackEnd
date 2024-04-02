import Evaluation from "../models/Evaluation.js";

const saveEvaluation = async (EvaluationModel) => {
  const save = await Evaluation.create(EvaluationModel);
  return save;
};

const getEvaluationById = async (id) => {
  return await Evaluation.findByPk(id);
};

const getAllEvaluations = async () => {
  return await Evaluation.findAll({
    order: [["id", "ASC"]],
  });
};

const deleteEvaluationById = async (id) => {
  return await Evaluation.destroy({
    where: { id: id },
  });
};

const updateEvaluationById = async (id, evaluationModel) => {
  try {
    const result = await Evaluation.update(EvaluationModel, {
      where: { id: id },
    });
    if (result[0] === 1) {
      return { message: "Evaluation updated with success" };
    } else {
      return { message: "Cannot find ${id} to update", status: 404 };
    }
  } catch (error) {
    console.error();
  }
};

const factory = {
  saveEvaluation,
  getAllEvaluations,
  getEvaluationById,
  deleteEvaluationById,
  updateEvaluationById,
};

export default factory;
