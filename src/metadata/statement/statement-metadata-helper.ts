import { Issue } from '../../issue-service/issue';
import { DefinitionStatementTree } from '../../tree/statement/definition/definition-statement-tree';
import { ExpressionStatementTree } from '../../tree/statement/expression/expression-statement-tree';
import { ParameterStatementTree } from '../../tree/statement/parameter/parameter-statement-tree';
import { StatementTree } from '../../tree/statement/statement-tree';
import { DeclarationScope } from '../scope/declaration-scope';
import { DefinitionStatementMetadata } from './definition/definition-statement-metadata';
import { ExpressionStatementMetadata } from './expression/expression-statement-metadata';
import { ParameterStatementMetadata } from './parameter/parameter-statement-metadata';
import { StatementMetadata } from './statement-metadata';

export function getStatementMetadata(
  tree: StatementTree,
  scope: DeclarationScope,
): StatementMetadata {
  try {
    if (tree instanceof ExpressionStatementTree)
      return new ExpressionStatementMetadata(tree, scope);
    if (tree instanceof ParameterStatementTree) return new ParameterStatementMetadata(tree, scope);
    if (tree instanceof DefinitionStatementTree)
      return new DefinitionStatementMetadata(tree, scope);

    throw `Statement metadata not found for '${tree.constructor.name}'`;
  } catch (error) {
    Issue.errorFromTree(tree, error.toString());
  }
}
