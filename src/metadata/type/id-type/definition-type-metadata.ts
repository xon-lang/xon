import { IdToken } from '../../../tree/id-token';
import { TypeMetadata } from '../type-metadata';

export abstract class DefinitionTypeMetadata extends TypeMetadata {
  abstract id: IdToken;
}
