import { Vehicle } from '@pr-volt/vehicle/domain';
import { ParkingRepository } from '@pr-volt/parking/domain';
import { ParkingFinder } from '../find/ParkingFinder';

/**
 * Add a vehicle to parking base on disponibility and size
 */
export class AddVehicle {

  constructor(
    private finder: ParkingFinder,
    private readonly repository: ParkingRepository
  ) { }

  async run(parkingId: string, vehicle: Vehicle) {
    const parking = await this.finder.run(parkingId);

    if (!parking.hasAvailability()) {
      // TODO Throw parking is full
    }

    const { size } = vehicle;
    parking.addVehicle(size);

    await this.repository.save(parking);
  }
}
