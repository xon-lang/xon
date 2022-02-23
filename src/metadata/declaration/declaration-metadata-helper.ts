import { Issue } from '../../issue-service/issue';
import { DefinitionTree } from '../../tree/definition/definition-tree';
import { ParameterTree } from '../../tree/parameter/parameter-tree';
import { StatementTree } from '../../tree/statement/statement-tree';
import { Tree } from '../../tree/tree';
import { DeclarationScope } from '../scope/declaration-scope';
import { DeclarationMetadata } from './declaration-metadata';
import { DefinitionDeclarationMetadata } from './definition/definition-declaration-metadata';
import { ParameterDeclarationMetadata } from './parameter/parameter-declaration-metadata';

export const getDeclarationMetadata = (
  node: Tree,
  scope: DeclarationScope,
): DeclarationMetadata => {
  if (node === undefined) return undefined;

  if (node instanceof ParameterTree) return new ParameterDeclarationMetadata(node, scope);
  if (node instanceof DefinitionTree) return new DefinitionDeclarationMetadata(node, scope);

  Issue.errorFromTree(node, `Expression node not found for "${node.constructor.name}"`);
};

export const getDeclarationsMetadata = (
  nodes: StatementTree[],
  scope: DeclarationScope,
): DeclarationMetadata[] => {
  return nodes?.map((x) => getDeclarationMetadata(x, scope)) || [];
};
