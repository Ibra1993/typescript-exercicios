import { Car } from "../vehicle/car";
import { Vehicle } from "../vehicle/Vehicle";
import { VehicleFactory } from "./vehicle-factory";

export class BicycleFactory extends VehicleFactory {

    getVehicle(vehicleName: string): Vehicle {
        return new Car(vehicleName)
    }
}