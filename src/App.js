import CarRaceController from "./CarRaceDomain/CarRaceController.js";

class App {
  async run() {
    let CarRace = new CarRaceController();
    await CarRace.startRace();
    CarRace.proceedRace();
    CarRace.endRace();
  }
}

export default App;
