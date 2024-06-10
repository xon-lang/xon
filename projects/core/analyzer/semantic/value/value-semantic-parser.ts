import {Array2, Nothing, nothing} from '../../../../lib/types';
import {SyntaxResult} from '../../syntax-context';
import {$Node, ExpressionNode, Node, is} from '../../syntax/node';
import {SemanticContext} from '../semantic-context';
import {idValueSemanticTryParse} from './id/id-value-semantic-parser';
import {integerValueSemanticTryParse} from './integer/integer-value-semantic-parser';
import {invokeValueSemanticTryParse} from './invoke/invoke-value-semantic-parser';
import {memberValueSemanticTryParse} from './member/member-value-semantic-parser';
import {stringValueSemanticTryParse} from './string/string-value-semantic-parser';
import {ValueSemantic} from './value-semantic';

type ValueSemanticTryParseFn = (context: SemanticContext, node: Node) => ValueSemantic | Nothing;

export const parsers: Array2<ValueSemanticTryParseFn> = [
  integerValueSemanticTryParse,
  stringValueSemanticTryParse,
  idValueSemanticTryParse,
  memberValueSemanticTryParse,
  invokeValueSemanticTryParse,
];

export function syntaxValuesParse(context: SemanticContext, syntax: SyntaxResult) {
  for (const statement of syntax.statements) {
    for (const node of statement.children) {
      valueSemanticParse(context, node);
    }
  }
}

export function valueSemanticParse(context: SemanticContext, node: Node | Nothing): ValueSemantic | Nothing {
  if (!is<ExpressionNode>(node, $Node.EXPRESSION)) {
    return nothing;
  }

  const semantic = parsers.findMap((parse) => parse(context, node));

  if (!semantic) {
    return nothing;
  }

  node.semantic = semantic;

  return semantic;
}
