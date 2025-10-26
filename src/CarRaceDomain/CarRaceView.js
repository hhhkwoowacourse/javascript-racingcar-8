import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

export default class CarRaceView {
  constructor() {}

  scanCarList = () => {
    const rawCarList = Console.readLineAsync();
    validateCarList(rawCarList);
    return rawCarList.split(",");
  };
  scanRoundNumber = () => {
    const rawRoundNumber = Console.readLineAsync();
    validateRoundNumber(rawRoundNumber);
    return rawRoundNumber;
  };

  printRoundResult(carList) {
    for (const car of carList) {
      Console.print(`${car.getName()} : ${"-".repeat(car.getPosition())}`);
    }
    Console.print();
  }

  /**
   * 우승 자동차 수의 관계없이 이름을 컴마로 구분하여 출력합니다.
   * @param {Car[]} winnerCarList
   */
  printRaceResult(winnerCarList) {
    let winnerCarName = "";

    for (let i = 0; i < winnerCarList.length; i++) {
      winnerCarName += winnerCarList[i].getName();

      // 마지막 우승 자동차가 아닐 경우에만 컴마(,) 추가
      if (i !== winnerCarList.length - 1) winnerCarName += ",";
    }
    Console.print(winnerCarName);
  }

  // Validator
  validateCarList(carListInput) {
    try {
      const carList = carListInput.split(",");
      
    } catch {}
  }

  validateRoundNumber(roundNumberInput) {
    try {
    } catch {}
  }
}
