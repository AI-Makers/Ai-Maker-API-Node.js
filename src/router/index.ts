const express = require('express');
const router = express.Router();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


router.get('/', (req: any, res: any) => {
    res.send('Well done!');
})

module.exports = router;