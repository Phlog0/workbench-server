const express = require("express");
const cors = require("cors");
const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());

const fs = require("fs");


const saveJSON = (data) => {
  const fileName = `${Date.now()}.json`
  fs.writeFile(fileName, JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log("Асинхронная запись файла завершена. Содержимое файла:");
    let data = fs.readFileSync(fileName, "utf8");
    console.log(data);  // выводим считанные данные
  });
};



app.post("/savedata", (req, res) => {
  console.log(req.body);
  saveJSON(req.body)
  res.json(req.body);
});

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log("working");
    });
  } catch (error) {
    console.log(error);
  }
};

start();


