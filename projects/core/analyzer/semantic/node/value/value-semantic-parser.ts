import {$Node, is} from '../../../../$';
import {Array2, Nothing, nothing} from '../../../../../lib/types';
import {ExpressionNode, Node} from '../../../node';
import {SemanticAnalyzer} from '../../semantic-analyzer';
import {idValueSemanticTryParse} from './id/id-value-semantic-parser';
import {integerValueSemanticTryParse} from './integer/integer-value-semantic-parser';
import {invokeValueSemanticTryParse} from './invoke/invoke-value-semantic-parser';
import {memberValueSemanticTryParse} from './member/member-value-semantic-parser';
import {stringValueSemanticTryParse} from './string/string-value-semantic-parser';
import {ValueSemantic} from './value-semantic';

type ValueSemanticTryParseFn = (analyzer: SemanticAnalyzer, node: Node) => ValueSemantic | Nothing;

export const parsers: Array2<ValueSemanticTryParseFn> = [
  integerValueSemanticTryParse,
  stringValueSemanticTryParse,
  idValueSemanticTryParse,
  memberValueSemanticTryParse,
  invokeValueSemanticTryParse,
];

export function syntaxValuesParse(analyzer: SemanticAnalyzer) {
  for (const statement of analyzer.statements) {
    for (const node of statement.children) {
      valueSemanticParse(analyzer, node);
    }
  }
}

export function valueSemanticParse(
  analyzer: SemanticAnalyzer,
  node: Node | Nothing,
): ValueSemantic | Nothing {
  if (!is<ExpressionNode>(node, $Node.ExpressionNode)) {
    return nothing;
  }

  const semantic = parsers.findMap((parse) => parse(analyzer, node));

  if (!semantic) {
    return nothing;
  }

  node.semantic = semantic;

  return semantic;
}
