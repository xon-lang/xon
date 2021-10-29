import { IdToken } from '../../../tree/id-token';
import { DefinitionMetadata } from '../definition-metadata';

export class GenericDefinition extends DefinitionMetadata {
  name: string;

  constructor(public idToken: IdToken) {
    super();
    this.name = idToken.text;
  }
}
