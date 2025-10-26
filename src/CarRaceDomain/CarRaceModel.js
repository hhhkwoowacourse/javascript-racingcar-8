import Car from "./Car";

export default class CarRaceModel {
  #carList;
  #raceRound;
  #currentRaceRound;

  constructor() {
    this.#carList = [];
  }

  /**
   * 자동차 인스턴스 리스트를 반환합니다.
   * @returns {Car[]}
   */
  getCarList = () => this.#carList;

  /**
   * 문자열 리스트로 입력받은 자동차 리스트를 각각의 자동차 인스턴스로 생성하여 리스트로 저장합니다.
   * @param {string[]} carNameList
   */
  setCarList = (carNameList) => {
    let carList = [];
    for (const carName of carNameList) carList.push(new Car(carName));
    this.#carList = carList;
  };

  getRaceRound = () => this.#raceRound;
  setRaceRound = (raceRound) => (this.#raceRound = raceRound);

  getCurrentRaceRound = () => this.#currentRaceRound;
  setCurrentRaceRound = (currentRaceRound) =>
    (this.#currentRaceRound = currentRaceRound);
}
