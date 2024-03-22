import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Nothing, nothing} from '../../../lib/core';
import {StringLiteralNode} from '../../../parser/node/token/literal/string/string-literal-node';
import {STRING_QUOTE} from '../../../parser/parser-config';
import {DeclarationKind} from '../../declaration-manager';
import {TypeDeclarationSemantic} from '../../declaration/type/type-declaration-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {declarationTypeSemantic} from '../../type/declaration/declaration-type-semantic';
import {StringLiteralSemantic, stringLiteralSemantic} from './string-literal-semantic';

export function stringLiteralSemanticParse(
  context: SemanticContext,
  node: StringLiteralNode,
): StringLiteralSemantic | Nothing {
  const declaration = context.declarationManager.single(
    DeclarationKind.TYPE,
    context.config.literalTypeNames.stringTypeName,
    nothing,
    nothing,
  );

  if (!declaration || !semanticIs<TypeDeclarationSemantic>(declaration, $Semantic.TYPE_DECLARATION)) {
    context.issueManager.addError(
      node.range,
      ISSUE_MESSAGE.declarationNotFound(context.config.literalTypeNames.stringTypeName),
    );

    return nothing;
  }

  const reference = context.createReference(node);
  const lastIndex = node.text.length > 1 && node.text.last() === STRING_QUOTE ? -1 : node.text.length;
  const value = node.text.slice(1, lastIndex);
  const type = declarationTypeSemantic(context, reference, declaration, []);
  const semantic = stringLiteralSemantic(reference, type, value);

  return semantic;
}
