/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { AssignmentStatementTree } from '../tree/statement/assignment-statement/assignment-statement.tree';
import { StatementTree } from '../tree/statement/statement.tree';
import { TypeTree } from '../tree/type/type.tree';
import { GenericsMap } from './expression.type';

export function getAssignmentStatementType(tree: AssignmentStatementTree): TypeTree {
  if (tree.type) processExpression(tree.value);
  tree.dataType = tree.value.dataType;
  addToScope(tree.name, tree.value.dataType);
}

export function getStatementType(tree: StatementTree, genericsMap: GenericsMap): TypeTree {
  throw new Error(`${tree.constructor.name} not found`);
}
