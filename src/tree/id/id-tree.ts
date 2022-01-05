import { IdContext } from '../../grammar/xon-parser';
import { IdToken } from '../../util/id-token';
import { SourceReference } from '../../util/source-reference';
import { DeclarationTree } from '../declaration/declaration-tree';
import { getDeclarationTrees } from '../declaration/declaration-tree-helper';
import { Tree } from '../tree';

export class IdTree implements Tree {
  sourceReference: SourceReference;
  name: IdToken;
  isOperator: boolean;
  generics: DeclarationTree[] = [];

  constructor(private ctx: IdContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.name = new IdToken(ctx._name || ctx.operator().start);
    this.isOperator = !!ctx.operator();
    this.generics = getDeclarationTrees(ctx.declaration());
  }

  toString(): string {
    const name = this.isOperator ? this.name + ' ' : this.name;
    if (this.generics.length) {
      return `${name}<|${this.generics.join(', ')}|>`;
    }
    return name.toString();
  }
}
