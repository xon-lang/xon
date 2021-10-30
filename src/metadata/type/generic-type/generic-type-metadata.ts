import { IdToken } from '../../../tree/id-token';
import { SourceReference } from '../../../tree/source-reference';
import { TypeMetadata } from '../type-metadata';

export class GenericTypeMetadata extends TypeMetadata {
  sourceReference: SourceReference;
  name: string;

  constructor(idToken: IdToken) {
    super();

    this.sourceReference = idToken.sourceReference;
    this.name = idToken.text;
  }
}
