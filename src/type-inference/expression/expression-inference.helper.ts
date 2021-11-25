import { DeclarationScope } from '../../metadata/handler/new-handler/scope';
import { ArrayExpressionTree } from '../../tree/expression/array-expression/array-expression.tree';
import { CallExpressionTree } from '../../tree/expression/call-expression/call-expression.tree';
import { ExpressionTree } from '../../tree/expression/expression.tree';
import { IdExpressionTree } from '../../tree/expression/id-expression/id-expression.tree';
import { LambdaExpressionTree } from '../../tree/expression/lambda-expression/lambda-expression.tree';
import { LiteralExpressionTree } from '../../tree/expression/literal-expression/literal-expression.tree';
import { MemberExpressionTree } from '../../tree/expression/member-expression/member-expression.tree';
import { ParenthesizedExpressionTree } from '../../tree/expression/parenthesized-expression/parenthesized-expression.tree';
import { PipeExpressionTree } from '../../tree/expression/pipe-expression/pipe-expression.tree';
import { GenericsMap } from '../generics-map';
import { ArrayExpressionInference } from './array-expression/array-expression.inference';
import { CallExpressionInference } from './call-expression/call-expression.inference';
import { ExpressionInference } from './expression.inference';
import { IdExpressionInference } from './id-expression/id-expression.inference';
import { LambdaExpressionInference } from './lambda-expression/lambda-expression.inference';
import { LiteralExpressionInference } from './literal-expression/literal-expression.inference';
import { MemberExpressionInference } from './member-expression/member-expression.inference';
import { ParenthesizedExpressionInference } from './parenthesized-expression/parenthesized-expression.inference';
import { PipeExpressionInference } from './pipe-expression/pipe-expression.inference';

export function getExpressionInference(
  tree: ExpressionTree,
  scope: DeclarationScope,
  genericsMap: GenericsMap = new GenericsMap(),
): ExpressionInference {
  if (tree === undefined) return undefined;

  if (tree instanceof ArrayExpressionTree) return new ArrayExpressionInference(tree, genericsMap);
  if (tree instanceof IdExpressionTree) return new IdExpressionInference(tree, genericsMap);
  if (tree instanceof LambdaExpressionTree) return new LambdaExpressionInference(tree, genericsMap);
  if (tree instanceof LiteralExpressionTree) return new LiteralExpressionInference(tree, scope);
  if (tree instanceof MemberExpressionTree) return new MemberExpressionInference(tree, genericsMap);
  if (tree instanceof CallExpressionTree) return new CallExpressionInference(tree, genericsMap);
  // if (tree instanceof InfixExpressionTree)
  //   return new InfixExpressionInference(tree, genericsMap);
  if (tree instanceof ParenthesizedExpressionTree)
    return new ParenthesizedExpressionInference(tree, genericsMap);
  if (tree instanceof PipeExpressionTree) return new PipeExpressionInference(tree, genericsMap);

  throw new Error(`Expression inference not found for "${tree.constructor.name}"`);
}
