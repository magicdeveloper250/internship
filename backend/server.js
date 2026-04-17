import express from "express";
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

app.post("/modules", async (req, res) => {
  const data = req.body;
  console.log(data);
  const moduleName = data.moduleName;
  const moduleCode = data.moduleCode;
  const moduleDescription = data.moduleDescription;
  const moduleTrainer = data.moduleTrainer;
  const createAt =  new Date();
  const result = await dbPool.query(
    `INSERT INTO module (moduleName,moduleCode, moduleDescription,moduleTrainer,createAt) 
     VALUES(?,?,?,?,?)`,
    [
    moduleName, 
    moduleCode,
    moduleDescription,
    moduleTrainer,
    createAt
  ],
  );

  return res.json({
    success: true,
    message: "New module Inserted successfully",
  });
});

app.get("/modules", async (req, res) => {
  const [result] = await dbPool.query("SELECT * FROM module");
  return res.json({
    success: false,
    data: result,
  });
});
app.put("/modules", async (req, res) => {
  //  TODO extract module data from request and update specified module
});
app.delete("/modules", async (req, res) => {
  // TODO delete module from database
});

app.listen("5000", () => {
  console.log("✅Server started successfully at http://localhost:5000");
});
