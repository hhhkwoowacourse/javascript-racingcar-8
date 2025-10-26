import { Console } from "@woowacourse/mission-utils";

import Car from "./Car.js";
import CarRaceValidator from "./CarRaceValidator.js";

export default class CarRaceView {
  constructor() {
    this.validator = new CarRaceValidator();
  }

  scanCarList = async () => {
    const rawCarList = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    this.validator.validateCarList(rawCarList);
    return rawCarList.split(",");
  };

  scanRoundNumber = async () => {
    const rawRoundNumber = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    this.validator.validateRoundNumber(rawRoundNumber);
    return Number(rawRoundNumber);
  };

  printResultTitle() {
    Console.print("실행 결과");
  }

  /**
   * 해당 라운드의 자동차의 이름과 함께 위치를 출력합니다.
   * @param {Car[]} carList
   */
  printRoundResult(carList) {
    for (const car of carList) {
      Console.print(`${car.getName()} : ${"-".repeat(car.getPosition())}`);
    }
    Console.print("");
  }

  /**
   * 우승 자동차 수의 관계없이 이름을 컴마로 구분하여 출력합니다.
   * @param {Car[]} winnerCarList
   */
  printRaceResult(winnerCarList) {
    let winnerCarName = "";
    for (let i = 0; i < winnerCarList.length; i++) {
      winnerCarName += winnerCarList[i].getName();
      if (i !== winnerCarList.length - 1) winnerCarName += ", ";
    }
    Console.print(`최종 우승자 : ${winnerCarName}`);
  }
}
