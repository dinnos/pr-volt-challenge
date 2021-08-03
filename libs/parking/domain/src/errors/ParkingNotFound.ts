export class ParkingNotFound extends Error {

  constructor(id: string) {
    super(`parking with id: ${ id } does not exists`);
  }
}
