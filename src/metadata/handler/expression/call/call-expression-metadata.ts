import { CallExpressionTree } from '../../../../tree/expression/call-expression/call-expression.tree';
import { IdExpressionTree } from '../../../../tree/expression/id-expression/id-expression.tree';
import { DeclarationScope } from '../../declaration-scope';
import { AttributeDeclarationMetadata } from '../../declaration/attribute/attribute-declaration-metadata';
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

    const instanceType = getExpressionMetadata(tree.instance, scope)
  }
}
