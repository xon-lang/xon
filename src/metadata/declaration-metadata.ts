import { IdToken } from '../tree/id-token';
import { TypeMetadata } from './type/type-metadata';

export class DeclarationMetadata {
  constructor(public id: IdToken, public type: TypeMetadata) {}
}
