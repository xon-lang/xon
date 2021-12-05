import { TupleTypeContext } from '../../../grammar/xon-parser';
import { TupleTypeMetadata } from '../../../metadata/type/tuple/tuple-type-metadata';
import { getParametersTrees } from '../../parameter/parameter-tree.helper';
import { ParameterTree } from '../../parameter/parameter.tree';
import { TypeTree } from '../type.tree';

export class TupleTypeTree extends TypeTree {
  metadata: TupleTypeMetadata;
  name: string;
  parameters: ParameterTree[];

  constructor(public ctx: TupleTypeContext) {
    super();

    this.name = this.constructor.name.replace(TypeTree.name, '');
    this.parameters = getParametersTrees(ctx.arrayParameters());
  }

  toString(): string {
    return `[${this.parameters.join(', ')}]`;
  }
}
