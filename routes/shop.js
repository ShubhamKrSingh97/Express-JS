const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send(`<h1>Welcome to Express Js</h1>`);
});

module.exports = router;