import { Issue } from '../../issue-service/issue';
import { none } from '../../lib/core';
import { ParameterTree } from '../../tree/parameter/parameter-tree';
import { SourceTree } from '../../tree/source/source-tree';
import { DefinitionStatementTree } from '../../tree/statement/definition/definition-statement-tree';
import { ParameterStatementTree } from '../../tree/statement/parameter/parameter-statement-tree';
import { DeclarationScope } from '../scope/declaration-scope';
import { DeclarationMetadata } from './declaration-metadata';
import { DefinitionDeclarationMetadata } from './definition/definition-declaration-metadata';
import { ParameterDeclarationMetadata } from './parameter/parameter-declaration-metadata';
import { SourceDeclarationMetadata } from './source/source-declaration-metadata';

export type DeclarableTree = SourceTree | ParameterTree | ParameterStatementTree | DefinitionStatementTree;

export const getDeclarationMetadata = (
  tree: DeclarableTree,
  scope: DeclarationScope,
): DeclarationMetadata => {
  if (!tree) return none;

  if (tree instanceof SourceTree) return new SourceDeclarationMetadata(tree, scope);
  if (tree instanceof ParameterTree) return new ParameterDeclarationMetadata(tree, scope);
  if (tree instanceof ParameterStatementTree)
    return new ParameterDeclarationMetadata(tree.parameter, scope);
  if (tree instanceof DefinitionStatementTree)
    return new DefinitionDeclarationMetadata(tree, scope);

  Issue.errorFromTree(tree, `Expression tree not found`);
};

export const getDeclarationsMetadata = (
  trees: DeclarableTree[],
  scope: DeclarationScope,
): DeclarationMetadata[] => {
  return trees?.map((x) => getDeclarationMetadata(x, scope)) || [];
};
