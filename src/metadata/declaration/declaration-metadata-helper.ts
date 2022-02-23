import { Issue } from '../../issue-service/issue';
import { ParameterTree } from '../../tree/parameter/parameter-tree';
import { ParameterStatementTree } from '../../tree/statement/parameter/parameter-statement-tree';
import { ObjectStatementTree } from '../../tree/statement/object/object-statement-tree';
import { StatementTree } from '../../tree/statement/statement-tree';
import { Tree } from '../../tree/tree';
import { DeclarationScope } from '../scope/declaration-scope';
import { DeclarationMetadata } from './declaration-metadata';
import { ModelDeclarationMetadata } from './model/model-declaration-metadata';
import { ObjectDeclarationMetadata } from './object/object-declaration-metadata';
import { ParameterDeclarationMetadata } from './parameter/parameter-declaration-metadata';

export const getDeclarationMetadata = (
  node: Tree,
  scope: DeclarationScope,
): DeclarationMetadata => {
  if (node === undefined) return undefined;

  if (node instanceof ParameterTree) return new ParameterDeclarationMetadata(node, scope);
  if (node instanceof ParameterStatementTree) return new ModelDeclarationMetadata(node, scope);
  if (node instanceof ObjectStatementTree) return new ObjectDeclarationMetadata(node, scope);

  Issue.errorFromTree(node, `Expression node not found for "${node.constructor.name}"`);
};

export const getDeclarationsMetadata = (
  nodes: StatementTree[],
  scope: DeclarationScope,
): DeclarationMetadata[] => {
  return nodes?.map((x) => getDeclarationMetadata(x, scope)) || [];
};
