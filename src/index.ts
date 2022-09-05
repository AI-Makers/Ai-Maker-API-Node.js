import express from 'express';
require('dotenv').config();
import 'module-alias/register';
const routes = require('@router/index');
const cors = require('cors');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();

app.use(cors())
app.use(express.json());

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Ai Maker API",
      termsOfService: "https://www.google.com/policies/terms/",
      description: "Ai Maker API Information",
      contact: {
        name: "Thiago Kasper de Souza",
        email: "thiagokasper101@gmail.com",
      },
      license: {
        "name": "MIT License",
        "url": "https://www.mit.edu/~amini/LICENSE.md"
      }
    },
    basePath: "/api/v1",
  },
  apis: ['./src/index.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/**
 * @swagger
 * /api/v1/:
 *  get:
 *    description: teste dentro do router
 *    responses: 
 *      200:
 *        description>:
 */


app.get('/', (req: any, res: any) => {
  res.redirect('/api/v1');
})
app.use('/api/v1', routes);

try {
  app.listen(process.env.NODE_PORT, () => {
    console.log('The application is listening on port 3000!');
    console.log('serving on: http://localhost:3000');
  });
} catch (err) {
  console.error(err);
}
