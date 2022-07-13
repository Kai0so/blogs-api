const { BlogPost, Category, User } = require('../database/models');

const getAll = async () => {
  const result = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      raw: true,
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
      raw: true,
    }],
  });
  return result;
};

module.exports = {
  getAll,
};
