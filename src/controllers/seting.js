const fs = require("fs");
const path = require("path");

const set ={

index: (req,res)=>{
  res.render('set')
},
enviar: (req,res)=>{
  
  let nuevo = req.body.numero;

  let parsero = parseInt(nuevo)

  var newData = JSON.stringify([{orden: parsero-1}]);
  
  fs.writeFileSync(path.join(__dirname, "../data/base.json"), newData);
  res.redirect('/');
  console.log("El num seteado es " + parsero)

}
}

module.exports = set;