const router =  require('express').Router();


router.get('/', (req, res) => {console.log('tesmp');res.send('welcom to gpointer')});

module.exports = router;