import { AssignmentContext } from '../../grammar/xon-parser';
import { DefinitionMetadata } from '../../metadata/definition/definition-metadata';
import { BaseTree } from '../base.tree';

export abstract class AssignmentTree extends BaseTree {
  public abstract ctx?: AssignmentContext;
  public definitionMetadata: DefinitionMetadata;
}
