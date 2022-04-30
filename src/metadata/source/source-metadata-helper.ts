import { Issue } from '../../issue-service/issue';
import { SourceTree } from '../../tree/source/source-tree';
import { DeclarationScope } from '../scope/declaration-scope';
import { SourceMetadata } from './source-metadata';

export function getSourceMetadata(tree: SourceTree, scope: DeclarationScope): SourceMetadata {
  try {
    return new SourceMetadata(tree, scope);
  } catch (error) {
    Issue.errorFromTree(tree, error.toString());
  }
}
