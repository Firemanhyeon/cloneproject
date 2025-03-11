const { IsInt, IsString, IsDate } = require('class-validator');

class RecordCreateRequestDto {
  userId;
  exerciseType;
  exerciseKorName;
  exerciseEngName;
  recordDate;
  recordStart;
  duration;
  avgHeartRate;
  highHeartRate;
  memo;
  constructor(
    userId,
    exerciseType,
    exerciseKorName,
    exerciseEngName,
    recordDate,
    recordStart,
    duration,
    avgHeartRate,
    highHeartRate,
    memo
  ) {
    this.userId = userId;
    this.exerciseType = exerciseType;
    this.exerciseKorName = exerciseKorName;
    this.exerciseEngName = exerciseEngName;
    this.recordDate = recordDate;
    this.recordStart = recordStart;
    this.duration = duration;
    this.avgHeartRate = avgHeartRate;
    this.highHeartRate = highHeartRate;
    this.memo = memo;
  }

  // 유효성 검사 메서드
  static validate(dto) {
    return validateSync(dto);
  }
}

module.exports = RecordCreateRequestDto;
