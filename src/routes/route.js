const express = require('express')
const router = express.Router()
const controlBoton = require('../controllers/controlBoton')
const seting = require('../controllers/seting')

router.get('/', controlBoton.index);
router.get('/orden', controlBoton.index);
router.post('/orden', controlBoton.generate);
router.get('/set',seting.index)
router.post('/set',seting.enviar)


module.exports = router;