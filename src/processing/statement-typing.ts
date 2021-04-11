/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-param-reassign */
import { AssignmentStatementTree } from '../tree/statement/assignment-statement/assignment-statement.tree';
import { ExpressionStatementTree } from '../tree/statement/expression-statement/expression-statement.tree';
import { IfStatementTree } from '../tree/statement/if-statement/if-statement.tree';
import { LoopStatementTree } from '../tree/statement/loop-statement/loop-statement.tree';
import { ReturnStatementTree } from '../tree/statement/return-statement/return-statement.tree';
import { StatementTree } from '../tree/statement/statement.tree';
import { DataType } from './data-type';
import { processExpression } from './expression-typing';
import { addToScope, popScope, pushScope } from './typing';

export function processAssignmentStatement(tree: AssignmentStatementTree): void {
  processExpression(tree.value);
  tree.dataType = tree.value.dataType;
  addToScope(tree.name, tree.value.dataType);
}

export function processExpressionStatement(tree: ExpressionStatementTree): void {
  processExpression(tree.value);
  tree.dataType = tree.value.dataType;
}

export function processIfStatement(tree: IfStatementTree): void {
  pushScope();
  processExpression(tree.condition);
  tree.thenStatements.forEach(processStatement);
  tree.elseStatements.forEach(processStatement);
  popScope();
  const thenDataType = tree.thenStatements[tree.thenStatements.length - 1].dataType;
  const elseDataType = tree.elseStatements[tree.elseStatements.length - 1].dataType;
  if (thenDataType.equals(elseDataType)) tree.dataType = thenDataType;
  else tree.dataType = new DataType('Union', [thenDataType, elseDataType]);
}

export function processLoopStatement(tree: LoopStatementTree): void {
  pushScope();
  processExpression(tree.expression);
  if (tree.expression.dataType.name !== 'Array') throw new Error('Not an array');
  if (!tree.expression.dataType.generics.length) throw new Error('Generics not found');

  const expressionDataType =
    tree.expression.dataType.generics.length > 1
      ? new DataType('Union', tree.expression.dataType.generics)
      : tree.expression.dataType.generics[0];
  addToScope(tree.valueName, expressionDataType);
  addToScope(tree.indexName, new DataType('Integer'));
  tree.statements.forEach(processStatement);
  popScope();
  tree.dataType = tree.statements[tree.statements.length - 1].dataType;
}

export function processReturnStatement(tree: ReturnStatementTree): void {
  if (tree.value) processExpression(tree.value);
  tree.dataType = tree.value.dataType;
}

export function processStatement(tree: StatementTree): void {
  if (tree instanceof AssignmentStatementTree) processAssignmentStatement(tree);
  if (tree instanceof ExpressionStatementTree) processExpressionStatement(tree);
  if (tree instanceof IfStatementTree) processIfStatement(tree);
  if (tree instanceof LoopStatementTree) processLoopStatement(tree);
  if (tree instanceof ReturnStatementTree) processReturnStatement(tree);
}
