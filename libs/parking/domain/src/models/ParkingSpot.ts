import { VehicleSize } from '@pr-volt/vehicle/domain';

export class ParkingSpot {
  private _capacity: number;

  constructor(capacity: number) {
    this._capacity = capacity;
  }

  useSpot(size: VehicleSize): void {
    this._capacity -= size;
  }
}
