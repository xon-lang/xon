import { ArrayExpressionTree } from '../../tree/expression/array-expression/array-expression.tree';
import { ExpressionTree } from '../../tree/expression/expression.tree';
import { IdExpressionTree } from '../../tree/expression/id-expression/id-expression.tree';
import { IndexExpressionTree } from '../../tree/expression/index-expression/index-expression.tree';
import { InstanceExpressionTree } from '../../tree/expression/instance-expression/instance-expression.tree';
import { LambdaExpressionTree } from '../../tree/expression/lambda-expression/lambda-expression.tree';
import { LiteralExpressionTree } from '../../tree/expression/literal-expression/literal-expression.tree';
import { LogicalAndExpressionTree } from '../../tree/expression/logical-and-expression/logical-and-expression.tree';
import { LogicalNotExpressionTree } from '../../tree/expression/logical-not-expression/logical-not-expression.tree';
import { LogicalOrExpressionTree } from '../../tree/expression/logical-or-expression/logical-or-expression.tree';
import { MemberExpressionTree } from '../../tree/expression/member-expression/member-expression.tree';
import { MethodExpressionTree } from '../../tree/expression/method-expression/method-expression.tree';
import { NegativeExpressionTree } from '../../tree/expression/negative-expression/negative-expression.tree';
import { OperatorExpressionTree } from '../../tree/expression/operator-expression/operator-expression.tree';
import { ParenthesizedExpressionTree } from '../../tree/expression/parenthesized-expression/parenthesized-expression.tree';
import { GenericsMap } from '../generics-map';
import { ArrayExpressionType } from './array-expression/array-expression.type';
import { IdExpressionType } from './id-expression/id-expression.type';
import { IndexExpressionType } from './index-expression/index-expression.type';
import { InstanceExpressionType } from './instance-expression/instance-expression.type';
import { LambdaExpressionType } from './lambda-expression/lambda-expression.type';
import { LiteralExpressionType } from './literal-expression/literal-expression.type';
import { LogicalAndExpressionType } from './logical-and-expression/logical-and-expression.type';
import { LogicalNotExpressionType } from './logical-not-expression/logical-not-expression.type';
import { LogicalOrExpressionType } from './logical-or-expression/logical-or-expression.type';
import { MemberExpressionType } from './member-expression/member-expression.type';
import { MethodExpressionType } from './method-expression/method-expression.type';
import { NegativeExpressionType } from './negative-expression/negative-expression.type';
import { OperatorExpressionType } from './operator-expression/operator-expression.type';
import { ParenthesizedExpressionType } from './parenthesized-expression/parenthesized-expression.type';

export function fillExpressionTypes(tree: ExpressionTree, genericsMap: GenericsMap): void {
  if (tree instanceof ArrayExpressionTree) new ArrayExpressionType(tree, genericsMap).fillTypes();
  else if (tree instanceof IdExpressionTree) new IdExpressionType(tree, genericsMap).fillTypes();
  else if (tree instanceof IndexExpressionTree)
    new IndexExpressionType(tree, genericsMap).fillTypes();
  else if (tree instanceof InstanceExpressionTree)
    new InstanceExpressionType(tree, genericsMap).fillTypes();
  else if (tree instanceof LambdaExpressionTree)
    new LambdaExpressionType(tree, genericsMap).fillTypes();
  else if (tree instanceof LiteralExpressionTree)
    new LiteralExpressionType(tree, genericsMap).fillTypes();
  else if (tree instanceof MemberExpressionTree)
    new MemberExpressionType(tree, genericsMap).fillTypes();
  else if (tree instanceof MethodExpressionTree)
    new MethodExpressionType(tree, genericsMap).fillTypes();
  else if (tree instanceof OperatorExpressionTree)
    new OperatorExpressionType(tree, genericsMap).fillTypes();
  else if (tree instanceof ParenthesizedExpressionTree)
    new ParenthesizedExpressionType(tree, genericsMap).fillTypes();
  else if (tree instanceof LogicalAndExpressionTree)
    new LogicalAndExpressionType(tree, genericsMap).fillTypes();
  else if (tree instanceof LogicalOrExpressionTree)
    new LogicalOrExpressionType(tree, genericsMap).fillTypes();
  else if (tree instanceof LogicalNotExpressionTree)
    new LogicalNotExpressionType(tree, genericsMap).fillTypes();
  else if (tree instanceof NegativeExpressionTree)
    new NegativeExpressionType(tree, genericsMap).fillTypes();
  else throw new Error(`Expression type not found for "${tree.constructor.name}"`);
}
