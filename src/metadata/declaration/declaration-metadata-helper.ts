import { Issue } from '../../issue-service/issue';
import { AttributeTree } from '../../tree/attribute/attribute-tree';
import { DefinitionTree } from '../../tree/definition/definition-tree';
import { ParameterTree } from '../../tree/parameter/parameter-tree';
import { StatementTree } from '../../tree/statement/statement-tree';
import { Tree } from '../../tree/tree';
import { DeclarationScope } from '../scope/declaration-scope';
import { AttributeDeclarationMetadata } from './attribute/attribute-declaration-metadata';
import { DeclarationMetadata } from './declaration-metadata';
import { DefinitionDeclarationMetadata } from './definition/definition-declaration-metadata';
import { ParameterDeclarationMetadata } from './parameter/parameter-declaration-metadata';

export const getDeclarationMetadata = (
  tree: Tree,
  scope: DeclarationScope,
): DeclarationMetadata => {
  if (!tree) return null;

  if (tree instanceof AttributeTree) return new AttributeDeclarationMetadata(tree, scope);
  if (tree instanceof ParameterTree) return new ParameterDeclarationMetadata(tree, scope);
  if (tree instanceof DefinitionTree) return new DefinitionDeclarationMetadata(tree, scope);

  Issue.errorFromTree(tree, `Expression tree not found for "${tree.constructor.name}"`);
};

export const getDeclarationsMetadata = (
  trees: StatementTree[],
  scope: DeclarationScope,
): DeclarationMetadata[] => {
  return trees?.map((x) => getDeclarationMetadata(x, scope)) || [];
};
