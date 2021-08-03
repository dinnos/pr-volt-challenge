import { Parking, ParkingRepository } from '@pr-volt/parking/domain';

export class ParkingFinder {
  constructor(private readonly repository: ParkingRepository) { }

  async run(id: string): Promise<Parking> {
    const parking = await this.repository.find(id);

    if (parking === null) {
      // TODO Throw parking not found
    }

    return parking;
  }
}
