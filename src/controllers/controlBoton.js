const fs = require("fs");
const path = require("path");


const controlBoton = {
  index:(req,res)=>{
    res.render('index')
  },
  orden:(req,res)=>{
    res.render('orden')
  },

  generate: (req, res) => {
    const arrayJson = fs.readFileSync(
      path.resolve(__dirname, "../data/base.json")
    );

    
    const jsonConvert = JSON.parse(arrayJson);
    var anterior = jsonConvert.pop();
    jsonConvert.push(anterior);
    var ordenAntes = anterior.orden;

    const newOrder = ordenAntes + 1;

    jsonConvert.push({ orden: newOrder });

    var newData = JSON.stringify(jsonConvert);

    fs.writeFileSync(path.join(__dirname, "../data/base.json"), newData);
    res.render('orden', { jsonConvert: anterior, newOrder });
  },
};


module.exports = controlBoton;