import { FunctionTypeContext } from '../../../grammar/xon-parser';
import { getTypeTree } from '../type-helper';
import { TypeTree } from '../type.tree';

export class FunctionTypeTree extends TypeTree {
  public parametersTypes: TypeTree[];

  public returnType: TypeTree;

  public constructor(public ctx?: FunctionTypeContext) {
    super();
    if (!ctx) return;

    this.parametersTypes = ctx._params.map(getTypeTree);
    this.returnType = getTypeTree(ctx._returnType);
  }
}
