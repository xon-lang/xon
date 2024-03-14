import {Nothing} from '../../../lib/core';
import {IntegerLiteralNode} from '../../../parser/node/token/literal/integer/integer-literal-node';
import {coreDeclarationSemantic} from '../../core';
import {SemanticContext} from '../../semantic-context';
import {IntegerLiteralSemantic, integerLiteralUsageSemantic} from './integer-literal-semantic';

export function integerLiteralSemanticParse(
  context: SemanticContext,
  node: IntegerLiteralNode,
): IntegerLiteralSemantic | Nothing {
  const reference = context.createReference(node);
  const declaration = coreDeclarationSemantic('Integer');
  const value = Number(node.text);
  const semantic = integerLiteralUsageSemantic(reference, declaration, value);

  return semantic;
}
