import { AssignmentStatementTree } from '../../tree/statement/assignment-statement/assignment-statement.tree';
import { ExpressionStatementTree } from '../../tree/statement/expression-statement/expression-statement.tree';
import { IfStatementTree } from '../../tree/statement/if-statement/if-statement.tree';
import { LoopStatementTree } from '../../tree/statement/loop-statement/loop-statement.tree';
import { PreprocessorStatementTree } from '../../tree/statement/preprocessor-statement/preprocessor-statement.tree';
import { ReturnStatementTree } from '../../tree/statement/return-statement/return-statement.tree';
import { StatementTree } from '../../tree/statement/statement.tree';
import { GenericsMap } from '../generics-map';
import { AssignmentStatementType } from './assignment-statement/assignment-statement.type';
import { ExpressionStatementType } from './expression-statement/expression-statement.type';
import { IfStatementType } from './if-statement/if-statement.type';
import { LoopStatementType } from './loop-statement/loop-statement.type';
import { ReturnStatementType } from './return-statement/return-statement.type';

export function fillStatementTypes(tree: StatementTree, genericsMap: GenericsMap): void {
  if (tree instanceof PreprocessorStatementTree) return;

  if (tree instanceof AssignmentStatementTree)
    new AssignmentStatementType(tree, genericsMap).fillTypes();
  else if (tree instanceof ExpressionStatementTree)
    new ExpressionStatementType(tree, genericsMap).fillTypes();
  else if (tree instanceof IfStatementTree) new IfStatementType(tree, genericsMap).fillTypes();
  else if (tree instanceof LoopStatementTree) new LoopStatementType(tree, genericsMap).fillTypes();
  else if (tree instanceof ReturnStatementTree)
    new ReturnStatementType(tree, genericsMap).fillTypes();
  else throw new Error('StatementType not found');
}
