import { IdContext } from '../../grammar/xon-parser';
import { IdToken } from '../../util/id-token';
import { SourceReference } from '../../util/source-reference';
import { ParameterTree } from '../parameter/parameter-tree';
import { getParameterTrees } from '../parameter/parameter-tree-helper';
import { Tree } from '../tree';

export class IdTree implements Tree {
  sourceReference: SourceReference;
  name: IdToken;
  generics: ParameterTree[] = [];

  constructor(private ctx: IdContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.name = new IdToken(ctx._name);
    this.generics = getParameterTrees(ctx.parameter());
  }

  toString(): string {
    if (this.generics.length) {
      return `${this.name}<|${this.generics.join(', ')}|>`;
    }
    return this.name.toString();
  }
}
