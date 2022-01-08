import { IdContext } from '../../grammar/xon-parser';
import { IdToken } from '../../util/id-token';
import { SourceReference } from '../../util/source-reference';
import { ParameterTree } from '../parameter/parameter-tree';
import { getParameterTrees } from '../parameter/parameter-tree-helper';
import { Tree } from '../tree';

export class IdTree implements Tree {
  sourceReference: SourceReference;
  name: IdToken;
  isOperator: boolean;
  generics: ParameterTree[] = [];

  constructor(private ctx: IdContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.name = new IdToken(ctx._name || ctx.operator().start);
    this.isOperator = !!ctx.operator();
    this.generics = getParameterTrees(ctx.parameter());
  }

  toString(): string {
    const name = this.isOperator ? this.name + ' ' : this.name;
    if (this.generics.length) {
      return `${name}<|${this.generics.join(', ')}|>`;
    }
    return name.toString();
  }
}
