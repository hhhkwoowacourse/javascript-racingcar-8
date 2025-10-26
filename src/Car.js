import { Random } from "@woowacourse/mission-utils";

export default class Car {
  #name;
  #position;

  /**
   * 생성자 함수
   * @param {string} name
   * @param {number} postion
   */
  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  /**
   * 랜덤한 수가 4보다 클 경우에 전진하는 함수
   */
  proceedCar() {
    if (Random.pickNumberInRange(0, 9) >= 4) this.#position++;
  }

  getName = () => this.#name;
  getPosition = () => this.#position;
}
