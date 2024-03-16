import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Nothing, nothing} from '../../../lib/core';
import {ArrayNode} from '../../../parser/node/syntax/array/array-node';
import {DeclarationKind} from '../../declaration-manager';
import {TypeDeclarationSemantic} from '../../declaration/type/type-declaration-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {declarationTypeSemantic} from '../../type/declaration/declaration-type-semantic';
import {LiteralTypeSemantic} from '../../type/literal/literal-type-semantic';
import {typeSemanticParse} from '../../type/type-semantic-parser';
import {ArrayLiteralSemantic, arrayLiteralSemantic} from './array-literal-semantic';

export function arrayLiteralSemanticParse(context: SemanticContext, node: ArrayNode): ArrayLiteralSemantic | Nothing {
  const itemTypes = node.items.map((x) => typeSemanticParse(context, x));

  for (const itemType of itemTypes) {
    if (!itemType || !semanticIs<LiteralTypeSemantic>(itemType, $Semantic.LITERAL_TYPE)) {
      context.issueManager.addError(itemType?.reference.range ?? node.range, ISSUE_MESSAGE.notImplemented());

      return nothing;
    }
  }

  const declaration = context.declarationManager.single(
    DeclarationKind.TYPE,
    context.config.literalTypeNames.arrayTypeName,
    nothing,
    nothing,
  );

  if (!declaration || !semanticIs<TypeDeclarationSemantic>(declaration, $Semantic.TYPE_DECLARATION)) {
    context.issueManager.addError(
      node.range,
      ISSUE_MESSAGE.declarationNotFound(context.config.literalTypeNames.arrayTypeName),
    );

    return nothing;
  }

  const reference = context.createReference(node);
  // todo use union of literals for generics instead of nothing
  const type = declarationTypeSemantic(context, reference, declaration, nothing);
  // todo fix this hack with 'as LiteralTypeSemantic'
  const value: ArrayLiteralSemantic['value'] = (itemTypes as LiteralTypeSemantic[]).map((x) => x.literal);
  const semantic = arrayLiteralSemantic(reference, type, value);

  return semantic;
}
