const validateName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"userName" length must be at least 8 characters long',
    });
  }
  next();
};

module.exports = validateName;
