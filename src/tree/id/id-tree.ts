import { IdContext } from '../../grammar/xon-parser';
import { DeclarationTree } from '../declaration/declaration-tree';
import { getDeclarationTrees } from '../declaration/declaration-tree-helper';
import { Tree } from '../tree';
import { IdToken } from '../util/id-token';
import { SourceReference } from '../util/source-reference';

export class IdTree implements Tree {
  sourceReference: SourceReference;
  name: IdToken;
  generics: DeclarationTree[] = [];

  constructor(ctx: IdContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.name = new IdToken(ctx._name);
    this.generics = getDeclarationTrees(ctx.declaration());
  }

  toString(): string {
    if (this.generics) {
      return `${this.name}<|${this.generics}|>`;
    }
    return this.name.toString();
  }
}
