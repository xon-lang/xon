import { ParserRuleContext } from 'antlr4ts';
import { SourceReference } from './util/source-reference';

export abstract class Node {
  abstract ctx: ParserRuleContext;
  abstract toString(): string;

  _sourceReference: SourceReference;
  get sourceReference(): SourceReference {
    if (this._sourceReference) return this._sourceReference;
    return (this._sourceReference = SourceReference.fromContext(this.ctx));
  }
}
