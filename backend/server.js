import express from "express";
import dbPool from "./db.js";

const app = express();

app.get("/", async (req, res) => {
  return res.json({
    success: true,
    message: "Express app API started successfully!",
  });
});

app.post("/modules", async (req, res) => {
  // TODO extract module data from request and insert them into database.
});
app.get("/modules", async (req, res) => {
  const result = await dbPool.query("SELECT * FROM module");
  return res.json({
    success: false,
    data: result,
  });
});
app.put("/modules", async(req, res)=>{
    //  TODO extract module data from request and update specified module
})
app.delete("/modules", async(req, res)=>{
    // TODO delete module from database
})


app.listen("5000", () => {
  console.log("✅Server started successfully at http://localhost:5000");
});
