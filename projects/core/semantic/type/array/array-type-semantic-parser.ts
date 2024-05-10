import {ArrayNode} from 'projects/core/parser/node/group/group-node';
import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Nothing, nothing} from '../../../lib/core';
import {$Node, Node, is} from '../../../parser/node/node';
import {DeclarationKind} from '../../declaration-manager';
import {TypeDeclarationSemantic} from '../../declaration/type/type-declaration-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {typeSemanticParse} from '../type-semantic-parser';
import {ArrayTypeSemantic, integerTypeSemantic} from './array-type-semantic';

export function arrayTypeSemanticTryParse(context: SemanticContext, node: Node): ArrayTypeSemantic | Nothing {
  if (!is<ArrayNode>(node, $Node.ARRAY)) {
    return nothing;
  }

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
  const items = node.items.map((x) => typeSemanticParse(context, x.value));
  const semantic = integerTypeSemantic(reference, declaration, items);

  return semantic;
}
