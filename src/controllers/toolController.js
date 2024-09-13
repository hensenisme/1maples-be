const Tool = require('../models/toolModels');

exports.getTools = async (req, res) => {
  try {
    const tools = await Tool.find();
    res.json(tools);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTool = async (req, res) => {
  const tool = new Tool(req.body);
  try {
    const newTool = await tool.save();
    res.status(201).json(newTool);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateTool = async (req, res) => {
  try {
    const updatedTool = await Tool.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTool);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteTool = async (req, res) => {
  try {
    await Tool.findByIdAndDelete(req.params.id);
    res.json({ message: 'Tool deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
