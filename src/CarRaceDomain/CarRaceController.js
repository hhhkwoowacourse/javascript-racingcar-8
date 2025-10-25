import CarRaceModel from "./CarRaceModel.js";
import CarRaceView from "./CarRaceView.js";

export default class CarRaceController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
}