import { Parking } from '../models/Parking';

export interface ParkingRepository {
  find(id: string): Promise<Parking | null>;
  save(parking): Promise<void>;
}
