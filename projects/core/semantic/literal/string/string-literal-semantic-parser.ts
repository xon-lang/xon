import {Nothing, nothing} from '../../../lib/core';
import {StringLiteralNode} from '../../../parser/node/token/literal/string/string-literal-node';
import {STRING_QUOTE} from '../../../parser/syntax-config';
import {SemanticContext} from '../../semantic-context';
import {StringLiteralSemantic, stringLiteralUsageSemantic} from './string-literal-semantic';

export function stringLiteralSemanticParse(
  context: SemanticContext,
  node: StringLiteralNode,
): StringLiteralSemantic | Nothing {
  const declaration = context.declarationManager.findSingle('String', 0);

  if (!declaration) {
    return nothing;
  }

  const lastIndex = node.text.length > 1 && node.text.last() === STRING_QUOTE ? -1 : node.text.length;
  const reference = context.createReference(node);
  const value = node.text.slice(1, lastIndex);
  const semantic = stringLiteralUsageSemantic(reference, declaration, value);

  return semantic;
}
