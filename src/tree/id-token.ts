import { ParserRuleContext, Token } from 'antlr4ts';
import { IdTokenMetadata } from '../metadata/id-token-metadata';
import { SourceReference } from './source-reference';

export class IdToken {
  text: string;
  sourceReference: SourceReference;
  metadata: IdTokenMetadata;

  constructor(token?: Token) {
    if (!token) return;

    this.text = token.text;
    this.sourceReference = SourceReference.fromToken(token);
  }

  toString(): string {
    return this.text;
  }

  static fromContext(context: ParserRuleContext): IdToken {
    const id = new IdToken();
    id.text = context.text;
    id.sourceReference = SourceReference.fromContext(context);
    return id;
  }

  static fromText(text: string): IdToken {
    const id = new IdToken();
    id.text = text;
    return id;
  }
}
