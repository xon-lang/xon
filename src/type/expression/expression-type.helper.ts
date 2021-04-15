import { ArrayExpressionTree } from '../../tree/expression/array-expression/array-expression.tree';
import { ExpressionTree } from '../../tree/expression/expression.tree';
import { IdExpressionTree } from '../../tree/expression/id-expression/id-expression.tree';
import { IndexExpressionTree } from '../../tree/expression/index-expression/index-expression.tree';
import { InstanceExpressionTree } from '../../tree/expression/instance-expression/instance-expression.tree';
import { LambdaExpressionTree } from '../../tree/expression/lambda-expression/lambda-expression.tree';
import { LiteralExpressionTree } from '../../tree/expression/literal-expression/literal-expression.tree';
import { MemberExpressionTree } from '../../tree/expression/member-expression/member-expression.tree';
import { MethodExpressionTree } from '../../tree/expression/method-expression/method-expression.tree';
import { OperatorExpressionTree } from '../../tree/expression/operator-expression/operator-expression.tree';
import { ParenthesizedExpressionTree } from '../../tree/expression/parenthesized-expression/parenthesized-expression.tree';
import { TypeTree } from '../../tree/type/type.tree';
import { GenericsMap } from '../generics-map';
import { ArrayExpressionType } from './array-expression/array-expression.type';
import { IdExpressionType } from './id-expression/id-expression.type';
import { IndexExpressionType } from './index-expression/index-expression.type';
import { InstanceExpressionType } from './instance-expression/instance-expression.type';
import { LambdaExpressionType } from './lambda-expression/lambda-expression.type';
import { LiteralExpressionType } from './literal-expression/literal-expression.type';
import { MemberExpressionType } from './member-expression/member-expression.type';
import { MethodExpressionType } from './method-expression/method-expression.type';
import { OperatorExpressionType } from './operator-expression/operator-expression.type';
import { ParenthesizedExpressionType } from './parenthesized-expression/parenthesized-expression.type';

export function getExpressionType(tree: ExpressionTree, genericsMap: GenericsMap): TypeTree {
  if (tree instanceof ArrayExpressionTree) return new ArrayExpressionType(tree, genericsMap).type();
  if (tree instanceof IdExpressionTree) return new IdExpressionType(tree, genericsMap).type();
  if (tree instanceof IndexExpressionTree) return new IndexExpressionType(tree, genericsMap).type();
  if (tree instanceof InstanceExpressionTree)
    return new InstanceExpressionType(tree, genericsMap).type();
  if (tree instanceof LambdaExpressionTree)
    return new LambdaExpressionType(tree, genericsMap).type();
  if (tree instanceof LiteralExpressionTree)
    return new LiteralExpressionType(tree, genericsMap).type();
  if (tree instanceof MemberExpressionTree)
    return new MemberExpressionType(tree, genericsMap).type();
  if (tree instanceof MethodExpressionTree)
    return new MethodExpressionType(tree, genericsMap).type();
  if (tree instanceof OperatorExpressionTree)
    return new OperatorExpressionType(tree, genericsMap).type();

  if (tree instanceof ParenthesizedExpressionTree)
    return new ParenthesizedExpressionType(tree, genericsMap).type();

  throw new Error(`${tree.constructor.name} not found`);
}
