import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

export default class CarRaceView {
  constructor() {}

  scanCarList() {
    const rawCarList = Console.readLineAsync();
    return rawCarList;
  }

  scanRoundNumber() {
    const rawRoundNumber = Console.readLineAsync();
    return rawRoundNumber;
  }

  printRoundResult(carList) {
    for (const car of carList) {
      Console.print(`${car.getName()} : ${"-".repeat(car.getPosition())}`);
    }
    Console.print();
  }

  printRaceResult(winnerCarList) {
    let winnerCarName = "";
    for (let i = 0; i < winnerCarList.length; i++) {
      winnerCarName += winnerCarList[i].getName();
      if (i !== winnerCarList.length - 1) winnerCarName += ",";
    }
    Console.print(winnerCarName);
  }
}
