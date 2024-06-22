import {Nothing, nothing} from '../../../../../lib/types';
import {ISSUE_MESSAGE} from '../../../../issue/issue-message';
import {$Node, Node, is} from '../../../syntax/node';
import {IntegerNode} from '../../../lexical/token/integer/integer-node';
import {DeclarationKind} from '../../declaration-manager';
import {isTypeDeclarationSemantic} from '../../declaration/declaration-semantic';
import {SemanticContext} from '../../semantic-context';
import {IntegerTypeSemantic, integerTypeSemantic} from './integer-type-semantic';

export function integerTypeSemanticTryParse(
  context: SemanticContext,
  node: Node,
): IntegerTypeSemantic | Nothing {
  if (!is<IntegerNode>(node, $Node.INTEGER)) {
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
  const semantic = integerTypeSemantic(reference, declaration, node.value);

  return semantic;
}
