import {Nothing, nothing} from '../../../../lib/types';
import {$Node, Node, is} from '../../../analyzer/node/node';
import {StringNode} from '../../../analyzer/node/token/string/string-node';
import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {DeclarationKind} from '../../declaration-manager';
import {isTypeDeclarationSemantic} from '../../declaration/declaration-semantic';
import {SemanticContext} from '../../semantic-context';
import {StringTypeSemantic, stringTypeSemantic} from './string-type-semantic';

export function stringTypeSemanticTryParse(
  context: SemanticContext,
  node: Node,
): StringTypeSemantic | Nothing {
  if (!is<StringNode>(node, $Node.STRING)) {
    return nothing;
  }

  const declaration = context.declarationManager.single(
    DeclarationKind.TYPE,
    context.config.literalTypeNames.stringTypeName,
    nothing,
    nothing,
  );

  if (!declaration || !isTypeDeclarationSemantic(declaration)) {
    context.issueManager.addError(
      node.range,
      ISSUE_MESSAGE.declarationNotFound(context.config.literalTypeNames.stringTypeName),
    );

    return nothing;
  }

  const reference = context.createReference(node);
  const semantic = stringTypeSemantic(reference, declaration, node.value);

  return semantic;
}
