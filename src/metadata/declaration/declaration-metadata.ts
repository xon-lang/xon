import { IdTypeMetadata } from '../type/id/id-type-metadata';

export abstract class DeclarationMetadata {
  abstract name: string;
  abstract ancestor(): IdTypeMetadata;
}
