import { IdToken } from '../tree/id-token';
import { DefinitionMetadata } from './definition/definition-metadata';

export interface DeclarationMetadata {
  id: IdToken;
  definition: DefinitionMetadata;
}
