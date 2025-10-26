import CarRaceModel from "./CarRaceModel.js";
import CarRaceView from "./CarRaceView.js";

export default class CarRaceController {
  /**
   *
   * @param {CarRaceModel} model
   * @param {CarRaceView} view
   */
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  startRace() {
    this.view.scanCarList();
    this.view.scanRoundNumber();
  }

  proceedRound() {
    for (const car of this.model.getCarList()) {
      car.proceedCar();
    }
    this.model.setCurrentRaceRound(this.model.getCurrentRaceRound() + 1);
  }

  proceedRace() {
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
