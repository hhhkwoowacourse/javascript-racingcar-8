export default class CarRaceModel {
  #carList;
  #raceRound;
  #currentRaceRound;

  constructor() {
    this.#carList = [];
  }

  getCarList = () => this.#carList;
  setCarList = (carList) => (this.#carList = carList);

  getRaceRound = () => this.#raceRound;
  setRaceRound = (raceRound) => (this.#raceRound = raceRound);

  getCurrentRaceRound = () => this.#currentRaceRound;
}
