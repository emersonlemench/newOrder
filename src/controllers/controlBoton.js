// const fs = require("fs");
// const path = require("path");


// const controlBoton = {
//   index:(req,res)=>{
//     res.render('index')
//   },
//   orden:(req,res)=>{
//     res.render('orden')
//   },

//   generate: (req, res) => {
//     const arrayJson = fs.readFileSync(
//       path.resolve(__dirname, "../data/base.json")
//     );

//     const jsonConvert = JSON.parse(arrayJson);
//     var anterior = jsonConvert.pop();
//     jsonConvert.push(anterior);
//     var ordenAntes = anterior.orden;

//     const newOrder = ordenAntes + 1;

//     jsonConvert.push({ orden: newOrder });

//     var newData = JSON.stringify(jsonConvert);

//     fs.writeFileSync(path.join(__dirname, "../data/base.json"), newData);
//     res.render('orden', { jsonConvert: anterior, newOrder });
//   },
// };


// module.exports = controlBoton;

const fs = require("fs");
const path = require("path");

const controlBoton = {
  index: (req, res) => {
    res.render("index");
  },
  orden: (req, res) => {
    res.render("orden");
  },

  generate: (req, res) => {
    const filePath = path.resolve(__dirname, "../data/base.json");

    readJSONFile(filePath)
      .then((jsonConvert) => {
        const anterior = jsonConvert.pop();
        jsonConvert.push(anterior);
        const ordenAntes = anterior.orden;
        const newOrder = ordenAntes + 1;

        jsonConvert.push({ orden: newOrder });

        return writeJSONFile(filePath, jsonConvert)
          .then(() => {
            res.render("orden", { jsonConvert: anterior, newOrder });
          })
          .catch((error) => {
            res.status(500).send("Error al escribir en el archivo JSON");
          });
      })
      .catch((error) => {
        res.status(500).send("Error al leer el archivo JSON");
      });
  },
};

function readJSONFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (error, data) => {
      if (error) {
        reject(error);
        return;
      }

      try {
        const jsonData = JSON.parse(data);
        resolve(jsonData);
      } catch (parseError) {
        reject(parseError);
      }
    });
  });
}

function writeJSONFile(filePath, jsonData) {
  return new Promise((resolve, reject) => {
    const newData = JSON.stringify(jsonData);

    fs.writeFile(filePath, newData, "utf8", (error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
}

module.exports = controlBoton;
