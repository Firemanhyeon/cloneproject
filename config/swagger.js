const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Workout API",
      version: "1.0.0",
      description: "Workout Tracking API with Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000", 
        description: "Local server",
      },
    ],
  },
  apis: [path.join(__dirname, "../routes/*.js")], 
};
const outputFile = './config/swagger-output.json'; // 생성될 Swagger 설정 파일의 경로 및 파일명
const endpointsFiles = ['../app.js']; // 기본 라우터 즉, app.use("/", router)가 정의된 파일의 경로
swaggerAutogen(outputFile, endpointsFiles, options); // Swagger 문서를 outputFile 경로에 생성
const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
