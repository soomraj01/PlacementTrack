const path = require("path");
const multer = require("multer");
const router = require("express").Router();
const protect = require("../middleware/authMiddleware");
const { getProfile, updateProfile, uploadResume } = require("../controllers/profileController");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, callback) => callback(null, `${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`)
});
const upload = multer({ storage, fileFilter: (req, file, callback) => callback(null, path.extname(file.originalname).toLowerCase() === ".pdf") });

router.use(protect);
router.route("/").get(getProfile).put(updateProfile);
router.post("/resume", upload.single("resume"), uploadResume);
module.exports = router;
