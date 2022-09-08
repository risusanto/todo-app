const express = require("express")

// import controller
const activity_controller = require("../controllers/activity")
const router = express.Router()

router.get("/", activity_controller.list)
router.post("/", activity_controller.create)
router.get("/:id", activity_controller.getByID)
router.delete("/:id", activity_controller.delete)
router.put("/:id", activity_controller.update)

module.exports = router