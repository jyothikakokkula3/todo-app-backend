const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for frontend integration
app.use(bodyParser.json()); // Parse JSON request body

// In-memory storage for tasks
const tasks = [];

// Root Route
app.get("/", (req, res) => {
    res.send("Welcome to the To-Do App API!");
});

// Get all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// Add a new task
app.post("/tasks", (req, res) => {
    const { task } = req.body;
    if (!task) {
        return res.status(400).json({ message: "Task is required" });
    }
    tasks.push(task);
    res.json({ message: "Task added successfully", tasks });
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
