import pkg from "express";
import dbPool from "./db.js";
import cors from "cors";

const app = pkg();
const { json } = pkg;

app.use(
  cors({
    origin: "https://internship1-v8ke.onrender.com",
  }),
);

app.use(json());

app.get("/", async (req, res) => {
  return res.json({
    success: true,
    message: "Express app API started successfully!",
  });
});

// route for creating new module
app.post("/modules", async (req, res) => {
  const data = req.body;
  const moduleName = data.moduleName;
  const moduleCode = data.moduleCode;
  const moduleDescription = data.moduleDescription;
  const moduleTrainer = data.moduleTrainer;
  const createAt = new Date();
  await dbPool.query(
    `INSERT INTO module (moduleName, moduleCode, moduleDescription, moduleTrainer, createAt) 
     VALUES (?, ?, ?, ?, ?)`,
    [moduleName, moduleCode, moduleDescription, moduleTrainer, createAt],
  );
  return res.status(201).json({
    success: true,
    message: "New module inserted successfully",
  });
});

// route for getting all modules
app.get("/modules", async (req, res) => {
  const [result] = await dbPool.query("SELECT * FROM module");
  return res.json({
    success: true,        // ✅ was `false` by mistake
    data: result,
  });
});

// route for getting single module
app.get("/modules/:id", async (req, res) => {
  const moduleId = req.params.id;
  const [result] = await dbPool.query("SELECT * FROM module WHERE id = ?", [
    moduleId,
  ]);
  return res.json({
    success: true,
    data: result[0],
  });
});

// Route for updating a single module
app.put("/modules/:moduleId", async (req, res) => {
  const moduleId = req.params.moduleId;
  const data = req.body;
  const moduleName = data["moduleName"];
  const moduleCode = data["moduleCode"];
  const moduleDescription = data["moduleDescription"];
  const moduleTrainer = data["moduleTrainer"];
  await dbPool.query(
    "UPDATE module SET moduleName=?, moduleCode=?, moduleDescription=?, moduleTrainer=? WHERE id=?",  // ✅ added WHERE clause
    [moduleName, moduleCode, moduleDescription, moduleTrainer, moduleId],
  );
  return res.status(201).json({
    success: true,
    message: "Module updated successfully! ✅",
  });
});

// route for deleting a single module
app.delete("/modules/:id", async (req, res) => {
  const moduleId = req.params.id;
  await dbPool.query("DELETE FROM module WHERE id = ?", [moduleId]);
  return res.status(204).json({        // ✅ fixed chaining order
    success: true,
    message: "Module deleted successfully",
  });
});

app.listen(5000, () => {
  console.log("✅ Server started successfully at http://localhost:5000");
});