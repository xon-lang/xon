import * as fs from 'fs';
import * as path from 'path';
import { AttributeDeclarationMetadata } from '../metadata/declaration/attribute/attribute-declaration-metadata';
import { DefinitionDeclarationMetadata } from '../metadata/declaration/definition/definition-declaration-metadata';
import { ParameterDeclarationMetadata } from '../metadata/declaration/parameter/parameter-declaration-metadata';
import { DeclarationScope } from '../metadata/scope/declaration-scope';
import { AttributeTree } from '../tree/attribute/attribute-tree';
import { DefinitionTree } from '../tree/definition/definition-tree';
import { IdExpressionTree } from '../tree/expression/id/id-expression-tree';
import { LiteralExpressionTree } from '../tree/expression/literal/literal-expression-tree';
import { ParameterTree } from '../tree/parameter/parameter-tree';
import { SourceTree } from '../tree/source/source-tree';
import { ImportStatementTree } from '../tree/statement/import/import-statement-tree';

export function updateSourceMetadata(tree: SourceTree) {
  const importStatements = tree.statements
    .filter((x) => x instanceof ImportStatementTree)
    .map((x) => x as ImportStatementTree);

  const scope = new DeclarationScope();
  for (const statement of importStatements) {
    _updateImportStatement(statement, scope);
  }

  const otherStatements = tree.statements.filter((x) => !(x instanceof ImportStatementTree));
}

function _updateImportStatement(tree: ImportStatementTree, scope: DeclarationScope) {
  const sourceDir = path.dirname(tree.sourceRange.sourceName);
  if (!fs.existsSync(sourceDir) || !(tree.path instanceof LiteralExpressionTree)) {
    return;
  }
  const importPath = path.resolve(sourceDir, tree.path.toString());
  for (const member of tree.members) {
    if (!(member instanceof IdExpressionTree)) {
      continue;
    }
    
  }
}

function _updateStatement(tree: ParameterTree, scope: DeclarationScope) {
  tree.metadata = new ParameterDeclarationMetadata(tree, scope);
  scope.add(tree.metadata);
}

function _updateExpression(tree: ParameterTree, scope: DeclarationScope) {
  tree.metadata = new ParameterDeclarationMetadata(tree, scope);
  scope.add(tree.metadata);
}

function _updateDefinition(tree: DefinitionTree, scope: DeclarationScope) {
  tree.metadata = new DefinitionDeclarationMetadata(tree, scope);
  scope.add(tree.metadata);

  const innerScope = scope.create();
  for (const attribute of tree.attributes) {
    _updateAttribute(attribute, innerScope);
  }
}

function _updateAttribute(tree: AttributeTree, scope: DeclarationScope) {
  tree.metadata = new AttributeDeclarationMetadata(tree, scope);
  scope.add(tree.metadata);
}

function _updateParameter(tree: ParameterTree, scope: DeclarationScope) {
  tree.metadata = new ParameterDeclarationMetadata(tree, scope);
  scope.add(tree.metadata);
}
