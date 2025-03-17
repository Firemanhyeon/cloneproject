const workOutRecordService = require("../services/workoutRecordService");

exports.getRecords = async (req, res) => {
    try {
        const records = await workOutRecordService.getAllRecords();
        res.status(200).json(records);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.createRecord = async (req, res) => {
    try {
        const  user  = req.body;
        const result = await workOutRecordService.createRecord(user);
        res.status(200).json('success');       
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.updateRecord = async (req, res) => {
  try {
    const request = req.body;
    const result = await workOutRecordService.updateRecord(request);
    res.status(200).json('success');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


exports.deleteRecord = async (req, res) => {
    try {
      res.status(200).json("success");
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

exports.detailRecord = async (req, res) => {
    try {
      res.status(200).json("success");
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

exports.weekRecord = async (req, res) => {
    try {
      res.status(200).json("success");
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

exports.intensity = async (req, res) => {
    try {
      res.status(200).json("success");
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

exports.firstRecord = async (req, res) => {
    try {
      res.status(200).json("success");
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

exports.count = async (req, res) => {
    try {
      res.status(200).json("success");
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}