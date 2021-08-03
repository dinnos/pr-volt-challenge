export class ParkingIsFull extends Error {

  constructor(id: string) {
    super(`parking with id: ${ id } does not have spots available`);
  }
}
