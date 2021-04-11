/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-param-reassign */
import { AssignmentStatementTree } from '../tree/statement/assignment-statement/assignment-statement.tree';
import { ExpressionStatementTree } from '../tree/statement/expression-statement/expression-statement.tree';
import { IfStatementTree } from '../tree/statement/if-statement/if-statement.tree';
import { LoopStatementTree } from '../tree/statement/loop-statement/loop-statement.tree';
import { ReturnStatementTree } from '../tree/statement/return-statement/return-statement.tree';
import { StatementTree } from '../tree/statement/statement.tree';
import { ArrayTypeTree } from '../tree/type/array-type/array-type.tree';
import { createPlainType } from '../tree/type/type-helper';
import { processExpression } from './expression-typing';
import { addToScope, popScope, pushScope } from './typing';

export function processAssignmentStatement(tree: AssignmentStatementTree): void {
  processExpression(tree.value);
  addToScope(tree.name, tree.value.dataType);
}

export function processExpressionStatement(tree: ExpressionStatementTree): void {
  processExpression(tree.value);
}

export function processIfStatement(tree: IfStatementTree): void {
  pushScope();
  processExpression(tree.condition);
  tree.thenStatements.forEach(processStatement);
  tree.elseStatements.forEach(processStatement);
  popScope();
}

export function processLoopStatement(tree: LoopStatementTree): void {
  pushScope();
  processExpression(tree.expression);
  if (!(tree.expression.dataType instanceof ArrayTypeTree)) throw new Error('Not array');
  addToScope(tree.valueName, tree.expression.dataType.itemType);
  // addToScope(tree.keyName)
  addToScope(tree.indexName, createPlainType('Integer'));
  tree.statements.forEach(processStatement);
  popScope();
}

export function processReturnStatement(tree: ReturnStatementTree): void {
  if (tree.value) processExpression(tree.value);
}

export function processStatement(tree: StatementTree): void {
  if (tree instanceof AssignmentStatementTree) processAssignmentStatement(tree);
  if (tree instanceof ExpressionStatementTree) processExpressionStatement(tree);
  if (tree instanceof IfStatementTree) processIfStatement(tree);
  if (tree instanceof LoopStatementTree) processLoopStatement(tree);
  if (tree instanceof ReturnStatementTree) processReturnStatement(tree);
}
