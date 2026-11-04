
const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to read JSON request bodies
app.use(express.json());

// GET: Test whether the server is running
app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

// GET: Retrieve all users
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Rahul" },
    { id: 2, name: "Aman" }
  ]);
});

// POST: Create a user
app.post("/api/users", (req, res) => {
  const user = req.body;

  res.status(201).json({
    message: "User created successfully",
    user: user
  });
});

// PUT: Update a user
app.put("/api/users/:id", (req, res) => {
  res.json({
    message: `User ${req.params.id} updated`,
    updatedData: req.body
  });
});

// DELETE: Delete a user
app.delete("/api/users/:id", (req, res) => {
  res.json({
    message: `User ${req.params.id} deleted`
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
