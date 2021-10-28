import { ExpressionContext } from '../../grammar/xon-parser';
import { DefinitionMetadata } from '../../metadata/definition/definition-metadata';
import { BaseTree } from '../base.tree';

export abstract class ExpressionTree extends BaseTree {
  // public metaType: string = this.constructor.name.replace(/ExpressionTree/, '');
  public abstract ctx?: ExpressionContext;
  public definitionMetadata: DefinitionMetadata;
}
