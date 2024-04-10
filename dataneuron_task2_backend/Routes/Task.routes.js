const express = require("express");
const { DataModel } = require("../Model/Data.model");
const { CountModel } = require("../Model/Count.model"); // Assuming you've created this model
const taskRouter = express.Router();

const updateCountsInDatabase = async (type) => {
  if (type === 'add') {
    await CountModel.findOneAndUpdate({}, { $inc: { addCount: 1 } }, { upsert: true });
  } else if (type === 'update') {
    await CountModel.findOneAndUpdate({}, { $inc: { updateCount: 1 } }, { upsert: true });
  }
};


taskRouter.get("/", async (req, res) => {
  const tasks = await DataModel.find();
  res.send(tasks);
});

taskRouter.post("/create", async (req, res) => {
  try {
    const payload = req.body;
    const task = new DataModel(payload);
    await task.save();
    await updateCountsInDatabase('add');
    res.send({ message: "Data created" });
  } catch (err) {
    res.status(400).send({ message: "Data not created", error: err.message });
  }
});


taskRouter.patch("/update/:id", async (req, res) => {
  const dataID = req.params.id;
  const payload = req.body;
  console.log('payload:', payload)

  try {
    const updatedTask = await DataModel.findByIdAndUpdate(dataID, payload, { new: true });
    if (!updatedTask) {
      return res.status(404).send({ message: "Task not found" });
    }else{
      await updateCountsInDatabase('update');
    }
    res.send({ message: "Data updated", task: updatedTask });
  } catch (err) {
    res.status(400).send({ message: "Data not updated", error: err.message });
  }
});


taskRouter.get("/getCount", async (req, res) => {
  const counts = await CountModel.findOne({});
  if (!counts) {
    return res.status(404).json({ message: "Counts not found" });
  }
  res.json({ addCount: counts.addCount, updateCount: counts.updateCount });
});


module.exports = {
  taskRouter,
};



