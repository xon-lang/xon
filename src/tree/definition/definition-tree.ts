import { DefinitionContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';

export class DefinitionTree extends BaseTree {
  public ctx?: DefinitionContext;
}
