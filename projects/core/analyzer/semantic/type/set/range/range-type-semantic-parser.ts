import {Nothing, nothing} from '../../../../../../lib/types';
import {ISSUE_MESSAGE} from '../../../../../issue/issue-message';
import {RANGE} from '../../../../lexical/lexical-config';
import {$Node, Node, is} from '../../../../syntax/node';
import {InfixNode} from '../../../../syntax/node/infix/infix-node';
import {DeclarationKind} from '../../../declaration-manager';
import {isTypeDeclarationSemantic} from '../../../declaration/declaration-semantic';
import {$Semantic, semanticIs} from '../../../semantic';
import {SemanticContext} from '../../../semantic-context';
import {IntegerTypeSemantic} from '../../integer/integer-type-semantic';
import {typeSemanticParse} from '../../type-semantic-parser';
import {RangeTypeSemantic, rangeTypeSemantic} from './range-type-semantic';

export function rangeTypeSemanticTryParse(context: SemanticContext, node: Node): RangeTypeSemantic | Nothing {
  if (!is<InfixNode>(node, $Node.INFIX) || node.operator.text !== RANGE) {
    return nothing;
  }

  const declaration = context.declarationManager.single(
    DeclarationKind.TYPE,
    context.config.literalTypeNames.integerTypeName,
    nothing,
    nothing,
  );

  if (!declaration || !isTypeDeclarationSemantic(declaration)) {
    context.issueManager.addError(
      node.range,
      ISSUE_MESSAGE.declarationNotFound(context.config.literalTypeNames.integerTypeName),
    );

    return nothing;
  }

  const reference = context.createReference(node);
  const from = typeSemanticParse(context, node.left);
  const to = typeSemanticParse(context, node.right);
  // todo add step
  const step = nothing;

  if (!from || !to) {
    context.issueManager.addError(node.range, ISSUE_MESSAGE.notImplemented());

    return nothing;
  }

  if (!semanticIs<IntegerTypeSemantic>(from, $Semantic.INTEGER_TYPE)) {
    context.issueManager.addError(node.left.range, ISSUE_MESSAGE.notImplemented());
  }

  if (!semanticIs<IntegerTypeSemantic>(to, $Semantic.INTEGER_TYPE)) {
    context.issueManager.addError(node.right.range, ISSUE_MESSAGE.notImplemented());
  }

  const semantic = rangeTypeSemantic(reference, declaration, from, to, step);

  return semantic;
}
