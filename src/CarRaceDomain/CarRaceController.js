import CarRaceModel from "./CarRaceModel.js";
import CarRaceView from "./CarRaceView.js";
import CarRaceValidator from "./CarRaceValidator.js";

export default class CarRaceController {
  constructor() {
    this.model = new CarRaceModel();
    this.view = new CarRaceView();
    this.validator = new CarRaceValidator();
  }

  startRace = async () => {
    const carNameList = await this.view.scanCarList();
    this.model.setCarList(carNameList);

    const roundNumber = await this.view.scanRoundNumber();
    this.model.setRaceRound(roundNumber);

    this.model.setCurrentRaceRound(0);
  };

  proceedRound() {
    for (const car of this.model.getCarList()) car.proceedCar();
    this.model.setCurrentRaceRound(this.model.getCurrentRaceRound() + 1);
  }

  proceedRace() {
    this.view.printResultTitle();
    while (this.model.getCurrentRaceRound() < this.model.getRaceRound()) {
      this.proceedRound();
      this.view.printRoundResult(this.model.getCarList());
    }
  }

  endRace() {
    const carList = this.model.getCarList();
    let maxPosition = 0;
    for (const car of carList) {
      if (maxPosition < car.getPosition()) {
        maxPosition = car.getPosition();
      }
    }
    const winners = [];
    for (const car of carList) {
      if (maxPosition === car.getPosition()) {
        winners.push(car);
      }
    }
    this.view.printRaceResult(winners);
  }
}
