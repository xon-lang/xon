import { AssignmentStatementTree } from '../../tree/statement/assignment-statement/assignment-statement.tree';
import { ExpressionStatementTree } from '../../tree/statement/expression-statement/expression-statement.tree';
import { IfStatementTree } from '../../tree/statement/if-statement/if-statement.tree';
import { LoopStatementTree } from '../../tree/statement/loop-statement/loop-statement.tree';
import { PreprocessorStatementTree } from '../../tree/statement/preprocessor-statement/preprocessor-statement.tree';
import { ReturnStatementTree } from '../../tree/statement/return-statement/return-statement.tree';
import { StatementTree } from '../../tree/statement/statement.tree';
import { GenericsMap } from '../generics-map';
import { AssignmentStatementInference } from './assignment-statement/assignment-statement.inference';
import { ExpressionStatementInference } from './expression-statement/expression-statement.inference';
import { IfStatementInference } from './if-statement/if-statement.inference';
import { LoopStatementInference } from './loop-statement/loop-statement.inference';
import { ReturnStatementInference } from './return-statement/return-statement.inference';
import { StatementInference } from './statement.inference';

export function getStatementInference(
  tree: StatementTree,
  genericsMap: GenericsMap,
): StatementInference {
  if (tree === undefined) return undefined;

  if (tree instanceof PreprocessorStatementTree) return null;

  if (tree instanceof AssignmentStatementTree)
    return new AssignmentStatementInference(tree, genericsMap);
  if (tree instanceof ExpressionStatementTree)
    return new ExpressionStatementInference(tree, genericsMap);
  if (tree instanceof IfStatementTree) return new IfStatementInference(tree, genericsMap);
  if (tree instanceof LoopStatementTree) return new LoopStatementInference(tree, genericsMap);
  if (tree instanceof ReturnStatementTree) return new ReturnStatementInference(tree, genericsMap);

  throw new Error(`Statement inference not found for "${tree.constructor.name}"`);
}
