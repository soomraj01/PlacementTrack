const router = require("express").Router();
const protect = require("../middleware/authMiddleware");
const { getApplications, createApplication, updateApplication, deleteApplication, getStats } = require("../controllers/applicationController");
router.use(protect);
router.get("/stats", getStats);
router.route("/").get(getApplications).post(createApplication);
router.route("/:id").put(updateApplication).delete(deleteApplication);
module.exports = router;
