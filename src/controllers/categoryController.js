const Category = require('../services/categoryService');

const create = async (req, res) => {
  try {
    const { name } = req.body;
    const result = await Category.create(name);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  create,
};