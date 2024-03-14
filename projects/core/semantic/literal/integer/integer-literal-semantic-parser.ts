import {Nothing, nothing} from '../../../lib/core';
import {IntegerLiteralNode} from '../../../parser/node/token/literal/integer/integer-literal-node';
import {SemanticContext} from '../../semantic-context';
import {IntegerLiteralSemantic, integerLiteralUsageSemantic} from './integer-literal-semantic';

export function integerLiteralSemanticParse(
  context: SemanticContext,
  node: IntegerLiteralNode,
): IntegerLiteralSemantic | Nothing {
  const declaration = context.declarationManager.findSingle('String', 0);

  if (!declaration) {
    return nothing;
  }
  const reference = context.createReference(node);
  const value = Number(node.text);
  const semantic = integerLiteralUsageSemantic(reference, declaration, value);

  return semantic;
}
