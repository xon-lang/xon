import { ExpressionContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { DefinitionTree } from '../definition/definition-tree';

export abstract class ExpressionTree extends BaseTree {
  // public metaType: string = this.constructor.name.replace(/ExpressionTree/, '');
  public abstract ctx?: ExpressionContext;
  public definitionLink: DefinitionTree;
}
