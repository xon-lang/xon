import {Nothing, nothing} from '../../../lib/core';
import {IntegerLiteralNode} from '../../../parser/node/token/literal/integer/integer-literal-node';
import {SemanticContext} from '../../semantic-context';
import {declarationTypeSemantic} from '../../type/declaration/declaration-type-semantic';
import {IntegerLiteralSemantic, integerLiteralSemantic} from './integer-literal-semantic';

export function integerLiteralSemanticParse(
  context: SemanticContext,
  node: IntegerLiteralNode,
): IntegerLiteralSemantic | Nothing {
  const declaration = context.declarationManager.findSingle(context.config.literalTypes.integer, 0);

  if (!declaration) {
    return nothing;
  }
  const reference = context.createReference(node);
  const type = declarationTypeSemantic(context, reference, declaration, []);
  const value = Number(node.text);
  const semantic = integerLiteralSemantic(reference, declaration, type, value);

  return semantic;
}
