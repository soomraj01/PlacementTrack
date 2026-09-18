const Application = require("../models/Application");

const getApplications = async (req, res) => {
  const { status, search } = req.query;
  const filter = { user: req.user._id };
  if (status && status !== "All") filter.status = status;
  if (search) filter.$or = [{ companyName: { $regex: search, $options: "i" } }, { jobRole: { $regex: search, $options: "i" } }];
  const applications = await Application.find(filter).sort({ createdAt: -1 });
  res.json(applications);
};

const createApplication = async (req, res) => {
  const application = await Application.create({ ...req.body, user: req.user._id });
  res.status(201).json(application);
};

const updateApplication = async (req, res) => {
  const application = await Application.findOneAndUpdate({ _id: req.params.id, user: req.user._id }, req.body, { new: true, runValidators: true });
  if (!application) return res.status(404).json({ message: "Application not found" });
  res.json(application);
};

const deleteApplication = async (req, res) => {
  const application = await Application.findOneAndDelete({ _id: req.params.id, user: req.user._id });
  if (!application) return res.status(404).json({ message: "Application not found" });
  res.json({ message: "Application deleted" });
};

const getStats = async (req, res) => {
  const applications = await Application.find({ user: req.user._id });
  const count = (status) => applications.filter((item) => item.status === status).length;
  res.json({ total: applications.length, dream: count("Dream"), applied: count("Applied"), shortlisted: count("Shortlisted"), interviews: count("Interview"), offers: count("Offered"), rejected: count("Rejected") });
};

module.exports = { getApplications, createApplication, updateApplication, deleteApplication, getStats };
