import { VehicleSize } from '@pr-volt/vehicle/domain';

export class Parking {
  constructor(
    readonly id: string,
    readonly spots: Map<VehicleSize, number>
  ) { }

  hasAvailability(): boolean {
    let available = 0;

    for (const [,capacity] of this.spots.entries()) {
      available += capacity;
    }

    return available !== 0;
  }

  addVehicle(size: VehicleSize): void {
    if (this.spots.has(size) && this.spots.get(size) >= 1) {
      this.spots.set(size, this.spots.get(size) - 1);
      return;
    }

    for (const [key, capacity] of this.spots.entries()) {
      const factor = key + 1;
      const reduce = size / factor;

      if (capacity >= reduce) {
        this.spots.set(key, capacity - reduce);
        break;
      }
    }
  }
}
