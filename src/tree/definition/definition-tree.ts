// this code was generated

import { DefinitionContext } from '../../grammar/xon-parser';
import { Issue } from '../../issue-service/issue';
import { none, None, String } from '../../lib/core';
import { DefinitionMetadata } from '../../metadata/declaration/definition/definition-metadata';
import { SourceRange } from '../../util/source-range';
import { ExpressionTree } from '../expression/expression-tree';
import { getExpressionTree } from '../expression/expression-tree-helper';
import { MethodExpressionTree } from '../expression/method/method-expression-tree';
import { IdTree } from '../id/id-tree';
import { getIdTree } from '../id/id-tree-helper';
import { ParameterTree } from '../parameter/parameter-tree';
import { getParameterTrees } from '../parameter/parameter-tree-helper';
import { SourceTree } from '../source/source-tree';
import { getSourceTree } from '../source/source-tree-helper';
import { ParameterStatementTree } from '../statement/parameter/parameter-statement-tree';
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
  attributes: ParameterTree[];

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
      .filter((x) => !(x instanceof ParameterStatementTree))
      .forEach((x) => Issue.errorFromTree(x, 'Definition body should contain only parameters'));
    this.attributes = statements
      .filter((x) => x instanceof ParameterStatementTree)
      .map((x) => (x as ParameterStatementTree).parameter);
    this.addChildren(this.modifier, this.name, ...this.parameters, this.base, ...this.attributes);
  }

  toString(): String {
    let modifier, base, parameters, properties, methodsWithBody, methodsWithNoBody, attributes;
    modifier = this.modifier.text + ' ';
    base = (this.base && ' ' + this.base) || '';
    parameters = (this.ctx.parameters() && `(${this.parameters.join(', ')})`) || '';
    properties = this.attributes
      .filter((x) => !(x.type instanceof MethodExpressionTree))
      .join('\n');
    methodsWithBody = this.attributes
      .filter((x) => x.type instanceof MethodExpressionTree && x.body)
      .join('\n\n');
    methodsWithNoBody = this.attributes
      .filter((x) => x.type instanceof MethodExpressionTree && !x.body)
      .join('\n');
    attributes = [properties, methodsWithBody, methodsWithNoBody]
      .filter((x) => x)
      .join('\n\n')
      .replace(/^(.+)/gm, '  $1');
    return modifier + this.name + parameters + base + ((attributes && '\n' + attributes) || '');
  }
}

// this code was generated
