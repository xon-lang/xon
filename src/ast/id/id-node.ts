import { IdContext } from '../../grammar/xon-parser';
import { DeclarationNode } from '../declaration/declaration-node';
import { getDeclarationNodes } from '../declaration/declaration-node-helper';
import { Node } from '../node';
import { IdToken } from '../util/id-token';
import { SourceReference } from '../util/source-reference';

export class IdNode implements Node {
  sourceReference: SourceReference;
  name: IdToken;
  generics: DeclarationNode[] = [];

  constructor(ctx: IdContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.name = new IdToken(ctx._name);
    this.generics = getDeclarationNodes(ctx.declaration());
  }

  toString(): string {
    if (this.generics) {
      return `${this.name}<|${this.generics}|>`;
    }
    return this.name.toString();
  }
}
