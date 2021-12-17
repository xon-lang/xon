import { IdTypeMetadata } from '../id/id-type-metadata';

export class NoneTypeMetadata extends IdTypeMetadata {
  constructor() {
    super('None', []);
  }
}
