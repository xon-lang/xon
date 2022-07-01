// this code was generated

import { DefinitionContext } from '../../grammar/xon-parser';
import { Issue } from '../../issue-service/issue';
import { none, None } from '../../lib/core';
import { DefinitionMetadata } from '../../metadata/declaration/definition/definition-metadata';
import { SourceRange } from '../../util/source-range';
import { ExpressionTree } from '../expression/expression-tree';
import { getExpressionTree } from '../expression/expression-tree-helper';
import { IdExpressionTree } from '../expression/id/id-expression-tree';
import { IdTree } from '../id/id-tree';
import { getIdTree } from '../id/id-tree-helper';
import { ParameterTree } from '../parameter/parameter-tree';
import { getParameterTrees } from '../parameter/parameter-tree-helper';
import { SourceTree } from '../source/source-tree';
import { getSourceTree } from '../source/source-tree-helper';
import { DeclarationStatementTree } from '../statement/declaration/declaration-statement-tree';
import { ExpressionStatementTree } from '../statement/expression/expression-statement-tree';
import { StatementTree } from '../statement/statement-tree';
import { Tree } from '../tree';

export class DefinitionTree extends Tree {
  metadata: DefinitionMetadata;
  ctx: DefinitionContext;
  sourceRange: SourceRange;
  modifier: IdTree;
  name: IdTree;
  parameters: ParameterTree[];
  base?: ExpressionTree | None;
  body?: SourceTree;
  attributes: StatementTree[];

  constructor(ctx: DefinitionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.modifier = getIdTree(ctx._modifier);
    this.name = getIdTree(ctx._name);
    this.parameters = getParameterTrees(ctx.parameters()?.parameter()) || none;
    this.base = getExpressionTree(ctx.expression()) || none;

    this.body = getSourceTree(ctx.body()?.source());
    const statements = this.body?.statements || [];
    statements
      .filter(
        (x) =>
          !(
            x instanceof DeclarationStatementTree ||
            (x instanceof ExpressionStatementTree && x.expression instanceof IdExpressionTree)
          ),
      )
      .forEach((x) => Issue.errorFromTree(x, 'Definition body should contain only parameters'));
    this.attributes = statements.filter(
      (x) =>
        x instanceof DeclarationStatementTree ||
        (x instanceof ExpressionStatementTree && x.expression instanceof IdExpressionTree),
    );
    this.addChildren(this.modifier, this.name, ...this.parameters, this.base, ...this.attributes);
  }
}

// this code was generated
