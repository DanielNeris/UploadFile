const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

routes.get('/', (req, res) => {
    return res.json({ hello: "World!" });
});

routes.post('/post', multer(multerConfig).single('file'), (req, res) => {
    
});

module.exports = routes;