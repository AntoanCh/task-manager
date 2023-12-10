const express = require("express");
const router = express.Router();
const {
  getTasks,
  setTasks,
  updateTasks,
  deleteTasks,
} = require("../controllers/taskController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getTasks).post(protect, setTasks);
router.route("/:id").put(protect, updateTasks).delete(protect, deleteTasks);

module.exports = router;
