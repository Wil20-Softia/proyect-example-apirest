const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    //res.send('Hello World!'); //ENVIA UN STRING AL CLIENTE
    res.json({"Title" : 'Rest Api with NodeJs'}); //ENVIA UN JSON AL CLIENTE
});

module.exports = router;