const express = require("express");
const cors = require("cors");

const app = express();
const port = 3002;

/* https://expressjs.com/en/resources/middleware/cors.html */
var allowlist = [];

var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1)
    corsOptions = {
      origin: true,
    };
  // reflect (enable) the requested origin in the CORS response
  else corsOptions = { origin: false }; // disable CORS for this request

  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "La API está funcionando",
  });
});

app.get("/hw", cors(corsOptionsDelegate), async (req, res) => {
  try {
    res.status(200).json({
      res: "hola mundo",
    });
    console.log("hola mundo");
  } catch (error) {
    console.error(error);
    res.status(500);
    res.json({ error: error.message });
  }
});

const startServer = async () => {
  app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
  });
};

startServer();
