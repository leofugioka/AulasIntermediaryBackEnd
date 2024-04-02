import Course from "../models/Course.js";

const saveCourse = async (courseModel) => {
  const save = await Course.create(courseModel);
  return save;
};

const getCourseById = async (id) => {
  return await Course.findByPk(id);
};

const getAllCourses = async () => {
  return await Course.findAll();
};

const deleteCourseById = async (id) => {
  return await Course.destroy({
    where: { id: id },
  });
};

const updateCourseById = async (id, courseModel) => {
  try {
    const result = await Course.update(courseModel, {
      where: { id: id },
    });
    if (result[0] === 1) {
      return { message: "Course updated with success" };
    } else {
      return { message: "Cannon find ${id} to update", status: 404 };
    }
  } catch (error) {
    console.error();
  }
};

const factory = {
  saveCourse,
  getCourseById,
  getAllCourses,
  deleteCourseById,
  updateCourseById,
};

export default factory;
