const { User } = require('../database/models');

const create = async (displayName, email, password, image) => {
  const error = { status: 409, message: 'User already registered' };
  const invalidUser = await User.findOne({ where: { email } });
  if (invalidUser) throw error;
  const createdUser = await User.create({ displayName, email, password, image });
  return {
    id: createdUser.id,
    displayName: createdUser.displayName,
    email: createdUser.email,
    image: createdUser.image,
  };
};

module.exports = {
  create,
};
