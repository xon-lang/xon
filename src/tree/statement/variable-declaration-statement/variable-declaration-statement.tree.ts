import { VariableDeclarationStatementContext } from '../../../grammar/xon-parser';
import { DeclarationMetadata } from '../../../metadata/declaration-metadata';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { IdToken } from '../../id-token';
import { getTypeTree } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { StatementTree } from '../statement.tree';

export class VariableDeclarationStatementTree extends StatementTree {
  public id: IdToken;
  public type?: TypeTree;
  public value?: ExpressionTree;
  public declarationMetadata: DeclarationMetadata;

  public constructor(public ctx?: VariableDeclarationStatementContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
    this.type = getTypeTree(ctx.type());
    this.value = getExpressionTree(ctx.expression());
  }
}
