const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Workout API",
    description: "Workout Tracking API with Swagger 자동 생성",
  },
  host: "localhost:3000",
  schemes: ["http"],
  definitions: {
    User: {
      user_id: 1,
      user_name: "홍길동",
      user_email: "hong@example.com",
      user_birth: "1990-05-20",
      user_gender: "MAN",
      membership_yn: true,
    },
    ExerciseType: {
      exercise_id: 1,
      exerciseEngName: "Running",
      exerciseKorName: "런닝",
      exercise_type: "CARDIO",
    },
    WorkoutRecord: {
      record_id: 1,
      user_id: 1,
      exercise_id: 2,
      avg_heart_rate: 120,
      high_heart_rate: 150,
      record_date: "2024-03-10T12:00:00Z",
      record_start: "2024-03-10T11:30:00Z",
      record_end: "2024-03-10T12:00:00Z",
      intensity: "High",
      memo: "런닝 30분 완료",
    },
    Favorite: {
      favorite_id: 1,
      user_id: 1,
      exercise_id: 1,
    },
  },
};

const outputFile = "./config/swagger-output.json"; // 생성될 문서 파일
const endpointsFiles = [
  "./app.js", // app.js에서 모든 라우트 경로를 불러옴
  "./routes/users.js", // Swagger 주석이 포함된 경로
  "./routes/workoutRecords.js",
]; // API 경로가 포함된 파일 (app.js에서 모든 라우트를 불러옴)


swaggerAutogen(outputFile, endpointsFiles).then(() => {
  console.log("✅ Swagger 문서가 자동 생성되었습니다.");
});
