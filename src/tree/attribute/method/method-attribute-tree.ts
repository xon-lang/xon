import { MethodAttributeContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../id-token';
import { getStatementsTrees } from '../../statement/statement-tree.helper';
import { StatementTree } from '../../statement/statement.tree';
import { getTypeParametersTrees } from '../../type-parameter/type-parameter-tree.helper';
import { TypeParameterTree } from '../../type-parameter/type-parameter.tree';
import { LambdaTypeTree } from '../../type/lambda/lambda-type.tree';
import { getTypeTree } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { AttributeModifierTree } from '../attribute-modifier-tree';
import { AttributeTree } from '../attribute-tree';

export class MethodAttributeTree extends AttributeTree {
  modifiers: AttributeModifierTree[] = [];
  id: IdToken;
  typeParameters: TypeParameterTree[] = [];
  type: TypeTree;
  body: StatementTree[] = [];

  constructor(public ctx: MethodAttributeContext) {
    super();

    const header = ctx.attributeHeader();
    this.modifiers = header.attributeModifier().map((x) => new AttributeModifierTree(x));
    this.id = IdToken.fromContext(header.attributeName());
    this.typeParameters = getTypeParametersTrees(header.typeParameters()) || [];
    this.type = getTypeTree(ctx.type());
    this.body = getStatementsTrees(ctx.statement());
  }

  toString(): string {
    const modifiers = this.modifiers.length ? this.modifiers.join(' ') + ' ' : '';
    const typeParameters = this.typeParameters.length
      ? '<' + this.typeParameters.join(', ') + '>'
      : '';
    const statements = this.body.join('\n').replace(/^/gm, '  ');
    const type = this.type instanceof LambdaTypeTree ? this.type : ' ' + this.type;
    return `${modifiers}${this.id}${typeParameters}${type}\n${statements}`;
  }
}
