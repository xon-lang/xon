import { AttributeDeclarationMetadata } from '../metadata/declaration/attribute/attribute-declaration-metadata';
import { DefinitionDeclarationMetadata } from '../metadata/declaration/definition/definition-declaration-metadata';
import { ParameterDeclarationMetadata } from '../metadata/declaration/parameter/parameter-declaration-metadata';
import { DeclarationScope } from '../metadata/scope/declaration-scope';
import { AttributeTree } from '../tree/attribute/attribute-tree';
import { DefinitionTree } from '../tree/definition/definition-tree';
import { ParameterTree } from '../tree/parameter/parameter-tree';
import { SourceTree } from '../tree/source/source-tree';

export function updateSourceMetadata(tree: SourceTree) {}

function _updateDefinition(tree: DefinitionTree, scope: DeclarationScope) {
  tree.metadata = new DefinitionDeclarationMetadata(tree, scope);
  scope.add(tree.metadata);

  const innerScope = scope.create()
  for (const attribute of tree.attributes) {
    _updateAttribute(attribute, innerScope)
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

function _updateStatement(tree: ParameterTree, scope: DeclarationScope) {
  tree.metadata = new ParameterDeclarationMetadata(tree, scope);
  scope.add(tree.metadata);
}

function _updateExpression(tree: ParameterTree, scope: DeclarationScope) {
  tree.metadata = new ParameterDeclarationMetadata(tree, scope);
  scope.add(tree.metadata);
}
