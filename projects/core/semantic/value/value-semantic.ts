import {Nothing, nothing} from '../../lib/core';
import {$Node, Node, is} from '../../parser/node/node';
import {IdNode} from '../../parser/node/token/id/id-node';
import {SyntaxResult} from '../../parser/syntax-result';
import {Semantic} from '../semantic';
import {SemanticContext} from '../semantic-context';
import {TypeSemantic} from '../type/type-semantic';
import {declarationValueSemanticTryParse} from './declaration/declaration-value-semantic-parse';
import {literalValueSemanticTryParse} from './literal/declaration-value-semantic-parse';

export interface ValueSemantic extends Semantic {
  type: TypeSemantic | Nothing;
}

type ValueSemanticTryParseFn = (context: SemanticContext, node: Node) => ValueSemantic | Nothing;

const valueSemanticParsers: ValueSemanticTryParseFn[] = [
  literalValueSemanticTryParse,
  declarationValueSemanticTryParse,
];

export function valuesSemanticParse(context: SemanticContext, syntax: SyntaxResult) {
  for (const statement of syntax.statements) {
    if (statement.declaration) {
      continue;
    }

    for (const node of statement.children) {
      const semantic = valueSemanticParse(context, node);

      if (is<IdNode>(node, $Node.ID)) {
        node.semantic = semantic;
      }
    }
  }
}

export function valueSemanticParse(context: SemanticContext, node: Node | Nothing): ValueSemantic | Nothing {
  if (!node) {
    return nothing;
  }

  return valueSemanticParsers.findMap((x) => x(context, node));
}
