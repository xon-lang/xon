import { DefinitionContext } from '../../grammar/xon-parser';
import { Metadata } from '../../metadata/metadata';
import { DefinitionTree } from '../../tree/definition/definition-tree';

export class DefinitionNode {
  context: DefinitionContext;
  tree: DefinitionTree;
  metadata: Metadata;
}
