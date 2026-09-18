const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    companyName: { type: String, required: true, trim: true },
    jobRole: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ["Dream", "Applied", "Shortlisted", "Interview", "Offered", "Rejected"],
      default: "Dream"
    },
    applicationDate: { type: Date },
    location: { type: String, default: "" },
    package: { type: String, default: "" },
    applicationLink: { type: String, default: "" },
    notes: { type: String, default: "" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);
