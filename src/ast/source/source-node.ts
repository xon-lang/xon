import { SourceContext } from '../../grammar/xon-parser';
import { getDeclarationNodes } from '../declaration/declaration-node-helper';
import { Node } from '../node';
import { StatementNode } from '../statement/statement-node';
import { SourceReference } from '../util/source-reference';

export class SourceNode implements Node {
  sourceReference: SourceReference;
  declarations: StatementNode[] = [];

  constructor(ctx: SourceContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.declarations = getDeclarationNodes(ctx.declaration());
  }

  toString(): string {
    return this.declarations.join('\n\n');
  }
}
