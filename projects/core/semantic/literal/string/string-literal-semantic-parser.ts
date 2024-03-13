import {Nothing} from '../../../lib/core';
import {StringLiteralNode} from '../../../parser/node/token/literal/string/string-literal-node';
import { STRING_QUOTE } from '../../../parser/syntax-config';
import {SemanticContext} from '../../semantic-context';
import {StringLiteralSemantic, stringLiteralUsageSemantic} from './string-literal-semantic';

export function stringLiteralSemanticParse(
  context: SemanticContext,
  node: StringLiteralNode,
): StringLiteralSemantic | Nothing {
  const lastIndex = node.text.length>1?node.text[node.text.length-1];
  const value = node.text.slice();
  const reference = context.createReference(node);
  const semantic = stringLiteralUsageSemantic(reference, value);

  return semantic;
}
