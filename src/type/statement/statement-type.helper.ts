import { AssignmentStatementTree } from '../../tree/statement/assignment-statement/assignment-statement.tree';
import { StatementTree } from '../../tree/statement/statement.tree';
import { GenericsMap } from '../generics-map';
import { AssignmentStatementType } from './assignment-statement/assignment-statement.type';

export function fillStatementTypes(tree: StatementTree, genericsMap: GenericsMap): void {
  if (tree instanceof AssignmentStatementTree)
    new AssignmentStatementType(tree, genericsMap).fillTypes();
}
