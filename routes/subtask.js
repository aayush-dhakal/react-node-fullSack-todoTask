const express = require("express");

const { Subtask } = require("../models");

const router = express.Router();

// @route    POST api/subtask
// @desc     add a subtask
// @access   Public
router.post("/", async (req, res) => {
  const { title, todoId } = req.body;

  if (!todoId) {
    return res
      .status(405)
      .json({ msg: "Cannot create subtask without todoId" });
  }

  try {
    let subtask = await Subtask.create({ title, todoId });

    return res.json(subtask);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.put("/:subtaskId", async (req, res) => {
  const { status } = req.body;
  const { subtaskId } = req.params;

  try {
    await Subtask.update({ status }, { where: { subtaskId } });

    return res.json({ msg: "Subtask updated successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
