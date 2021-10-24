import { DefinitionContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';

export abstract class DefinitionTree extends BaseTree {
  public abstract ctx?: DefinitionContext;
  public abstract name: string;
  public metadata
}
