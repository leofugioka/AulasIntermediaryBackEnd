import User from "../models/User.js";

const saveUser = async (UserModel) => {
  const save = await User.create(UserModel);
  return save;
};

const getUserById = async (id) => {
  return await User.findByPk(id);
};

const getAllUsers = async () => {
  return await User.findAll({
    order: [["id", "ASC"]],
  });
};

const deleteUserById = async (id) => {
  return await User.destroy({
    where: { id: id },
  });
};

const updateUserById = async (id, userModel) => {
  try {
    const result = await User.update(userModel, {
      where: { id: id },
    });
    if (result[0] === 1) {
      return { message: "User updated with success" };
    } else {
      return { message: "Cannot find ${id} to update", status: 404 };
    }
  } catch (error) {
    console.error();
  }
};

const factory = {
  saveUser,
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById,
};

export default factory;
