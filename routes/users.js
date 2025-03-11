var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");

/**
 * @swagger
 * /users:
 *   get:
 *     summary: 모든 사용자 조회
 *     description: 모든 사용자의 목록을 반환합니다.
 *     responses:
 *       200:
 *         description: 성공적으로 사용자 목록을 가져옴
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   user_id:
 *                     type: integer
 *                     example: 1
 *                   user_name:
 *                     type: string
 *                     example: "홍길동"
 *                   user_email:
 *                     type: string
 *                     example: "hong@example.com"
 */
router.get("/", userController.getUsers);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: 새로운 사용자 생성
 *     description: 새로운 사용자를 생성합니다.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_name:
 *                 type: string
 *               user_email:
 *                 type: string
 *               user_birth:
 *                 type: string
 *                 example: "1990-05-20"
 *     responses:
 *       201:
 *         description: 사용자가 성공적으로 생성됨
 */
router.post("/", userController.createUser);

module.exports = router;
