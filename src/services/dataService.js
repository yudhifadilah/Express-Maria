// services/dataService.js

// Simulated database storage (temporary)
let database = [];

// Function to generate unique IDs
function generateId() {
    return Math.floor(Math.random() * 1000); // This is just a simple example, in real-world scenarios, you would use a more robust ID generation mechanism
}

// Create - Add New Data
exports.addData = (newData) => {
    const id = generateId();
    const dataWithId = { ...newData, id };
    database.push(dataWithId);
    return Promise.resolve(dataWithId);
};

// Read - Get All Data
exports.getAllData = () => {
    return Promise.resolve(database);
};

// Update - Update Existing Data
exports.updateData = (id, updatedData) => {
    const index = database.findIndex(item => item.id === parseInt(id));
    if (index !== -1) {
        database[index] = { ...database[index], ...updatedData };
        return Promise.resolve(database[index]);
    } else {
        return Promise.reject(new Error("Data not found"));
    }
};

// Delete - Delete Existing Data
exports.deleteData = (id) => {
    const index = database.findIndex(item => item.id === parseInt(id));
    if (index !== -1) {
        database.splice(index, 1);
        return Promise.resolve();
    } else {
        return Promise.reject(new Error("Data not found"));
    }
};
