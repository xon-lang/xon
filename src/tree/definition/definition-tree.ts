import { DefinitionContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { IdToken } from '../id-token';

export abstract class DefinitionTree extends BaseTree {
  public abstract ctx?: DefinitionContext;
  public id: IdToken;
  public metadata;
}
