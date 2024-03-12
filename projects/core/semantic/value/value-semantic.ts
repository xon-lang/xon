import {Nothing, nothing} from '../../lib/core';
import {$Node, Node, is} from '../../parser/node/node';
import {IdNode} from '../../parser/node/token/id/id-node';
import {SyntaxResult} from '../../parser/syntax-result';
import {Semantic} from '../semantic';
import {SemanticContext} from '../semantic-context';
import {TypeSemantic} from '../type/type-semantic';
import {idValueSemanticParse} from './id/id-value-semantic';
import {integerValueSemanticParse} from './literal/integer-value-semantic';

export interface ValueSemantic extends Semantic {
  type: TypeSemantic | Nothing;
}

type ValueSemanticParserFn = (context: SemanticContext, node: Node) => ValueSemantic | Nothing;

const valueSemanticParsers: ValueSemanticParserFn[] = [idValueSemanticParse, integerValueSemanticParse];

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
