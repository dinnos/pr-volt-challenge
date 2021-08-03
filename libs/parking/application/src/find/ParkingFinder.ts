import { Parking, ParkingNotFound, ParkingRepository } from '@pr-volt/parking/domain';

export class ParkingFinder {
  constructor(private readonly repository: ParkingRepository) { }

  async run(id: string): Promise<Parking> {
    const parking = await this.repository.find(id);

    if (parking === null) {
      throw new ParkingNotFound(id);
    }

    return parking;
  }
}
