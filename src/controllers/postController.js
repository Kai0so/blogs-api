const Post = require('../services/postService');

const getAll = async (_req, res) => {
  try {
    const result = await Post.getAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAll,
};
