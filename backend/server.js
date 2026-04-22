import express, { json } from "express";
import dbPool from "./db.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

app.get("/", async (req, res) => {
  return res.json({
    success: true,
    message: "Express app API started successfully!",
  });
});

// route for creating new module
app.post("/modules", async (req, res) => {
  const data = req.body;
  const moduleName = data.moduleName; // .: member access operator
  const moduleCode = data.moduleCode;
  const moduleDescription = data.moduleDescription;
  const moduleTrainer = data.moduleTrainer;
  const createAt = new Date();
  const result = await dbPool.query(
    `INSERT INTO module (moduleName,moduleCode, moduleDescription,moduleTrainer,createAt) 
     VALUES(?,?,?,?,?)`,
    [moduleName, moduleCode, moduleDescription, moduleTrainer, createAt],
  );
  return res.json({
    success: true,
    message: "New module Inserted successfully",
  });
});

// route for getting all modules
app.get("/modules", async (req, res) => {
  const [result] = await dbPool.query("SELECT * FROM module");
  return res.json({
    success: false,
    data: result,
  });
});

// route for getting single module

app.get("/modules/:id", async (req, res) => {
  const moduleId = req.params.id;
  const result = await dbPool.query("SELECT * FROM module WHERE id=?", [
    moduleId,
  ]);
  return res.json({
    success: true,
    data: result[0],
  });
});

// Route for updating the single module Data
app.put("/modules/:moduleId", async (req, res) => {
  const moduleId = req.params.moduleId;
  const data = req.body;
  const moduleName = data["moduleName"]; //[]: computed member access operator
  const moduleCode = data["moduleCode"];
  const moduleDescription = data["moduleDescription"];
  const moduleTrainer = data["moduleTrainer"];
  const result = await dbPool.query(
    "UPDATE module SET moduleName=?, moduleCode=?, moduleDescription=?, moduleTrainer=?;",
    [moduleName, moduleCode, moduleDescription, moduleTrainer],
  );
  return res.json({
    success: true,
    message: "Module updated successfully! ✅",
  }).status(201);
});

// route for deleting single module from database.
app.delete("/modules/:id", async (req, res) => {
  const moduleId = req.params.id;
  const result = await dbPool.query("DELETE FROM module WHERE id=?", [
    moduleId,
  ]);
  return res.json({
    success: true,
    message: "Module deleted successfully",
  }, ).status(204);
});

app.listen("5000", () => {
  console.log("✅Server started successfully at http://localhost:5000");
});
