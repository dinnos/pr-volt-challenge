import { VehicleSize } from './VehicleSize';

export abstract class Vehicle {

  protected constructor(
    readonly id: string,
    readonly size: VehicleSize
  ) { }
}
