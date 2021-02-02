import { BaseTree } from '../base.tree';
import { DefinitionTree } from '../definition/definition.tree';

export abstract class ExpressionTree extends BaseTree {
  getType(): DefinitionTree {
    throw new Error(this.toJson());
  }
}
