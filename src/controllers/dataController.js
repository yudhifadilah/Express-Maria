const dataService = require('../services/dataService');

// Read - Get All Data
exports.getAllData = (req, res) => {
    dataService.getAllData()
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ error: err.message }));
};

// Create - Add New Data
exports.addData = (req, res) => {
    const newData = req.body; // Assuming request body contains the new data
    dataService.addData(newData)
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ error: err.message }));
};

// Update - Update Existing Data
exports.updateData = (req, res) => {
    const id = req.params.id; // Assuming the id is passed as a URL parameter
    const updatedData = req.body; // Assuming request body contains the updated data
    dataService.updateData(id, updatedData)
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ error: err.message }));
};

// Delete - Delete Existing Data
exports.deleteData = (req, res) => {
    const id = req.params.id; // Assuming the id is passed as a URL parameter
    dataService.deleteData(id)
        .then(() => res.json({ message: "Data deleted successfully" }))
        .catch(err => res.status(500).json({ error: err.message }));
};
