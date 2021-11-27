import { CallExpressionTree } from '../../../tree/expression/call-expression/call-expression.tree';
import { DeclarationScope } from '../../declaration-scope';
import { FunctionTypeMetadata } from '../../type/function/function-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { ExpressionMetadata } from '../expression-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

export class CallExpressionMetadata extends ExpressionMetadata {
  type: TypeMetadata;
  // instance: FunctionTypeMetadata;
  // arguments: TypeMetadata[];

  constructor(tree: CallExpressionTree, scope: DeclarationScope) {
    super();

    const instanceType = getExpressionMetadata(tree.instance, scope).type;
    if (!(instanceType instanceof FunctionTypeMetadata))
      throw new Error(`Instance type is not a function but '${instanceType.constructor.name}'`);

    if (!instanceType.resultType) throw new Error('Function has not result');

    this.type = instanceType.resultType;
  }
}
