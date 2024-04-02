import Teacher from "../models/Teacher.js";

const saveTeacher = async (teacherModel) => {
  const save = await Teacher.create(teacherModel);
  return save;
};

const getTeacherById = async (id) => {
  return await Teacher.findByPk(id);
};

const getAllTeachers = async () => {
  return await Teacher.findAll();
};

const deleteTeacherById = async () => {
  return await Teacher.destroy({
    where: { id: id },
  });
};

const updateTeacherById = async (id, teacherModel) => {
  try {
    const result = Teacher.update(teacherModel, {
      where: { id: id },
    });
    if (result[0] === 1) {
      return { message: "Teacher updated with success" };
    } else {
      return { message: "Cannot find ${id} to update" };
    }
  } catch (error) {
    console.error();
  }
};

const factory = {
  saveTeacher,
  getTeacherById,
  getAllTeachers,
  deleteTeacherById,
  updateTeacherById,
};

export default factory;
