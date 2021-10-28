import { LiteralContext } from '../../grammar/xon-parser';
import { DefinitionMetadata } from '../../metadata/definition/definition-metadata';
import { BaseTree } from '../base.tree';

export abstract class LiteralTree extends BaseTree {
  public abstract ctx?: LiteralContext;
  public abstract value: unknown;
  public definitionMetadata: DefinitionMetadata;
}
