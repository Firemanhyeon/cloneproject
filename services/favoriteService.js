const Favorite = require("../models/Favorite");

exports.getAllFavorite = async () => {
  return await Favorite.findAll();
};
