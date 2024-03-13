import {Nothing} from '../../lib/core';
import {Node} from '../../parser/node/node';
import {SyntaxResult} from '../../parser/syntax-result';
import {SemanticContext} from '../semantic-context';
import {declarationValueSemanticTryParse} from './declaration/declaration-value-semantic-parser';
import {literalValueSemanticTryParse} from './literal/declaration-value-semantic-parser';
import {ValueSemantic} from './value-semantic';

type ValueSemanticTryParseFn = (context: SemanticContext, node: Node) => ValueSemantic | Nothing;

export const parsers: ValueSemanticTryParseFn[] = [literalValueSemanticTryParse, declarationValueSemanticTryParse];

export function valuesSemanticParse(context: SemanticContext, syntax: SyntaxResult) {
  for (const statement of syntax.statements) {
    if (statement.declaration) {
      continue;
    }

    for (const node of statement.children) {
      valueSemanticParse(context, node);
    }
  }
}
export function valueSemanticParse(context: SemanticContext, node: Node | Nothing): ValueSemantic | Nothing {
  if (!node) {
    return;
  }

  node.semantic = parsers.findMap((x) => x(context, node));
}
