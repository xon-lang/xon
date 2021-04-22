import { ArrayExpressionTree } from '../../tree/expression/array-expression/array-expression.tree';
import { ExpressionTree } from '../../tree/expression/expression.tree';
import { IdExpressionTree } from '../../tree/expression/id-expression/id-expression.tree';
import { IndexExpressionTree } from '../../tree/expression/index-expression/index-expression.tree';
import { InstanceExpressionTree } from '../../tree/expression/instance-expression/instance-expression.tree';
import { InstantiationExpressionTree } from '../../tree/expression/instantiation-expression/instantiation-expression.tree';
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
import { ArrayExpressionInference } from './array-expression/array-expression.inference';
import { ExpressionInference } from './expression.inference';
import { IdExpressionInference } from './id-expression/id-expression.inference';
import { IndexExpressionInference } from './index-expression/index-expression.inference';
import { InstanceExpressionInference } from './instance-expression/instance-expression.inference';
import { InstantiationExpressionInference } from './instantiation-expression/instantiation-expression.inference';
import { LambdaExpressionInference } from './lambda-expression/lambda-expression.inference';
import { LiteralExpressionInference } from './literal-expression/literal-expression.inference';
import { LogicalAndExpressionInference } from './logical-and-expression/logical-and-expression.inference';
import { LogicalNotExpressionInference } from './logical-not-expression/logical-not-expression.inference';
import { LogicalOrExpressionInference } from './logical-or-expression/logical-or-expression.inference';
import { MemberExpressionInference } from './member-expression/member-expression.inference';
import { MethodExpressionInference } from './method-expression/method-expression.inference';
import { NegativeExpressionInference } from './negative-expression/negative-expression.inference';
import { OperatorExpressionInference } from './operator-expression/operator-expression.inference';
import { ParenthesizedExpressionInference } from './parenthesized-expression/parenthesized-expression.inference';

export function getExpressionInference(
  tree: ExpressionTree,
  genericsMap: GenericsMap,
): ExpressionInference {
  if (tree === undefined) return undefined;

  if (tree instanceof ArrayExpressionTree) return new ArrayExpressionInference(tree, genericsMap);
  if (tree instanceof IdExpressionTree) return new IdExpressionInference(tree, genericsMap);
  if (tree instanceof InstantiationExpressionTree)
    return new InstantiationExpressionInference(tree, genericsMap);
  if (tree instanceof IndexExpressionTree) return new IndexExpressionInference(tree, genericsMap);
  if (tree instanceof InstanceExpressionTree)
    return new InstanceExpressionInference(tree, genericsMap);
  if (tree instanceof LambdaExpressionTree) return new LambdaExpressionInference(tree, genericsMap);
  if (tree instanceof LiteralExpressionTree)
    return new LiteralExpressionInference(tree, genericsMap);
  if (tree instanceof MemberExpressionTree) return new MemberExpressionInference(tree, genericsMap);
  if (tree instanceof MethodExpressionTree) return new MethodExpressionInference(tree, genericsMap);
  if (tree instanceof OperatorExpressionTree)
    return new OperatorExpressionInference(tree, genericsMap);
  if (tree instanceof ParenthesizedExpressionTree)
    return new ParenthesizedExpressionInference(tree, genericsMap);
  if (tree instanceof LogicalAndExpressionTree)
    return new LogicalAndExpressionInference(tree, genericsMap);
  if (tree instanceof LogicalOrExpressionTree)
    return new LogicalOrExpressionInference(tree, genericsMap);
  if (tree instanceof LogicalNotExpressionTree)
    return new LogicalNotExpressionInference(tree, genericsMap);
  if (tree instanceof NegativeExpressionTree)
    return new NegativeExpressionInference(tree, genericsMap);

  throw new Error(`Expression inference not found for "${tree.constructor.name}"`);
}
