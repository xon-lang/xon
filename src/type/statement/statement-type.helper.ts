import { AssignmentStatementTree } from '../../tree/statement/assignment-statement/assignment-statement.tree';
import { ExpressionStatementTree } from '../../tree/statement/expression-statement/expression-statement.tree';
import { IfStatementTree } from '../../tree/statement/if-statement/if-statement.tree';
import { StatementTree } from '../../tree/statement/statement.tree';
import { GenericsMap } from '../generics-map';
import { AssignmentStatementType } from './assignment-statement/assignment-statement.type';
import { ExpressionStatementType } from './expression-statement/expression-statement.type';
import { IfStatementType } from './if-statement/if-statement.type';

export function fillStatementTypes(tree: StatementTree, genericsMap: GenericsMap): void {
  if (tree instanceof AssignmentStatementTree)
    new AssignmentStatementType(tree, genericsMap).fillTypes();
  if (tree instanceof ExpressionStatementTree)
    new ExpressionStatementType(tree, genericsMap).fillTypes();
  if (tree instanceof IfStatementTree) new IfStatementType(tree, genericsMap).fillTypes();
}
