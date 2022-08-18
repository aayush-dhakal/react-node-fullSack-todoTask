const express = require("express");

const { Todo, Subtask, Sequelize } = require("../models");

const router = express.Router();

// @route    POST api/todo
// @desc     add a todo
// @access   Public
router.post("/", async (req, res) => {
  const { title } = req.body;

  try {
    let todo = await Todo.create({ title });

    return res.json(todo);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    let todo = await Todo.findAll({
      include: [
        {
          model: Subtask,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    return res.json(todo);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.put("/:todoId", async (req, res) => {
  const { status } = req.body;
  const { todoId } = req.params;

  try {
    await Todo.update({ status }, { where: { todoId } });

    return res.json({ msg: "Todo updated successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
