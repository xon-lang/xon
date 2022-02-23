import { DefinitionContext } from '../../grammar/xon-parser';
import { IdToken } from '../../util/id-token';
import { SourceReference } from '../../util/source-reference';
import { ExpressionTree } from '../expression/expression-tree';
import { getExpressionTree } from '../expression/expression-tree-helper';
import { MethodExpressionTree } from '../expression/method/method-expression-tree';
import { IdTree } from '../id/id-tree';
import { getIdTree } from '../id/id-tree-helper';
import { ParameterTree } from '../parameter/parameter-tree';
import { getParameterTrees } from '../parameter/parameter-tree-helper';
import { Tree } from '../tree';

export class DefinitionTree implements Tree {
  sourceReference: SourceReference;
  modifier?: IdToken;
  id: IdTree;
  base?: ExpressionTree;
  attributes: ParameterTree[];

  constructor(private ctx: DefinitionContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.modifier = (ctx.modifier() && new IdToken(ctx.modifier()._name)) || null;
    this.id = getIdTree(ctx.id());
    this.base = getExpressionTree(ctx.expr()) || null;
    this.attributes = getParameterTrees(ctx.parameter());
  }

  toString() {
    let base = this.base?.toString() || '';
    if (base && (this.ctx.id().OPERATOR() || this.base instanceof MethodExpressionTree))
      base = ' ' + base;

    const modifier = (this.modifier && this.modifier.text + ' ') || '';
    const properties = this.attributes
      .filter((x) => !x.type || !(x.type instanceof MethodExpressionTree))
      .join('\n');
    const methodsWithBody = this.attributes
      .filter((x) => x.type && x.type instanceof MethodExpressionTree && x.body)
      .join('\n\n');
    const methodsWithNoBody = this.attributes
      .filter((x) => x.type && x.type instanceof MethodExpressionTree && !x.body)
      .join('\n');
    const attributes =
      '\n' +
      [properties, methodsWithBody, methodsWithNoBody]
        .filter(Boolean)
        .join('\n\n')
        .replace(/^(.+\S)/gm, '  $1');
    return modifier + this.id + base + attributes;
  }
}
