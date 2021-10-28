import { LiteralContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { DefinitionTree } from '../definition/definition-tree';

export abstract class LiteralTree extends BaseTree {
  public abstract ctx?: LiteralContext;
  public abstract value: unknown;
  public definitionLink: DefinitionTree;

  setDefinitionLink(definitionLink: DefinitionTree) {
    this.definitionLink = definitionLink;
  }
}
