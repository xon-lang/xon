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
import { LoopStatementInference } from './loop-statement/loop-statement.inference.inference';
import { ReturnStatementInference } from './return-statement/return-statement.inference';

export function fillStatementTypes(tree: StatementTree, genericsMap: GenericsMap): void {
  if (tree instanceof PreprocessorStatementTree) return;

  if (tree instanceof AssignmentStatementTree)
    new AssignmentStatementInference(tree, genericsMap).fillTypes();
  else if (tree instanceof ExpressionStatementTree)
    new ExpressionStatementInference(tree, genericsMap).fillTypes();
  else if (tree instanceof IfStatementTree) new IfStatementInference(tree, genericsMap).fillTypes();
  else if (tree instanceof LoopStatementTree) new LoopStatementInference(tree, genericsMap).fillTypes();
  else if (tree instanceof ReturnStatementTree)
    new ReturnStatementInference(tree, genericsMap).fillTypes();
  else throw new Error(`Statement type not found for "${tree.constructor.name}"`);
}
