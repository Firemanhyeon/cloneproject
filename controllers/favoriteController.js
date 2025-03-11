const favoriteService = require("../services/favoriteService");


exports.getFavorite = async (req, res) => {
  try {
    const favorites = await favoriteService.getAllFavorite();
    res.status(200).json(favorites);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};