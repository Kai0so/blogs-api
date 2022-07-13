const User = require('../services/userService');
const generateJWT = require('../middlewares/helpers/generateJWT');

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const createdUser = await User.create(displayName, email, password, image);
    const token = generateJWT(createdUser);
    res.status(201).json({ token });
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  create,
};
