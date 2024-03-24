import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Nothing, nothing} from '../../../lib/core';
import {$Node, Node, is} from '../../../parser/node/node';
import {RangeNode} from '../../../parser/node/syntax/range/range-node';
import {DeclarationKind} from '../../declaration-manager';
import {TypeDeclarationSemantic} from '../../declaration/type/type-declaration-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {IntegerTypeSemantic} from '../integer/integer-type-semantic';
import {typeSemanticParse} from '../type-semantic-parser';
import {RangeTypeSemantic, rangeTypeSemantic} from './range-type-semantic';

export function rangeTypeSemanticTryParse(context: SemanticContext, node: Node): RangeTypeSemantic | Nothing {
  if (!is<RangeNode>(node, $Node.RANGE)) {
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
  const from = typeSemanticParse(context, node.from);
  const to = typeSemanticParse(context, node.to);
  // todo add step
  const step = nothing;

  if (!from || !to) {
    context.issueManager.addError(node.range, ISSUE_MESSAGE.notImplemented());

    return nothing;
  }

  if (!semanticIs<IntegerTypeSemantic>(from, $Semantic.INTEGER_TYPE)) {
    context.issueManager.addError(node.from.range, ISSUE_MESSAGE.notImplemented());
  }

  if (!semanticIs<IntegerTypeSemantic>(to, $Semantic.INTEGER_TYPE)) {
    context.issueManager.addError(node.to.range, ISSUE_MESSAGE.notImplemented());
  }

  const semantic = rangeTypeSemantic(reference, declaration, from, to, step);

  return semantic;
}
