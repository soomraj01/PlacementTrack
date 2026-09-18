const User = require("../models/User");

const getProfile = async (req, res) => res.json(req.user);

const updateProfile = async (req, res) => {
  const { name, branch, college, graduationYear, skills } = req.body;
  const user = await User.findByIdAndUpdate(req.user._id, { name, branch, college, graduationYear, skills }, { new: true, runValidators: true }).select("-password");
  res.json(user);
};

const uploadResume = async (req, res) => {
  if (!req.file) return res.status(400).json({ message: "Please choose a PDF file" });
  const resume = `/uploads/${req.file.filename}`;
  const user = await User.findByIdAndUpdate(req.user._id, { resume }, { new: true }).select("-password");
  res.json(user);
};

module.exports = { getProfile, updateProfile, uploadResume };
