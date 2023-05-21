const express = require('express')
const router = express.Router()
const controlBoton = require('../controllers/controlBoton')

router.get('/', controlBoton.index);
router.get('/orden', controlBoton.orden);
router.post('/orden', controlBoton.generate);
router.post('/',controlBoton.generate);


module.exports = router;