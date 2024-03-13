import {Nothing} from '../../../lib/core';
import {IntegerLiteralNode} from '../../../parser/node/token/literal/integer/integer-literal-node';
import {SemanticContext} from '../../semantic-context';
import {IntegerLiteralSemantic, integerLiteralUsageSemantic} from './integer-literal-semantic';

export function integerLiteralSemanticParse(
  context: SemanticContext,
  node: IntegerLiteralNode,
): IntegerLiteralSemantic | Nothing {
  const value = Number(node.text);
  const reference = context.createReference(node);
  const semantic = integerLiteralUsageSemantic(reference, value);

  return semantic;
}
