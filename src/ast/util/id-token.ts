import { Token } from 'antlr4ts';
import { DeclarationMetadata } from '../../metadata/declaration/declaration-metadata';
import { SourceReference } from './source-reference';

export class IdToken {
  sourceReference: SourceReference;
  text: string;
  metadata: DeclarationMetadata;

  constructor(token?: Token) {
    this.sourceReference = SourceReference.fromToken(token);
    this.text = token.text;
  }

  toString(): string {
    return this.text;
  }
}
