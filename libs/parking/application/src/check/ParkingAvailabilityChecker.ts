import { ParkingFinder } from '../find/ParkingFinder';

/**
 * Check if the parking is full or has availability
 */
export class ParkingAvailabilityChecker {

  constructor(private readonly finder: ParkingFinder) { }

  async run(id: string): Promise<boolean> {
    const parking = await this.finder.run(id);

    return parking.hasAvailability();
  }
}
