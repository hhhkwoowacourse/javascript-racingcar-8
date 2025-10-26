import CarRaceController from "./CarRaceDomain/CarRaceController";

class App {
  async run() {
    let CarRace = new CarRaceController(new CarRaceModel(), new CarRaceView());
    CarRace.startRace();
    CarRace.proceedRace();
    CarRace.endRace();
  }
}

export default App;
