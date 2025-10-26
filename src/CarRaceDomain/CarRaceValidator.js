export default class CarRaceValidator {
  constructor() {}
  // Validator for Car List
  validateCarList(carListInput) {
    validateEndsWithComma(carListInput);
    validateDuplicateName(carListInput);
  }

  // Validator for Round Number
  validateRoundNumber(roundNumberInput) {
    validateNaN(roundNumberInput);
    validatePositiveNumber(roundNumberInput);
  }

  // Validator for Car Name
  validateCarName(carName) {
    validateCarNameLength(carName);
  }
}

function validateEndsWithComma(input) {
  if (!input.endsWith(","))
    throw new Error("[ERROR] 쉼표로 마무리될 수 없습니다.");
}

function validateDuplicateName(input) {
  const carNames = input.split(",");
  const uniqueCarNames = new Set(carNames);

  if (carNames.length !== uniqueCarNames.size)
    throw new Error("[ERROR] 중복된 자동차 이름이 있습니다.");
}

function validateNaN(input) {
  if (Number(input) === NaN)
    throw new Error("[ERROR] 올바른 숫자를 입력해주세요.");
}

function validatePositiveNumber(input) {
  if (Number(input) <= 0) throw new Error("[ERROR] 양수를 입력해주세요.");
}

function validateCarNameLength(carName) {
  if (carName.length > 5)
    throw new Error("[ERROR] 자동차 이름을 5자 이하로 입력해주세요.");
}
