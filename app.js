var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var favoritesRouter = require('./routes/favorites');
var workoutRecordRouter = require('./routes/workoutRecords');

// const { swaggerUi, specs } = require("./config/swagger");
const swaggerUi = require("swagger-ui-express"); // 입력
const swaggerFile = require("./config/swagger-output.json"); // 입력

var env = require("dotenv").config();
const sequelize = require('./config/database');

var app = express();



const PORT = process.env.PORT || 3000; // .env 파일에서 PORT를 가져오고, 없으면 기본값 3000 사용

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


//데이터베이스 동기화
sequelize
  .sync()
  .then(() => {
    console.log("데이터베이스 동기화 완료");
  })
  .catch((err) => {
    console.error("데이터베이스 동기화 오류:", err);
  });

//로그 , 미들웨어 설정
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Swagger UI 설정
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile)); // 입력 (http://localhost:3000/swagger로 Swagger 페이지 접속 가능)

//라우터 설정
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/workout', workoutRecordRouter);
app.use('/favorite', favoritesRouter);

module.exports = app;
