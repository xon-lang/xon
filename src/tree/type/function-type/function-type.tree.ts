import { FunctionTypeContext } from '../../../grammar/xon-parser';
import { getTypeTree } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class FunctionTypeTree extends TypeTree {
  name: string;
  genericParameters: string[] = [];
  parameters: TypeTree[] = [];
  returnType: TypeTree;

  constructor(public ctx?: FunctionTypeContext) {
    super();
    if (!ctx) return;

    this.name = this.constructor.name.replace(TypeTree.name, '');
    this.genericParameters = ctx.genericParameters()?._names.map((x) => x.text) || [];
    this.parameters = ctx.typeParameters().type().map(getTypeTree);
    this.returnType = getTypeTree(ctx.type());
  }

  toString(): string {
    const genericParameters = this.genericParameters?.join(', ');
    const parameters = this.parameters.join(', ');
    const returnType = this.returnType;
    return `${genericParameters ? `<${genericParameters}>` : ''}(${parameters}) ${returnType}`;
  }
}
