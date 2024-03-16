import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Nothing, nothing} from '../../../lib/core';
import {IntegerLiteralNode} from '../../../parser/node/token/literal/integer/integer-literal-node';
import {DeclarationKind} from '../../declaration-manager';
import {TypeDeclarationSemantic} from '../../declaration/type/type-declaration-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {declarationTypeSemantic} from '../../type/declaration/declaration-type-semantic';
import {IntegerLiteralSemantic, integerLiteralSemantic} from './integer-literal-semantic';

export function integerLiteralSemanticParse(
  context: SemanticContext,
  node: IntegerLiteralNode,
): IntegerLiteralSemantic | Nothing {
  const declaration = context.declarationManager.single(
    DeclarationKind.TYPE,
    context.config.literalTypeNames.integerTypeName,
    nothing,
    nothing,
  );

  if (!declaration || !semanticIs<TypeDeclarationSemantic>(declaration, $Semantic.TYPE_DECLARATION)) {
    context.issueManager.addError(
      node.range,
      ISSUE_MESSAGE.declarationNotFound(context.config.literalTypeNames.integerTypeName),
    );

    return nothing;
  }

  const reference = context.createReference(node);
  const type = declarationTypeSemantic(context, reference, declaration, []);
  const value = Number(node.text);
  const semantic = integerLiteralSemantic(reference, type, value);

  return semantic;
}
